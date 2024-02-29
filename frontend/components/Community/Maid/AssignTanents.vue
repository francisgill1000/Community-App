<template>
  <v-dialog persistent v-model="dialog" width="700">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-icon color="black" small>mdi-account</v-icon>
        Assign Tanent(s)
      </span>
    </template>
    <v-card>
      <v-card-title>Assign Tanent(s)</v-card-title>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-autocomplete
              label="Tanent"
              multiple
              outlined
              v-model="parent_ids"
              :items="tanents"
              item-value="id"
              item-text="full_name"
              dense
              :hide-details="!errors.parent_ids"
              :error-messages="
                errors && errors.parent_ids ? errors.parent_ids[0] : ''
              "
            >
            </v-autocomplete>
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
export default {
  props: ["id"],
  data: () => ({
    parent_ids: [],

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
  async created() {
    this.loading = false;

    let { data: tanents } = await this.$axios.get(`tanent-list`, {
      params: { company_id: this.$auth.user.company_id },
    });
    this.tanents = tanents;

    let { data: associated_tanent_ids } = await this.$axios.get(
      `get-associated-tanent-ids/${this.id}`
    );
    this.parent_ids = associated_tanent_ids;
  },

  methods: {
    submit() {
      this.$axios
        .post("/assign-tanents/" + this.id, { parent_ids: this.parent_ids })
        .then(({ data }) => {
          this.handleSuccessResponse("Maid has been assigned");
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
