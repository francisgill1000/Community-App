<template>
  <v-dialog persistent v-model="dialog" max-width="700">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-btn dense small class="primary" text title="Add Company">
          Delete Card
          <v-icon right dark>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </span>
    </template>
    <v-card>
      <v-toolbar flat dense class="popup_background">
        <span class="popup_title">Sync Device</span>

        <v-spacer></v-spacer>

        <v-icon @click="render" class="primary--text"> mdi-reload </v-icon>
        <v-icon @click="dialog = false" class="primary--text">
          mdi-close
        </v-icon>
      </v-toolbar>
      <v-card-text>
        <table style="width: 100%" class="mt-2">
          <thead>
            <tr class=" " dark>
              <th style="width: 30%">Device ID</th>
              <th style="width: 60%">Message</th>
              <th class="text-center">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(d, index) in data" :key="index">
              <td>{{ d.DeviceID }}</td>
              <td v-html="d.message"></td>
              <td class="text-center">
                <v-icon color="primary" v-if="d.status">mdi-check</v-icon>
                <v-icon color="error" v-else>mdi-close</v-icon>
              </td>
            </tr>

            <tr v-if="data.length == 0">
              <td colspan="3" class="text-center">No Data available</td>
            </tr>
          </tbody>
        </table>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    data: [],

    devices: ["ABC123", "DEF456", "GHI789", "FC-8300T20094123"],
  }),
  created() {
    this.render();
  },
  methods: {
    render() {
      this.data = [];
      this.devices.forEach((e) => {
        let payload = {
          rfid: "72014",
          device_id: e,
        };

        this.$axios.post("delete-card", payload).then(({ data }) => {
          this.data.push({
            status: data.status,
            message: data.message,
            DeviceID: payload.device_id,
          });
        });
      });
    },
  },
};
</script>
<style scoped>
@import url("@/assets/tableStyles.css");
</style>
