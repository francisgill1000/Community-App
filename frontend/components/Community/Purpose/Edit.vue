<template>
  <v-dialog persistent v-model="DialogBox" width="500">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-icon color="black" small>mdi-pencil</v-icon>
        Edit
      </span>
    </template>
    <v-card>
      <v-toolbar class="popup_background" flat dense>
        Edit Purpose

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
              label="Type"
              outlined
              v-model="payload.type"
              :items="[`contractor`, `visitor`, `delivery man`]"
              dense
              :hide-details="!errors.type"
              :error-messages="errors && errors.type ? errors.type[0] : ''"
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Purpose"
              v-model="payload.name"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.name"
              :error="errors.name"
              :error-messages="errors && errors.name ? errors.name[0] : ''"
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

          <v-btn small :loading="loading" color="primary" @click="submit">
            Submit
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["item"],
  data: () => ({
    payload: {},
    endpoint: "purpose",
    DialogBox: false,
    loading:false,
    errors: [],
  }),
  created() {
    this.payload = this.item;
  },
  methods: {
    submit() {
      this.payload.company_id = this.$auth.user.company_id;
      this.$axios
        .put(this.endpoint + "/" + this.payload.id, this.payload)
        .then(({ data }) => {
          this.errors = [];
          this.$emit("success", "Purpose updated successfully");
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

          this.response = statusText;
        });
    },
  },
};
</script>
