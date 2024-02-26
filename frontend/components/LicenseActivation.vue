<template>
  <v-app>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title> License Activation Key</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="licenseKey"
            label="License Key"
            outlined
            dense
            required
            hide-details
          ></v-text-field>
          <span class="error--text" v-if="response">{{ response }}</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="activateLicense">Activate</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container>
      <v-btn color="primary" @click="openDialog">Activate License</v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      licenseKey: "",
      response: null,
    };
  },
  created() {
    // this.$axios
    //   .get(`verfiy-license-key`)
    //   .then(({ data }) => {
    //     if (!data) {
    //       this.dialog = true;
    //       this.$emit("verified", true);
    //       return;
    //     }
    //     this.$emit("verified", false);
    //   })
    //   .catch((err) => console.log(err));
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    activateLicense() {
      this.$axios
        .get(`activate-license-key?license_key=${this.licenseKey}`)
        .then(({ data }) => {
          if (!data) {
            this.dialog = true;
            this.response = "Your key is invalid/expired";
            this.$emit("verified", true);
            return;
          }

          this.dialog = false;
          this.$emit("verified", false);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
