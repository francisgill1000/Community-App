<template>
  <v-dialog persistent v-model="dialog" width="900">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-icon color="black" small>mdi-pencil</v-icon>
        Edit
      </span>
    </template>
    <v-card>
      <v-card-title>Edit Maid</v-card-title>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-row>
              <v-col cols="12">
                <CameraORUpload
                  :PreviewImage="PreviewImage"
                  @imageSrc="handleAttachment"
                />
                <span
                  v-if="errors && errors.profile_picture"
                  class="text-danger mt-2"
                  >{{ errors.profile_picture[0] }}</span
                >
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="9">
            <v-row>
              <v-col cols="6">
                <v-autocomplete
                  @change="setSystemUserId(payload.parent_id)"
                  label="Tanent"
                  outlined
                  v-model="payload.parent_id"
                  :items="tanents"
                  item-value="id"
                  item-text="full_name"
                  dense
                  :hide-details="!errors.parent_id"
                  :error-messages="
                    errors && errors.parent_id ? errors.parent_id[0] : ''
                  "
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Device User Id"
                  :readonly="true"
                  v-model="payload.system_user_id"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.system_user_id"
                  :error-messages="
                    errors && errors.system_user_id
                      ? errors.system_user_id[0]
                      : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="First Name"
                  v-model="payload.first_name"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.first_name"
                  :error-messages="
                    errors && errors.first_name ? errors.first_name[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Last Name"
                  v-model="payload.last_name"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.last_name"
                  :error-messages="
                    errors && errors.last_name ? errors.last_name[0] : ''
                  "
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  label="Age"
                  v-model="payload.age"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.age"
                  :error-messages="errors && errors.age ? errors.age[0] : ''"
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  label="Nationality"
                  v-model="payload.nationality"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.nationality"
                  :error-messages="
                    errors && errors.nationality ? errors.nationality[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="RFID"
                  v-model="payload.rfid"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.rfid"
                  :error-messages="errors && errors.rfid ? errors.rfid[0] : ''"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Phone Number"
                  v-model="payload.phone_number"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.phone_number"
                  :error-messages="
                    errors && errors.phone_number ? errors.phone_number[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-radio-group
                  class="ma-0 mt-2 px-2 pa-0"
                  v-model="payload.gender"
                  row
                  :hide-details="!errors.gender"
                  :error-messages="
                    errors && errors.gender ? errors.gender[0] : ''
                  "
                >
                  <v-radio label="Male" value="Male"></v-radio>
                  <v-radio label="Female" value="Female"></v-radio>
                  <v-radio label="Other" value="Other"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-right my-1">
            <v-btn @click="dialog = false">Close</v-btn>
            <v-btn class="primary" @click="submit(payload)">Submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["item"],
  data: () => ({
    payload: {
      parent_id: ``,
      system_user_id: 111111,
      first_name: "",
      last_name: "",
      age: "",
      member_type: "",
      nationality: "",
      gender: "",
      rfid: "",
      pin: "",
      full_name: "",
      phone_number: "",
    },
    PreviewImage:"/no-profile-image.jpg",

    snack: false,
    snackColor: "",
    snackText: "",

    dialog: false,
    current_page: 1,
    color: "background",
    response: "",
    snackbar: false,
    btnLoader: false,
    max_employee: 0,
    upload: {
      name: "",
    },
    snackbar: false,
    ids: [],
    loading: false,
    //total: 0,
    response: "",
    errors: [],
    formAction: "Create",
    tanents: [],
  }),
  mounted() {
    this.PreviewImage = this.item.profile_picture;
    this.payload = {
      ...this.item,
      profile_picture: '',
    };
  },
  async created() {
    this.loading = false;

    let { data: tanents } = await this.$axios.get(`tanent-list`, {
      params: { company_id: this.$auth.user.company_id },
    });
    this.tanents = tanents;

    this.payload.parent_id = parseInt(this.item.parent_id);

    this.setSystemUserId(this.payload.parent_id);
  },

  methods: {
    setSystemUserId(id) {
      const tenant = this.tanents.find((e) => e.id === id);

      if (tenant) {
        const { system_user_id, members_count } = tenant;
        this.payload.system_user_id =
          parseInt(system_user_id) + members_count + 1;
      } else {
        this.payload.system_user_id = `Tenant with ID ${id} not found.`;
      }
    },
    handleAttachment(e) {
      this.payload.profile_picture = e;
    },

    submit(member) {
      this.$axios
        .post("/update-member/" + this.item.id, member)
        .then(({ data }) => {
          this.handleSuccessResponse("Maid has been updated");
        })
        .catch(({ response }) => {
          this.handleErrorResponse(response);
        });

      // }
    },
    handleSuccessResponse(message) {
      this.errors = [];
      this.dialog = false;
      this.$emit("response", message);
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
