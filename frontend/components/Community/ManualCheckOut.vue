<template>
  <v-dialog persistent v-model="dialog" width="750">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-icon color="black">mdi-magnify</v-icon>
      </span>
    </template>
    <v-card v-if="searchCard">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" class="text-right"
            ><v-icon color="primary" @click="close"> mdi-close </v-icon>
          </v-col>
          <v-col cols="12" class="my-1">
            <v-text-field
              v-model="UserID"
              label="Search"
              hide-details
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="red--text" v-if="response">
            <div class="my-1">
              {{ response }}
            </div>
          </v-col>
          <v-col cols="12">
            <v-btn
              :loading="loading"
              @click="search"
              color="primary"
              class="mt-2"
              block
              >Search</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card v-if="infoCard && item && item.id">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" class="text-right"
            ><v-icon color="primary" @click="close"> mdi-close </v-icon>
          </v-col>

          <v-col cols="12">
            <VisitorAttendanceLogsPopup
              :UserID="item.id"
              :visitor_type="visitor_type"
            />

            <v-btn
              :loading="loading"
              @click="checkout"
              color="primary"
              class="mt-2"
              block
              >Checkout {{ item.id }}</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import VisitorAttendanceLogsPopup from "./VisitorAttendanceLogsPopup.vue";

export default {
  props: ["visitor_type"],
  components: { VisitorAttendanceLogsPopup },
  data: () => ({
    loading: false,
    dialog: false,
    payload: {},
    UserID: null,
    searchCard: true,
    infoCard: false,
    item: {},
    response: null,
    firstItem: {},
    lastItem: {},
    errors: [],
  }),
  async created() {
    this.loading = false;
  },
  methods: {
    close() {
      this.searchCard = true;
      this.infoCard = false;

      this.dialog = false;
    },
    search() {
      this.loading = true;
      this.response = null;
      this.$axios
        .get("search_visitor_by_user_id", {
          params: {
            UserID: this.UserID,
          },
        })
        .then(({ data }) => {
          if (!data) {
            this.response = "No record found";
            this.loading = false;
            return;
          }
          this.response = null;
          this.searchCard = false;
          this.infoCard = true;
          this.item = data;
          this.loading = false;

          // Get the first item
          let logs = data.attendance_logs;

          this.firstItem = logs[0];
          this.lastItem = logs[logs.length - 1];
        })
        .catch(({ response }) => {
          this.response = null;
          this.searchCard = false;
          this.infoCard = true;
          this.data = [];
          this.loading = false;
          console.log("error:", response);
        });
    },

    async checkout() {
      let log_payload = {
        UserID: this.UserID,
        LogTime: this.getCurrentDateTime(),
        DeviceID: "Manual",
        company_id: this.$auth.user.company_id,
        log_type: "out",
        visitor_id: this.item.id,
      };

      this.loading = true;

      this.$axios
        .post(`generate_log`, log_payload)
        .then(({ data }) => {
          this.loading = false;

          if (!data.status) {
            this.errors = data.errors;
          } else {
            this.render_report();
          }
        })
        .catch(({ message }) => {
          this.$emit("response", "Checkout cannot be done");
        });
    },

    async render_report() {
      let log_payload = {
        UserIds: [this.UserID],
        LogTime: this.getCurrentDateTime(),
        DeviceID: "Manual",
        company_id: this.$auth.user.company_id,
        log_type: "out",
        id: this.item.id,
      };

      this.loading = true;

      this.$axios
        .post(`community_common_report`, log_payload)
        .then(({ data }) => {
          this.loading = false;

          if (!data.status) {
            this.errors = data.errors;
          } else {
            this.$emit("success", "Checkout has been recorded");
            this.dialog = false;
          }
        })
        .catch(({ message }) => {
          this.$emit("response", "Checkout cannot be done");
        });
    },

    getCurrentDateTime() {
      let now = new Date();

      let year = now.getFullYear();
      let month = String(now.getMonth() + 1).padStart(2, "0"); // Adding 1 because January is 0
      let day = String(now.getDate()).padStart(2, "0");
      let hours = String(now.getHours()).padStart(2, "0");
      let minutes = String(now.getMinutes()).padStart(2, "0");

      let logtime = `${year}-${month}-${day} ${hours}:${minutes}`;

      return logtime;
    },
  },
};
</script>
