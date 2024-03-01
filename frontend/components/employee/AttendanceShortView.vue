<template>
  <div v-if="can(`attendance_report_view`)">
    <v-dialog v-model="dialog" max-width="550">
      <v-card>
        <v-container>
          <v-row no-gutters class="pa-0 ma-0">
            <v-col class="text-right">
              <v-icon color="primary" @click="dialog = false">
                mdi-close-circle-outline
              </v-icon>
            </v-col>
          </v-row>

          <EmployeeShortView
            v-if="item.employee != null"
            :item="selectedItem"
          />
          <AttendanceShortView v-else :item="selectedItem" />
        </v-container>
      </v-card>
    </v-dialog>
    <v-card elevation="0" class="mt-2">
      <v-toolbar dense flat>
        <span class="black--text">Recent Access Control Logs </span>

        <span>
          <v-btn
            dense
            class="ma-0 px-0"
            x-small
            :ripple="false"
            text
            title="Reload"
          >
            <v-icon class="ml-2" @click="getDataFromApi(1)" dark
              >mdi-reload</v-icon
            >
          </v-btn>
        </span>
      </v-toolbar>
    </v-card>
    <v-card class="mb-5" elevation="0">
      <div v-if="can(`attendance_report_access`)">
        <v-card class="mb-5" elevation="0">
          <v-data-table
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

            <template v-slot:item.dateTime="{ item, index }">
              {{ item.date }} {{ item.time }}
            </template>

            <template v-slot:item.flat="{ item, index }">
              {{ item?.tanent?.room?.room_number ?? "---" }}
            </template>

            <template v-slot:item.branch="{ item, index }">
              <span>
                <b>{{
                  item.employee ? item.employee?.branch?.branch_name : "---"
                }}</b
                ><br />
                {{ item.employee ? item.employee?.department?.name : "---" }}
              </span>
            </template>
            <template v-slot:item.in="{ item, index }">
              {{
                item.device.function !== "out" || item.device.function !== "Out"
                  ? "In"
                  : "---"
              }}
            </template>
            <template v-slot:item.out="{ item, index }">
              {{
                item.device.function == "out" || item.device.function == "Out"
                  ? "Out"
                  : "---"
              }}
            </template>
            <template v-slot:item.user_type="{ item, index }">
              {{ getUserType(item) }}
            </template>

            <template v-slot:item.status="{ item, index }">
              {{ item.status }}
              <br />
              <small>{{ item.reason ?? "" }}</small>
            </template>

            <template v-slot:item.phone_number="{ item, index }">
              {{ getUserPhone(item).phone_number }}
              <br />
              <small>{{ item.reason ?? "" }}</small>
            </template>

            <template v-slot:item.door="{ item, index }">
              {{ item.device.short_name ?? "---" }}
            </template>

            <template v-slot:item.user="{ item }" style="padding: 0px">
              <v-row v-if="item.tanent" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.tanent.first_name ?? "---" }}
                    {{ item.tanent.last_name ?? "---" }}
                  </div>
                </v-col>
              </v-row>

              <v-row v-else-if="item.family_member" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.family_member.first_name ?? "---" }}
                    {{ item.family_member.last_name ?? "---" }}
                  </div>
                </v-col>
              </v-row>

              <v-row v-else-if="item.relative" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.relative.first_name ?? "---" }}
                    {{ item.relative.last_name ?? "---" }}
                  </div>
                </v-col>
              </v-row>

              <v-row v-else-if="item.visitor" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.visitor.first_name ?? "---" }}
                    {{ item.visitor.last_name ?? "---" }}
                  </div>
                </v-col>
              </v-row>

              <v-row v-else-if="item.delivery" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.delivery.first_name ?? "---" }}
                    {{ item.delivery.last_name ?? "---" }}
                  </div>
                </v-col>
              </v-row>

              <v-row v-else-if="item.contractor" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.contractor.first_name ?? "---" }}
                    {{ item.contractor.last_name ?? "---" }}
                  </div>
                </v-col>
              </v-row>

              <v-row v-else-if="item.maid" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.maid.first_name ?? "---" }}
                    {{ item.maid.last_name ?? "---" }}
                  </div>
                </v-col>
              </v-row>

              <v-row v-else-if="item.employee" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item.employee.first_name ?? "---" }}
                    {{ item.employee.last_name ?? "---" }}
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
  props: ["item", "user_type", "dropdown"],

  data: () => ({
    selectedItem: {},
    url: process.env.SOCKET_ENDPOINT,
    tableHeight: 400,
    status: "",
    department_ids: "",
    employee_id: "",
    daily_date: "",
    to_date: "",

    isFilter: false,
    totalRowsCount: 0,
    snack: false,
    snackColor: "",
    snackText: "",
    date: null,
    menu: false,
    options: {},
    date: null,
    menu: false,
    loading: false,
    time_menu: false,
    Model: "Attendance Reports",
    endpoint: "access_control_report",
    search: "",
    snackbar: false,
    add_manual_log: false,
    dialog: false,
    generateLogsDialog: false,
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
      from_date: ``,
      to_date: ``,
      UserID: ``,
      department_ids: [],
      status: "-1",
      branch_id: ``,
      include_device_types: ["all", "Access Control"],
    },

    response: "",
    data: [],
    errors: [],
    report_template: "Template1",
    headers: [
      {
        text: "S.NO",
        align: "left",
        sortable: true,
        key: "id",
        value: "id",
      },
      {
        text: "Name",
        align: "left",
        sortable: true,
        key: "user",
        value: "user",
      },
      {
        text: "Flat",
        align: "left",
        sortable: true,
        key: "flat",
        value: "flat",
      },
      {
        text: "Phone",
        align: "left",
        sortable: true,
        key: "phone_number",
        value: "phone_number",
      },
      {
        text: "Door",
        align: "left",
        sortable: true,
        key: "door",
        value: "door",
      },
      {
        text: "DateTime",
        align: "left",
        sortable: false,
        key: "dateTime",
        value: "dateTime",
        fieldType: "date_range_picker",
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
        text: "Mode",
        align: "left",
        sortable: false,
        key: "mode",
        value: "mode",
      },
      {
        text: "Status",
        align: "left",
        sortable: false,
        key: "status",
        value: "status",
      },
      {
        text: "User Type",
        align: "left",
        sortable: false,
        key: "user_type",
        value: "user_type",
      },
    ],
    max_date: null,

    isCompany: true,
    branches: [],
  }),

  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  mounted() {},
  created() {
    this.setFromDate();
    // this.getBranches();
    this.getUsers();
    this.getDeviceList();

    this.payload.user_type = this.user_type;
    this.getDataFromApi(1);
  },
  methods: {
    showDialog(item) {
      this.selectedItem = item;
      this.dialog = true;
    },
    getUserType(item) {
      const relationships = {
        Tanent: item.tanent,
        "Family Member": item.family_member,
        Relative: item.relative,
        Visitor: item.visitor,
        Delivery: item.delivery,
        Contractor: item.contractor,
        Maid: item.maid,
      };

      for (const [type, value] of Object.entries(relationships)) {
        if (value) {
          return type;
        }
      }

      return "Employee";
    },

    getUserPhone(item) {
      const relationships = {
        Tanent: item.tanent,
        "Family Member": item.family_member,
        Relative: item.relative,
        Visitor: item.visitor,
        Delivery: item.delivery,
        Contractor: item.contractor,
        Maid: item.maid,
      };

      for (const [type, value] of Object.entries(relationships)) {
        if (value) {
          return value;
        }
      }

      return "---";
    },

    getUserInfo(item) {
      const relationships = {
        Tanent: item.tanent,
        "Family Member": item.family_member,
        Relative: item.relative,
        Visitor: item.visitor,
        Delivery: item.delivery,
        Contractor: item.contractor,
        Maid: item.maid,
        Employee: item.employee,
      };

      for (const [type, value] of Object.entries(relationships)) {
        if (value) {
          this.userObject = value;
          return value;
        }
      }

      this.userObject = false;

      return false;
    },
    filterAttr(data) {
      this.payload.from_date = data.from;
      this.payload.to_date = data.to;
      this.getDataFromApi();
    },
    getBranches() {
      if (this.$auth.user.branch_id) {
        this.payload.branch_id = this.$auth.user.branch_id;
        this.isCompany = false;
        return;
      }

      this.$axios
        .get("branch", {
          params: {
            per_page: 1000,
            company_id: this.$auth.user.company_id,
          },
        })
        .then(({ data }) => {
          this.branches = data.data;
        });
    },

    getUsers() {
      let options = {
        params: {
          per_page: 1000,
          company_id: this.$auth.user.company_id,
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

    setFromDate() {
      if (this.payload.from_date == null) {
        const dt = new Date();
        const y = dt.getFullYear();
        const m = dt.getMonth() + 1;
        const formattedMonth = m < 10 ? "0" + m : m;
        this.payload.from_date = `${y}-${formattedMonth}-01`;
      }
    },

    setThirtyDays(selected_date) {
      const date = new Date(selected_date);

      date.setDate(date.getDate() + 29);

      let datetime = new Date(date);

      let d = datetime.getDate();
      d = d < "10" ? "0" + d : d;
      let m = datetime.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let y = datetime.getFullYear();

      this.max_date = `${y}-${m}-${d}`;
      this.payload.to_date = `${y}-${m}-${d}`;
    },

    getFirstAndLastDay() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
      const year = currentDate.getFullYear();
      const last = new Date(year, month, 0)
        .getDate()
        .toString()
        .padStart(2, "0");

      let firstDay = `${year}-${month}-0${1}`;

      let lastDayFirst = last > 9 ? `${last}` : `0${last}`;

      let lastDay = `${year}-${month}-${lastDayFirst}`;

      return [firstDay, lastDay];
    },

    caps(str) {
      return str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },

    async getDataFromApi(reload = 0) {
      if (reload == 0) {
        if (!this.payload.from_date) return false;

        if (this.payload.from_date) {
          this.payload.from_date = this.payload.from_date;
        }

        if (this.payload.to_date) {
          this.payload.to_date = this.payload.to_date;
        }
      }
      this.payload.UserID = this.item.UserID;

      this.payload.from_date = null;
      this.payload.to_date = null;

      this.loading = true;
      const { data, total } = await this.$store.dispatch("fetchData", {
        key: "access_control_report",
        options: this.options,
        refresh: true,
        endpoint: this.endpoint,
        filters: this.payload,
      });
      this.data = data;
      this.totalRowsCount = total;
      this.loading = false;
    },

    pdfDownload() {
      let path = process.env.BACKEND_URL + "/pdf";
      let pdf = document.createElement("a");
      pdf.setAttribute("href", path);
      pdf.setAttribute("target", "_blank");
      pdf.click();
    },

    async process_file(type) {
      try {
        if (!this.data || !this.data.length) {
          alert("No data found");
          return;
        }

        const backendUrl = process.env.BACKEND_URL;
        const queryParams = {
          company_id: this.$auth.user.company_id,
          branch_id: this.payload.branch_id,
          UserID: this.payload.UserID,
          DeviceID: this.payload.DeviceID,
          from_date: this.payload.from_date,
          to_date: this.payload.to_date,
          report_type: this.payload.report_type,
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

        const reportUrl = `${backendUrl}/accessControlReport_${type.toLowerCase()}?${queryString}&include_device_types[]=all&include_device_types[]=Access Control`;

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
