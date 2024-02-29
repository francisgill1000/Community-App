<template>
  <table>
    <tr>
      <td>Full Name</td>
      <td>Phone Number</td>
      <td>Email</td>
      <td>Room Number</td>
      <td>Floor Number</td>
    </tr>
    <tr v-for="(parent_id, index) in parent_ids" :key="index">
      <td>{{ getTanent(parent_id).full_name }}</td>
      <td>{{ getTanent(parent_id).phone_number }}</td>
      <td>{{ getTanent(parent_id).email }}</td>
      <td>{{ getTanent(parent_id).room.room_number }}</td>
      <td>{{ getTanent(parent_id).floor.floor_number }}</td>


    </tr>
  </table>
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
    getTanent(id) {
      const tenant = this.tanents.find((e) => e.id === id);

      if (tenant) {
        return tenant;
      } else {
        return false;
      }
    },
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
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
