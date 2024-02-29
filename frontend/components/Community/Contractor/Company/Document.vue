<template>
  <v-dialog persistent v-model="dialog" width="700">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-icon small color="black">mdi-file</v-icon> Add Doc(s)
      </span>
    </template>
    <v-card>
      <v-card-title>Add Document(s)</v-card-title>
      <v-container>
        <v-row v-for="(file, index) in files" :key="index">
          <v-col cols="6">
            <v-file-input
              v-model="files[index].file"
              label="Choose File"
              show-size
              @change="onFileChange(index)"
            ></v-file-input>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="files[index].name"
              label="Name"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-btn color="primary" @click="submit">Submit</v-btn>

        <v-list v-if="uploadedFiles.length > 0">
          <v-list-item v-for="(file, index) in uploadedFiles" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ file.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["id"],
  data: () => ({
    dialog: false,
    loading: true,
    payload: {
      document_name: "",
    },
    errors: [],
    files: [{ file: null, name: "" }],
    uploadedFiles: [],
  }),

  async created() {
    this.loading = false;
    this.payload.id = this.id;
  },

  methods: {
    onFileChange(index) {
      if (index === this.files.length - 1) {
        this.files.push({ file: null, name: "" });
      }
    },
    submit() {
      // Here you can handle the submission of files
      // For demonstration, we are just copying the files to uploadedFiles
      this.uploadedFiles = [...this.files];
    },
    handleAttachment(e) {
      this.payload.document = e;
    },
    mapper(obj) {
      let formData = new FormData();

      for (let x in obj) {
        formData.append(x, obj[x]);
      }
      if (this.payload.document) {
        formData.append("document", this.upload.name);
      }
      formData.append("company_id", this.$auth.user.company_id);

      return formData;
    },

    submit() {
      this.handleSuccessResponse("Document has been added successfully");
      //   this.$axios
      //     .post(`contractor`, this.mapper(Object.assign(this.payload)))
      //     .then(({ data }) => {
      //       this.errors = [];
      //     })
      //     .catch(({ response }) => {
      //       this.handleErrorResponse(response);
      //     });
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
