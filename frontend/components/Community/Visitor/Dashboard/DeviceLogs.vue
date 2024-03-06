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
          <CommunityReport
            :label="label"
            :user_type="user_type"
            :showFilters="false"
          />
        </v-card>
      </div>
    </v-card>
  </div>

  <NoAccess v-else />
</template>
<script>
export default {
  props: ["user_type", "label"],

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
    can(per) {
      return this.$pagePermission.can(per, this);
    },
  },
};
</script>
