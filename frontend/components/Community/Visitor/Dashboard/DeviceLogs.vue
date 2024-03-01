<template>
  <div v-if="can(`attendance_report_view`)">
    <v-card class="mb-5 mt-5" elevation="0">
      <div v-if="can(`attendance_report_access`)">
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
        <v-card class="mb-5" elevation="0">
          <v-toolbar class="backgrounds" flat>
            <v-toolbar-title>
              <span class="headline black--text"> Device Logs</span>
            </v-toolbar-title>
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
            <v-spacer></v-spacer>
            <!-- <span style="padding-left: 15px"
              ><img
                title="Print"
                style="cursor: pointer"
                @click="process_file('print_pdf')"
                src="/icons/icon_print.png"
                class="iconsize"
            /></span>
            <span style="padding-left: 15px"
              ><img
                title="Download Pdf"
                style="cursor: pointer"
                @click="process_file('download_pdf')"
                src="/icons/icon_pdf.png"
                class="iconsize"
            /></span> -->
            <CommunityManualCheckOut
              button_type="icon"
              :visitor_type="`visitor`"
              v-if="can(`visitor_view`)"
              @success="handleSuccessResponse"
            />
            <CommunityVisitorCreate
              button_type="icon"
              :visitor_type="`visitor`"
              v-if="can(`visitor_create`)"
              @success="handleSuccessResponse"
            />
          </v-toolbar>

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
              {{ item.device.short_name ?? "Manual" }}
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
  props: [],

  data: () => ({
    tableHeight: 750,
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
  }),

  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  mounted() {
    this.tableHeight = window.innerHeight - 370;
    window.addEventListener("resize", () => {
      this.tableHeight = window.innerHeight - 370;
    });
  },
  methods: {
    handleSuccessResponse(message) {
      this.snackbar = true;
      this.response = message;
      this.getDataFromApi();
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
    filterAttr(data) {
      this.payload.from_date = data.from;
      this.payload.to_date = data.to;
      this.getDataFromApi();
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },

    async getDataFromApi() {
      this.loading = true;
      const { data, total } = await this.$store.dispatch("fetchData", {
        key: "access_control_report",
        options: this.options,
        refresh: true,
        endpoint: this.endpoint,
        from_date: "2024-02-01",
        to_date: "2024-02-29",
      });
      this.data = data;
      this.totalRowsCount = total;
      this.loading = false;
    },
  },
};
</script>
