<template>
  <div>
    <div v-if="!loading">
      <!-- <v-card class="py-2 mb-2">
        <v-row align-self="center">
          <v-col
            style="padding-left: 25px"
            lg="6"
            md="6"
            sm="6"
            xs="6"
            class="laptop-padding"
            align-self="center"
            >Total Employees</v-col
          >

          <v-col
            lg="4"
            md="4"
            sm="4"
            xs="4"
            class="text-red bold text-h3 red--text laptop-padding"
            align-self="center"
            style="margin-left: 5px"
            >{{ data.employeeCount }}</v-col
          >
        </v-row>
      </v-card> -->

      <v-row>
        <v-col
          md="6"
          xs="12"
          sm="12"
          cols="12"
          v-for="(card, index) in cardsJson"
          :key="index"
        >
          <v-card class="py-2">
            <v-row class="pa-2">
              <v-row class="pa-0 ma-0" style="width: 100%">
                <v-col md="6">
                  <v-avatar size="50">
                    <v-img :src="card.src" />
                  </v-avatar>
                  <!-- <v-icon color="blue" size="30" fill>mdi-airplane-takeoff</v-icon> -->
                </v-col>
                <v-col md="6" class="menu-icon-right">
                  <v-menu bottom left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn dark-2 icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list width="120" dense>
                      <v-list-item @click="viewLogs(card.link)">
                        <v-list-item-title style="cursor: pointer">
                          View Logs
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col md="12" style="text-align: center; padding-top: 0px">
                  <div class="bold text-h3" :class="`${card.color}--text`">
                    {{ card.count }}
                  </div>

                  <div style="text-align: center">{{ card.label }}</div>
                </v-col>
              </v-row>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <ComonPreloader icon="face-scan" v-if="loading" />
  </div>
</template>

<script>
// import VueApexCharts from 'vue-apexcharts'

export default {
  props: ["branch_id"],
  data() {
    return {
      offlineDevices: 0,
      leaveRequests: 0,
      data: {
        employeeCount: 0,
        totalIn: 0,
        totalOut: 0,
        presentCount: 0,
        absentCount: 0,
        missingCount: 0,
        offCount: 0,
        holidayCount: 0,
        leaveCount: 0,
        vaccationCount: 0,

        flats_count: 0,
        occupied_count: 0,
        car_parking_count: 0,
        allocated_count: 0,
        offline_devices: 0,
        contract_expiring_count: 0,
      },
      loading: false,
      cardsJson: [],
    };
  },
  watch: {
    branch_id() {
      this.loading = true;
      this.$store.commit("dashboard/right_statistics", null);

      this.getDataFromApi();
      this.loading = false;
    },
  },
  created() {
    this.getDataFromApi();
  },

  methods: {
    viewLeaves() {
      this.$router.push("/leaves");
    },
    viewLogs(link = "/") {
      this.$router.push(link);
    },
    viewDevices() {
      this.$router.push("/device");
    },
    getDataFromApi() {
      if (this.$store.state.right_statistics) {
        this.data = this.$store.state.right_statistics;

        // this.flats_count = flats_count;
        // this.occupied_count = occupied_count;
        // this.car_parking_count = car_parking_count;
        // this.allocated_count = allocated_count;
        // this.offline_devices = offline_devices;
        // this.contract_expiring_count = contract_expiring_count;
      } else {
        this.$axios
          .get("community_dashboard_get_assets_statistics", {
            params: {
              company_id: this.$auth.user.company_id,
              branch_id: this.branch_id > 0 ? this.branch_id : null,
            },
          })
          .then(({ data }) => {
            this.data = data;

            this.cardsJson = [
              {
                src: "/home-green-1.png",
                link: "/",
                count: data.flats_count,
                label: "Flats/Houses",
                color: "green",
              },
              {
                src: "/home-red-1.png",
                link: "",
                count: data.occupied_count,
                label: "Occupied",
                color: "red",
              },
              {
                src: "/parking-1.png",
                link: "",
                count: data.car_parking_count,
                label: "Car Parking",
                color: "green",
              },
              {
                src: "/allocated-parking-1.png",
                link: "",
                count: data.allocated_count,
                label: "Allocated",
                color: "red",
              },
              {
                src: "/device-teal-1.png",
                link: "",
                count: data.offline_devices,
                label: "Offline Devices",
                color: "teal",
              },
              {
                src: "/expired-1.png",
                link: "",
                count: data.contract_expiring_count,
                label: "Contract Expiring",
                color: "red",
              },
            ];
            // let {
            //   flats_count,
            //   occupied_count,
            //   car_parking_count,
            //   allocated_count,
            //   offline_devices,
            //   contract_expiring_count,
            // } = data;
            // this.flats_count = flats_count;
            // this.occupied_count = occupied_count;
            // this.car_parking_count = car_parking_count;
            // this.allocated_count = allocated_count;
            // this.offline_devices = offline_devices;
            // this.contract_expiring_count = contract_expiring_count;
          });
      }
    },

    getDeviceStatus() {
      this.$axios
        .get(`/devcie_count_Status/${this.$auth.user.company_id}`, {
          params: {
            company_id: this.$auth.user.company_id,
            branch_id: this.branch_id > 0 ? this.branch_id : null,
          },
        })
        .then(({ data }) => {
          this.offlineDevices = data.series ? data.series[1] : 0;
          this.$store.commit(
            "dashboard/off_devices_count",
            this.offlineDevices
          );
        });
    },
    getPendingLeavesCount() {
      let options = {
        params: {
          company_id: this.$auth.user.company_id || 0,
          branch_id: this.branch_id > 0 ? this.branch_id : null,
        },
      };

      this.$axios.get(`employee_leaves_new`, options).then(({ data }) => {
        this.leaveRequests = data.total_pending_count;
        this.$store.commit(
          "dashboard/leaves_request_count",
          data.total_pending_count
        );
      });
    },
  },
};
</script>

<!-- <style>
.menu-icon-right {
  margin: auto;
  text-align: right;
}
</style> -->
