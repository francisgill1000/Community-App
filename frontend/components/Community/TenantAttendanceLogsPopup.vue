<template>
  <v-card>
    <v-container>
      <v-row no-gutters>
        <v-col cols="4" style="border-right: 1px solid #dddddd">
          <v-divider></v-divider>
          <v-card elevation="0" outlined>
            <v-container>
              <v-row>
                <v-col cols="12" class="text-center">
                  <v-avatar size="100" style="border: 1px solid #dddddd">
                    <v-img
                      v-if="item.profile_picture"
                      :src="item.profile_picture"
                    ></v-img>
                    <v-img v-else src="/no-profile-image.jpg"></v-img>
                  </v-avatar>
                  <div class="mt-1" style="font-size: 14px; height: 10px">
                    {{ item.member_type }}
                  </div>
                </v-col>
                <v-col cols="12">
                  <v-row no-gutters>
                    <v-col cols="6">
                      <small style="font-size: 11px">ID</small>
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <small style="font-size: 11px">
                        {{ item.system_user_id }}
                      </small>
                    </v-col>
                    <v-col cols="6">
                      <small style="font-size: 11px">Full Name</small>
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <small style="font-size: 11px">
                        {{ item.full_name }}
                      </small>
                    </v-col>
                    <v-col cols="6">
                      <small style="font-size: 11px">Phone Number</small>
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <small style="font-size: 11px">
                        {{ item.phone_number }}
                      </small>
                    </v-col>
                    <v-col cols="6">
                      <small style="font-size: 11px">Age</small>
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <small style="font-size: 11px">
                        {{ item.age }} years old
                      </small>
                    </v-col>
                    <v-col cols="4">
                      <small style="font-size: 11px">Nationality</small>
                    </v-col>
                    <v-col cols="8" class="text-right">
                      <small style="font-size: 11px">
                        {{ item.nationality }}
                      </small>
                    </v-col>
                    <v-col cols="3">
                      <small style="font-size: 11px">Gender</small>
                    </v-col>
                    <v-col cols="9" class="text-right">
                      <small style="font-size: 11px"> {{ item.gender }} </small>
                    </v-col>
                    <v-col cols="3">
                      <small style="font-size: 11px">RFID</small>
                    </v-col>
                    <v-col cols="9" class="text-right">
                      <small style="font-size: 11px"> {{ item.rfid }} </small>
                    </v-col>
                    <v-col cols="3">
                      <small style="font-size: 11px">Pin</small>
                    </v-col>
                    <v-col cols="9" class="text-right">
                      <small style="font-size: 11px"> {{ item.pin }} </small>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-divider></v-divider>

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
  props: ["visitor_type", "UserID"],
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
    close() {
      this.searchCard = true;
      this.infoCard = false;

      this.dialog = false;
    },
    search() {
      this.loading = true;
      this.response = null;
      this.$axios
        .get("get_logs_by_user_id", {
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
