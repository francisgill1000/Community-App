<template>
  <v-card>
    <v-container>
      <v-row no-gutters>
        <v-col cols="4" style="border-right: 1px solid #dddddd">
          <h3>{{ caps(item?.visitor_type) }}</h3>

          <v-row class="pa-0 ma-0">
            <v-col cols="12">
              <v-row no-gutters>
                <v-col cols="12" class="text-center">
                  <v-avatar size="100">
                    <img
                      style="width: 100%"
                      src="/no-profile-image.jpg"
                      alt="Avatar"
                    />
                  </v-avatar>
                </v-col>
                <v-col cols="12" class="text-center">
                  <div style="height: 15px; font-size: 12px" class="mt-1">
                    {{ item.full_name }}
                    <!-- Static First Name -->
                  </div>

                  <div style="font-size: 12px">
                    <small>
                      {{ item.phone_number }}
                      <!-- Static Phone Number -->
                    </small>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-divider></v-divider>
              <v-row no-gutters style="font-size: 15px">
                <v-col cols="6">
                  <small> First Name </small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small> {{ item.first_name }} </small>
                </v-col>
                <v-col cols="6">
                  <small> Last Name </small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small> {{ item.last_name }} </small>
                </v-col>
                <v-col cols="6">
                  <small> Emirates Id </small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small> {{ item.id_number }} </small>
                </v-col>
                <v-col cols="6">
                  <small> Visitor Card Id </small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small> {{ item.system_user_id }} </small>
                </v-col>
                <v-col cols="6">
                  <small> Email </small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small> {{ item.email }} </small>
                </v-col>
                <v-col cols="6">
                  <small> Phone Number </small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small> {{ item.phone_number }} </small>
                </v-col>
                <v-col cols="6">
                  <small> Purpose </small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small> {{ item?.purpose?.name || "---" }} </small>
                </v-col>
                <v-col cols="6">
                  <small> Gender </small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small> {{ item.gender }} </small>
                </v-col>

                <v-col cols="6">
                  <small> Visit From </small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small> {{ item.visit_from }} {{ item.time_in }} </small>
                </v-col>

                <v-col cols="6">
                  <small> Visit To </small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small> {{ item.visit_to }} {{ item.time_out }} </small>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="8">
          <v-divider></v-divider>
          <v-row no-gutters class="mx-2">
            <v-col
              cols="6"
              class="text-center"
              style="
                border-bottom: 1px solid #dddddd;
                border-right: 1px solid #dddddd;
              "
            >
              <b style="display: block; height: 20px">
                <small>Checkin</small>
              </b>
              <div style="font-size: 12px">
                {{ (firstItem && firstItem.LogTime) || "---" }}
              </div>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
              style="border-bottom: 1px solid #dddddd"
            >
              <b style="display: block; height: 20px">
                <small>Checkout</small>
              </b>
              <div style="font-size: 12px">
                {{ (lastItem && lastItem.LogTime) || "---" }}
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters class="px-3">
            <v-col cols="12">
              <div class="mt-4">
                <!-- Assuming you want to keep the structure but remove dynamic content -->
                <table style="width: 100%">
                  <tr>
                    <td style="font-size: 12px">
                      <small>
                        <b>#</b>
                      </small>
                    </td>
                    <td style="font-size: 12px">
                      <small>
                        <b>Date Time</b>
                      </small>
                    </td>
                    <td style="font-size: 12px">
                      <small><b>Device</b></small>
                    </td>
                  </tr>
                  <!-- Static rows for logs_data -->
                  <tr v-for="(log, index) in item.attendance_logs" :key="index">
                    <td
                      style="font-size: 14px; border-bottom: 1px solid #dddddd"
                    >
                      <small>{{ index + 1 }}</small>
                    </td>
                    <td
                      style="font-size: 14px; border-bottom: 1px solid #dddddd"
                    >
                      <small>{{ log.date }}</small>
                    </td>
                    <td
                      style="font-size: 14px; border-bottom: 1px solid #dddddd"
                    >
                      <small>{{ log?.device?.short_name ?? "Manual" }}</small>
                    </td>
                  </tr>
                </table>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["UserID", "visitor_type"],
  data: () => ({
    loading: false,
    dialog: false,
    payload: {},
    // UserID: null,
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
    this.search();
  },
  methods: {
    caps(str) {
      if (str) return str.replace(/\b\w/g, (c) => c.toUpperCase());
    },
    close() {
      this.searchCard = true;
      this.infoCard = false;

      this.dialog = false;
    },
    search() {
      console.log(this.UserID);
      this.loading = true;
      this.response = null;
      this.$axios
        .get("get_logs_by_visitor_id", {
          params: {
            per_page: 100,
            company_id: this.$auth.user.company_id,
            UserID: this.UserID,
            user_type: this.visitor_type,
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
