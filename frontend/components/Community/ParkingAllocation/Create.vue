<template>
  <v-dialog persistent v-model="DialogBox" width="500">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-icon right color="black">mdi-plus-circle</v-icon>
      </span>
    </template>
    <v-card>
      <v-toolbar class="popup_background" flat dense>
        Parking Allocation

        <v-spacer></v-spacer>
        <span>
          <v-icon class="ml-2" @click="DialogBox = false" dark>
            mdi mdi-close-circle-outline</v-icon
          >
        </span>
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-autocomplete
              @change="getFloorByCategory(payload.category)"
              label="Category"
              outlined
              :disabled="disabled"
              v-model="payload.category"
              :items="[
                `Commercial`,
                `Residence`,
                `VIP`,
                `Guest`,
                `Green`,
                `Special Needs`,
              ]"
              dense
              :hide-details="!errors.category"
              :error-messages="
                errors && errors.category ? errors.category[0] : ''
              "
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              @change="getParkingsByFloor(payload.floor_id)"
              label="Floor Number"
              outlined
              :readonly="disabled"
              v-model="payload.floor_id"
              :items="floors"
              dense
              item-text="floor_number"
              item-value="id"
              :hide-details="!errors.floor_id"
              :error-messages="
                errors && errors.floor_id ? errors.floor_id[0] : ''
              "
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              label="Parking Number"
              outlined
              :readonly="disabled"
              v-model="payload.parking_id"
              :items="parkings"
              dense
              item-text="parking_number"
              item-value="id"
              :hide-details="!errors.parking_id"
              :error-messages="
                errors && errors.parking_id ? errors.parking_id[0] : ''
              "
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              label="Tanent"
              outlined
              :readonly="disabled"
              v-model="payload.tanent_id"
              :items="tanents"
              dense
              item-text="full_name"
              item-value="id"
              :hide-details="!errors.tanent_id"
              :error-messages="
                errors && errors.tanent_id ? errors.tanent_id[0] : ''
              "
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Car Number"
              :readonly="disabled"
              v-model="payload.car_number"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.car_number"
              :error-messages="
                errors && errors.car_number ? errors.car_number[0] : ''
              "
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              label="Car Brand"
              :readonly="disabled"
              v-model="payload.car_brand"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.car_brand"
              :error-messages="
                errors && errors.car_brand ? errors.car_brand[0] : ''
              "
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <div class="text-right">
          <v-btn small color="grey white--text" @click="DialogBox = false">
            Close
          </v-btn>
          <v-btn
            small
            :loading="loading"
            color="primary"
            @click="submit"
          >
            Submit
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["id"],

  data: () => ({
    disabled: false,
    openTimePicker: false,
    closeTimePicker: false,

    menu: false,
    payload: {
      tanent_id: "",
      parking_id: "",
      car_number: "",
      car_brand: "",
    },

    DialogBox: false,
    color: "background",
    response: "",
    endpoint: "parking-allocation",
    loading: false,
    data: [],
    errors: [],
    parkings: [],
    tanents: [],
    floors: [],
  }),

  async created() {
    this.loading = false;
    await this.getTanents();
  },

  methods: {
    filterAttr(data) {
      this.filters.from_date = data.from;
      this.filters.to_date = data.to;
      this.filters.filterType = "Monthly";
    },
    async getFloorByCategory(category) {
      let { data } = await this.$axios.get(
        `parking-floor-by-category/${category}`
      );
      this.floors = data;
    },
    async getParkingsByFloor(id) {
      let { data } = await this.$axios.get(`parkings-by-floor/${id}`);
      this.parkings = data;
    },
    async getTanents() {
      let { data: tanents } = await this.$axios.get(`tanent-list`, {
        params: { company_id: this.$auth.user.company_id },
      });

      this.tanents = tanents;
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },
    submit() {
      this.$axios
        .post(this.endpoint, this.payload)
        .then(({ data }) => {
          this.errors = [];
          this.DialogBox = false;
          this.$emit("response", data.message);
        })
        .catch(({ response }) => {
          if (!response) {
            this.$emit("response", "error occured");
            this.DialogBox = false;
            return false;
          }
          let { status, data, statusText } = response;

          if (status && status == 422) {
            this.errors = data.errors;
            return;
          }
          this.$emit("response", "error occured");
          this.DialogBox = false;
        });

      // }
    },
    update_data() {
      this.$axios
        .put(this.endpoint + "/" + this.payload.vehicle.id, this.payload)
        .then(({ data }) => {
          this.errors = [];
          this.snackbar = true;
          this.response = data.message;
          this.DialogBox = false;
        })
        .catch(({ response }) => {
          if (!response) {
            return false;
          }
          let { status, data, statusText } = response;

          if (status && status == 422) {
            this.errors = data.errors;
            return;
          }

          this.snackbar = true;
          this.response = statusText;
        });
    },
  },
};
</script>
