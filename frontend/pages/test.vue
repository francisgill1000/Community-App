<template>
  <v-dialog persistent v-model="dialog" width="700">
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
          <v-col cols="12">
            <v-text-field
              v-model="UserID"
              label="Search"
              hide-details
              dense
              outlined
            ></v-text-field>
            <v-btn @click="search" color="primary" class="mt-2" block
              >Search</v-btn
            >
          </v-col>
          <v-col cols="12" v-if="response && response.status">
            {{ response.message }}
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card v-if="infoCard">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" class="text-right"
            ><v-icon color="primary" @click="close"> mdi-close </v-icon>
          </v-col>
          <v-col cols="4" style="border-right: 1px solid #dddddd">
            <v-divider></v-divider>
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
                      John Doe
                      <!-- Static First Name -->
                    </div>
                    <div style="height: 15px; font-size: 12px">
                      <small>
                        Designation
                        <!-- Static Designation -->
                      </small>
                    </div>
                    <div style="font-size: 12px">
                      <small>
                        +1234567890
                        <!-- Static Phone Number -->
                      </small>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12">
                <v-divider></v-divider>
                <v-row no-gutters style="font-size: 15px; height: 20px">
                  <v-col cols="6">
                    <small> Title </small>
                    <!-- Static Title -->
                  </v-col>
                  <v-col cols="6" class="text-right">
                    <small> Value </small>
                    <!-- Static Value -->
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
                <div style="font-size: 12px">2024-03-01 10:00:00</div>
              </v-col>
              <v-col
                cols="6"
                class="text-center"
                style="border-bottom: 1px solid #dddddd"
              >
                <b style="display: block; height: 20px">
                  <small>Checkout</small>
                </b>
                <div style="font-size: 12px">2024-03-01 11:00:00</div>
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
                    <tr v-for="(item, index) in data" :key="index">
                      <td
                        style="
                          font-size: 14px;
                          border-bottom: 1px solid #dddddd;
                        "
                      >
                        <small>1</small>
                      </td>
                      <td
                        style="
                          font-size: 14px;
                          border-bottom: 1px solid #dddddd;
                        "
                      >
                        <small>2024-03-01 10:00:00</small>
                      </td>
                      <td
                        style="
                          font-size: 14px;
                          border-bottom: 1px solid #dddddd;
                        "
                      >
                        <small>Device 1</small>
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
  </v-dialog>
</template>

<script>
export default {
  props: ["visitor_type"],
  data: () => ({
    loading: false,
    dialog: false,
    payload: {},
    UserID: null,
    searchCard: true,
    infoCard: false,
    data: [],
    response: {},
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
      this.$axios
        .get("attendance_logs", {
          params: {
            per_page: 100,
            company_id: this.$auth.user.company_id,
            UserID: this.UserID,
          },
        })
        .then(({ data }) => {
          if (data.data.length == 0) {
            console.log("Sdfsf", data.data);

            this.response = {
              status: false,
              message: "No record found",
            };
            this.loading = false;
            return;
          }
          console.log("Sdfsf", data.data);
          this.response = {
            status: true,
            message: null,
          };

          this.searchCard = false;
          this.infoCard = true;
          this.data = data.data;
          this.loading = false;
        })
        .catch(({ response }) => {
          this.searchCard = false;
          this.infoCard = true;
          this.loading = false;

          this.response = {
            status: false,
            message: "Error occured",
          };
          console.log("error:", response);
        });
    },

    async submit() {
      let log_payload = {
        UserID: user_id,
        LogTime: this.getCurrentDateTime(),
        DeviceID: "Manual",
        company_id: this.$auth.user.company_id,
        log_type: "out",
      };

      this.loading = true;

      this.$axios
        .post(`/generate_log`, log_payload)
        .then(({ data }) => {
          this.loading = false;

          if (!data.status) {
            this.errors = data.errors;
          } else {
            this.render_report(date, this.shift_type_id);
            this.$emit("close-popup");
            this.snackbar = true;
            this.response = data.message;
          }
        })
        .catch(({ message }) => {
          this.snackbar = true;
          this.response = message;
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
