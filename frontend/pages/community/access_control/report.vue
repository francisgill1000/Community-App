<template>
  <div v-if="can(`dashboard_access`)">
    <v-card elevation="1" class="mt-2">
      <v-toolbar dense flat>
        <span class="headline black--text">Access Control</span>
        <span>
          <v-btn
            dense
            class="ma-0 px-0"
            x-small
            :ripple="false"
            text
            title="Reload"
          >
            <v-icon class="ml-2" @click="getDataFromApi" dark
              >mdi-reload</v-icon
            >
          </v-btn>
        </span>
      </v-toolbar>

      <v-card-text class="py-3">
        <v-row>
          <v-col md="2" sm="2">
            <v-select
              label="User Type"
              outlined
              dense
              v-model="payload.user_type"
              x-small
              :items="[
                {
                  id: ``,
                  name: `Select All`,
                },
                { id: `Primary`, name: `Tanent` },
                { id: `Owner`, name: `Owner` },
                { id: `Family Member`, name: `Family Member` },
                { id: `Maid`, name: `Maid` },
                { id: `Employee`, name: `Employee` },
                { id: `visitor`, name: `Visitor` },
                { id: `delivery`, name: `Delivery` },
                { id: `contractor`, name: `Contractor` },
              ]"
              item-value="id"
              item-text="name"
              :hide-details="true"
              @change="getUsersByType(payload.user_type)"
            ></v-select>
          </v-col>
          <v-col md="2" sm="4">
            <v-select
              label="Door"
              outlined
              dense
              v-model="payload.DeviceID"
              x-small
              :items="[{ device_id: ``, name: `Select All` }, ...devices]"
              item-value="device_id"
              item-text="name"
              :hide-details="true"
            ></v-select>
          </v-col>
          <v-col md="2" sm="4">
            <v-autocomplete
              density="comfortable"
              label="Members"
              outlined
              dense
              v-model="payload.UserID"
              x-small
              :items="[
                { system_user_id: ``, full_name: `Select All` },
                ...users,
              ]"
              item-value="system_user_id"
              item-text="full_name"
            ></v-autocomplete>
          </v-col>
          <v-col md="2" sm="5">
            <CustomFilter
              @filter-attr="filterAttr"
              :defaultFilterType="1"
              :height="'40px '"
            />
          </v-col>
          <v-col md="2" sm="2">
            <v-btn @click="getDataFromApi()" color="primary" primary fill
              >Generate
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mb-5 mt-5" elevation="1">
      <div>
        <div class="text-center">
          <v-snackbar
            v-model="snackbar"
            top="top"
            color="secondary"
            elevation="24"
          >
            {{ response }}
          </v-snackbar>
          <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
            {{ snackText }}

            <template v-slot:action="{ attrs }">
              <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
            </template>
          </v-snackbar>
        </div>
        <v-card class="mb-0" elevation="0">
          <v-toolbar class="backgrounds" flat style="height: 40px">
            <!-- <v-toolbar-title>
                <span class="headline black--text"> Device Logs</span>
              </v-toolbar-title> -->
            <!-- <span>
                <v-btn
                  dense
                  class="ma-0 px-0"
                  x-small
                  :ripple="false"
                  text
                  title="Reload"
                >
                  <v-icon class="ml-2" @click="getDataFromApi" dark
                    >mdi-reload</v-icon
                  >
                </v-btn>
              </span> -->
            <v-spacer></v-spacer>
            <span style="padding-left: 15px"
              ><img
                title="Print"
                style="cursor: pointer"
                @click="process_file('community-report-print')"
                src="/icons/icon_print.png"
                class="iconsize"
            /></span>
            <span style="padding-left: 15px; padding-right: 10px"
              ><img
                title="Download Pdf"
                style="cursor: pointer"
                @click="process_file('community-report-download')"
                src="/icons/icon_pdf.png"
                class="iconsize"
            /></span>
          </v-toolbar>

          <v-data-table
            style="padding-top: 10px"
            dense
            :headers="headers"
            :items="data"
            :loading="loading"
            :options.sync="options"
            :footer-props="{
              itemsPerPageOptions: [10, 50, 100, 500, 1000],
            }"
            class="elevation-1"
            model-value="data.id"
            :server-items-length="totalRowsCount"
            fixed-header
            :height="tableHeight"
          >
            <template v-slot:item.id="{ item, index }">
              {{ index + 1 }}
            </template>
            <template v-slot:item.status="{ item, index }">
              <span v-if="item.status == 'Allowed'">Allowed</span>
              <span v-else>Denied</span>
            </template>
            <template v-slot:item.in="{ item, index }">
              {{ $dateFormat.format4(item?.LogTime) ?? "---" }}
              <br />
              <small> {{ item?.device?.short_name ?? "---" }}</small>
            </template>
            <template v-slot:item.out="{ item, index }">
              <div>---</div>
            </template>
            <template v-slot:item.user="{ item }" style="padding: 0px">
              <v-row v-if="item.tanent" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.tanent?.full_name ?? "---" }}
                    <br />
                    <small> {{ item.tanent?.phone_number ?? "---" }}</small>
                  </div>
                </v-col>
              </v-row>
              <v-row v-else-if="item.family_member" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.family_member?.first_name ?? "---" }}
                    <br />
                    <small>
                      {{ item.family_member?.phone_number ?? "---" }}</small
                    >
                  </div>
                </v-col>
              </v-row>
              <v-row v-else-if="item.owner" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.owner?.first_name ?? "---" }}
                    <br />
                    <small> {{ item.owner?.phone_number ?? "---" }}</small>
                  </div>
                </v-col>
              </v-row>
              <v-row v-else-if="item.maid" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.maid?.full_name ?? "---" }}

                    <br />
                    <small> {{ item.maid?.phone_number ?? "---" }}</small>
                  </div>
                </v-col>
              </v-row>
              <v-row v-else-if="item.visitor" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.visitor?.full_name ?? "---" }}
                    <br />
                    <small> {{ item.visitor?.phone_number ?? "---" }}</small>
                  </div>
                </v-col>
              </v-row>
              <v-row v-else-if="item.delivery" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.delivery?.full_name ?? "---" }}
                    <br />
                    <small> {{ item.delivery?.phone_number ?? "---" }}</small>
                  </div>
                </v-col>
              </v-row>
              <v-row v-else-if="item.contractor" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.contractor?.full_name ?? "---" }}
                    <br />
                    <small> {{ item.contractor?.phone_number ?? "---" }}</small>
                  </div>
                </v-col>
              </v-row>
              <v-row v-else-if="item.employee" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.employee?.first_name ?? "---" }}
                    {{ item.employee?.last_name ?? "---" }}
                  </div>
                </v-col>
              </v-row>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </v-card>
  </div>

  <NoAccess v-else />
</template>
<script>
export default {
  data: () => ({
    key: 1,
    selectedItem: {},
    tableHeight: 750,
    status: "",
    department_ids: "",
    employee_id: "",
    daily_date: "",
    to_date: "",

    totalRowsCount: 0,
    snack: false,
    snackColor: "",
    snackText: "",
    date: null,
    menu: false,
    options: {},
    date: null,
    endpoint: "community_common_report",
    search: "",
    snackbar: false,
    add_manual_log: false,
    reportSync: false,
    from_menu: false,
    to_menu: false,
    ids: [],
    departments: [],
    users: [],
    DateRange: true,
    devices: [],

    loading: false,
    total: 0,
    payload: {
      DeviceID: ``,
      report_type: ``,
      user_type: ``,
      from_date: new Date().toISOString().split("T")[0], // Current date as from_date
      to_date: new Date().toISOString().split("T")[0], // Current date as to_date
      UserID: ``,
    },

    response: "",
    data: [],
    headers: [
      {
        text: "S.NO",
        align: "left",
        sortable: true,
        key: "id",
        value: "id",
        color: "red",
      },
      {
        text: "Name",
        align: "left",
        sortable: true,
        key: "user",
        value: "user",
      },

      {
        text: "In",
        align: "left",
        sortable: false,
        key: "in",
        value: "in",
      },
      {
        text: "Out",
        align: "left",
        sortable: false,
        key: "out",
        value: "out",
      },
      {
        text: "Status",
        align: "left",
        sortable: false,
        key: "status",
        value: "status",
      },
      {
        text: "Mode",
        align: "left",
        sortable: false,
        key: "mode",
        value: "mode",
      },
      {
        text: "User Type",
        align: "left",
        sortable: false,
        key: "user_type",
        value: "community_report.user_type",
      },
    ],
    visitor_type: "",
  }),

  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  created() {
    this.payload.user_type = this.user_type;
  },
  methods: {
    filterAttr(data) {
      this.payload.from_date = data.from;
      this.payload.to_date = data.to;
      this.getDataFromApi();
    },

    getUsersByType(user_type) {
      let options = {
        params: {
          company_id: this.$auth.user.company_id,
          user_type: user_type,
        },
      };

      this.$axios.get(`/get_users`, options).then(({ data }) => {
        this.users = data;
      });
    },

    getDeviceList() {
      this.$axios
        .get(`/device_list`, {
          params: {
            per_page: 1000,
            company_id: this.$auth.user.company_id,
          },
        })
        .then(({ data }) => {
          this.devices = data.filter((e) => !e.name.includes("Mobile"));
        });
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },

    async getDataFromApi() {
      if (!this.payload.from_date) return false;

      if (this.payload.from_date) {
        this.payload.from_date = this.payload.from_date;
      }

      if (this.payload.to_date) {
        this.payload.to_date = this.payload.to_date;
      }
      this.loading = true;
      const { data, total } = await this.$store.dispatch("fetchData", {
        key: "access_control_report",
        options: this.options,
        refresh: true,
        endpoint: this.endpoint,
        filters: this.payload,
        user_type: this.user_type,
      });
      this.data = data;
      this.totalRowsCount = total;
      this.loading = false;
    },

    async process_file(endpoint) {
      try {
        if (!this.data || !this.data.length) {
          alert("No data found");
          return;
        }

        const backendUrl = process.env.BACKEND_URL;
        const queryParams = {
          company_id: this.$auth.user.company_id,
          UserID: this.payload.UserID,
          DeviceID: this.payload.DeviceID,
          from_date: this.payload.from_date,
          to_date: this.payload.to_date,
          report_type: `Access Control Report`,
          user_type: this.payload.user_type,
        };

        if (this.payload.from_date) {
          queryParams.from_date = this.payload.from_date;
        }

        if (this.payload.to_date) {
          queryParams.to_date = this.payload.to_date;
        }

        const queryString = Object.keys(queryParams)
          .map(
            (key) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(
                queryParams[key]
              )}`
          )
          .join("&");

        const reportUrl = `${backendUrl}/${endpoint}?${queryString}`;

        const report = document.createElement("a");
        report.setAttribute("href", reportUrl);
        report.setAttribute("target", "_blank");
        report.click();
      } catch (error) {
        console.error("Error processing file:", error.message);
        // Handle the error (e.g., show an error message to the user)
      }
    },
  },
};
</script>
