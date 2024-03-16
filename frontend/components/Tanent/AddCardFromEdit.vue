<template>
  <v-dialog persistent v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-alert outlined color="primary" dense class="text-center">
          <v-icon color="primary" small> mdi-credit-card-scan-outline </v-icon>
          Add Card(s)
        </v-alert>
      </span>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="mb-2">
              <b>Add Card</b>
            </div>
          </v-col>

          <v-col cols="12">
            <v-text-field
              label="Device User Id"
              :readonly="true"
              v-model="payload.system_user_id"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.system_user_id"
              :error-messages="
                errors && errors.system_user_id ? errors.system_user_id[0] : ''
              "
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Card Name"
              :readonly="disabled"
              v-model="payload.full_name"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.full_name"
              :error-messages="
                errors && errors.full_name ? errors.full_name[0] : ''
              "
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              append-icon="mdi-credit-card-scan-outline"
              label="RFID"
              :readonly="disabled"
              v-model="payload.rfid"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.rfid"
              :error-messages="errors && errors.rfid ? errors.rfid[0] : ''"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-right my-1">
            <v-btn @click="dialog = false">Close</v-btn>
            <v-btn class="primary" @click="submit">Submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import "cropperjs/dist/cropper.css";
import VueCropper from "vue-cropperjs";

export default {
  props: ["item"],
  components: {
    VueCropper,
  },

  data: () => ({
    disabled: false,
    step: 1,
    payload: {
      term: "---",
      gender: "---",
      first_name: "---",
      last_name: "---",
      full_name: "",
      phone_number: "----------",
      age: "---",
      nationality: "---",
      floor_id: 0,
      room_id: 0,
      start_date: "",
      end_date: "",
      member_type: "card",
    },

    snack: false,
    snackColor: "",
    snackText: "",
    dialog: false,
    loading: false,
    color: "background",
    snackbar: false,
    response: "",
    errors: [],
  }),

  async created() {
    this.loading = false;
    this.payload.parent_id = this.item.tanent_id;
    this.payload.system_user_id = this.item.system_user_id;
  },

  methods: {
    submit() {
      this.payload.company_id = this.$auth.user.company_id;

      this.$axios
        .post(`add-card`, this.payload)
        .then(({ data }) => {
          this.errors = [];
          this.handleSuccessResponse("Card inserted successfully");
        })
        .catch(({ response }) => {
          this.handleErrorResponse(response);
        });
    },
    handleSuccessResponse(message) {
      this.errors = [];
      this.dialog = false;
      this.$emit("success", message);
    },
    handleErrorResponse(response) {
      if (!response) {
        this.snackbar = true;
        this.response = "An unexpected error occurred.";
        return;
      }
      let { status, data, statusText } = response;

      if (status && status == 422) {
        this.errors = data.errors;
        return;
      }

      this.snackbar = true;
      this.response = statusText;
    },
  },
};
</script>
