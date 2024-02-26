<template>
  <v-dialog persistent v-model="dialog" max-width="500px">
    <!-- <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
    </template> -->
    <v-card>
      <v-card-title>
        <span class="headline">Setup Configuration</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              outlined
              dense
              hide-details
              v-model="payload.email"
              label="Email"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              dense
              hide-details
              v-model="payload.password"
              label="Password"
              type="password"
            ></v-text-field>
           
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              dense
              hide-details
              v-model="payload.path"
              label="Database Path"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <div class="text-right mx-6 pb-2">
        <v-btn color="grey" dark small @click="closeDialog">Close</v-btn>
        <v-btn :loading="loading" color="primary" small @click="saveConfig"
          >Save</v-btn
        >
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      loading: false,
      payload: {},
    };
  },
  async created() {
    let { data } = await this.$axios.get("setup");
    if (!data) {
      this.dialog = true;
    }
  },
  methods: {
    async saveConfig() {
      try {
        // Display a loading indicator or disable the save button
        this.loading = true;

        // Make the POST request to save configuration
        const { data } = await this.$axios.post("setup", this.payload);
        // Check if the response was successful
        if (data.status) {
          await this.generateSchema();
        } else {
          // Display an error message to the user
          alert("Failed to submit record. Please try again.");
        }
      } catch (error) {
        // Handle errors appropriately
        console.error("Error occurred while saving configuration:", error);
        alert(
          "An error occurred while saving configuration. Please try again later."
        );
      }
    },

    async generateSchema() {
      try {
        // Display a loading indicator or disable the save button
        this.loading = true;

        // Make the POST request to save configuration
        const response = await this.$axios.post("generate-schema");

        // Check if the response was successful
        if (response.status === 200) {
          // Display a success message to the user
          alert("Database configuration updated successfully");
          // Close the dialog
          this.closeDialog();
        } else {
          // Display an error message to the user
          alert("Failed to submit record. Please try again.");
        }
      } catch (error) {
        // Handle errors appropriately
        console.error("Error occurred while saving configuration:", error);
        alert(
          "An error occurred while saving configuration. Please try again later."
        );
      } finally {
        // Hide the loading indicator or enable the save button
        this.loading = false;
      }
    },
    closeDialog() {
      this.dialog = false;
      this.loading = false;
      this.payload = {};
    },
  },
};
</script>
