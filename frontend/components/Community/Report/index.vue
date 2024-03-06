<template>
  <div v-if="can(`attendance_report_view`)">
    <v-card v-if="showFilters" elevation="0" class="mt-2">
      <v-toolbar dense flat>
        <span class="headline black--text"> {{ label }}</span>
      </v-toolbar>

      <v-card-text class="py-3">
        <v-row>
          <v-col md="2" sm="2">
            <v-select
              label="Report Type"
              outlined
              dense
              v-model="payload.report_type"
              x-small
              :items="[
                {
                  id: ``,
                  name: `Select All`,
                },
                {
                  id: `Date Wise Access Control Report`,
                  name: `Date Wise Access Control Report`,
                },
                {
                  id: `Door Wise Access Control Report`,
                  name: `Door Wise Access Control Report`,
                },
                {
                  id: `Allowed`,
                  name: `Access Granted Access Control Report`,
                },
                {
                  id: `Access Denied`,
                  name: `Access Denied Access Control Report`,
                },
              ]"
              item-value="id"
              item-text="name"
              :hide-details="true"
            ></v-select>
          </v-col>
          <v-col md="2" sm="2" v-if="dropdown">
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
                { id: `tanent`, name: `Tanent` },
                { id: `family_member`, name: `Family Member` },
                { id: `relative`, name: `Relative` },
                { id: `visitor`, name: `Visitor` },
                { id: `delivery`, name: `Delivery` },
                { id: `contractor`, name: `Contractor` },
                { id: `maid`, name: `Maid` },
                { id: `employee`, name: `Employee` },
              ]"
              item-value="id"
              item-text="name"
              :hide-details="true"
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
              @change="setUserID(UserID)"
              density="comfortable"
              label="User ID"
              outlined
              dense
              v-model="UserID"
              x-small
              :items="[
                { system_user_id: ``, full_name: `Select All` },
                ...users,
              ]"
              item-value="id"
              item-text="full_name"
              :hide-details="true"
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
          <v-toolbar v-if="showFilters" class="backgrounds" dense flat>
            <v-toolbar-title> </v-toolbar-title>

            <v-spacer></v-spacer>
            <span style="padding-left: 15px"
              ><img
                title="Print"
                style="cursor: pointer"
                @click="process_file('community/print')"
                src="/icons/icon_print.png"
                class="iconsize"
            /></span>
            <span style="padding-left: 15px"
              ><img
                title="Download Pdf"
                style="cursor: pointer"
                @click="process_file('community/download')"
                src="/icons/icon_pdf.png"
                class="iconsize"
            /></span>
          </v-toolbar>

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
            <CommunityManualCheckOut
              button_type="icon"
              visitor_type="visitor"
              v-if="can(`visitor_view`)"
              @success="handleSuccessResponse"
            />
            <CommunityVisitorCreate
              button_type="icon"
              visitor_type="visitor"
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
            <template v-slot:item.status="{ item, index }"> Allowed </template>
            <template v-slot:item.in="{ item, index }">
              {{ item?.in_log.LogTime ?? "---" }}
              <br />
              {{ item?.in_log?.device?.short_name ?? "---" }}
            </template>
            <template v-slot:item.out="{ item, index }">
              {{ item?.out_log.LogTime ?? "---" }}
              <br />
              {{ item?.out_log?.device?.short_name ?? "---" }}
            </template>
            <template v-slot:item.flat="{ item, index }">
              {{ item?.tanent?.room?.room_number ?? "---" }}
            </template>

            <template v-slot:item.host="{ item }" style="padding: 0px">
              <v-row v-if="item.visitor.tanent" no-gutters>
                <v-col md="8">
                  <div>
                    {{ item?.visitor?.tanent?.full_name ?? "---" }}
                    <br />
                    {{ item?.visitor?.tanent?.room?.room_number ?? "---" }}
                  </div>
                </v-col>
              </v-row>
            </template>

            <template v-slot:item.user="{ item }" style="padding: 0px">
              <v-row
                v-if="
                  item.tanent || item.family_member || item.owner || item.maid
                "
                no-gutters
              >
                <!-- <v-col
                    md="2"
                    style="
                      padding: 3px;
                      padding-left: 0px;
                      width: 30px;
                      max-width: 30px;
                    "
                  >
                    <v-img
                      style="
                        border-radius: 50%;
                        height: auto;
                        width: 30px;
                        max-width: 30px;
                      "
                      :src="
                        item.tanent.profile_picture
                          ? item.tanent.profile_picture
                          : '/no-profile-image.jpg'
                      "
                    >
                    </v-img>
                  </v-col> -->
                <v-col md="8">
                  <div>
                    {{ item.tanent.first_name ?? "---" }}
                    {{ item.tanent.last_name ?? "---" }}
                  </div>
                </v-col>
              </v-row>

              <v-row
                v-else-if="item.visitor || item.delivery || item.contractor"
                no-gutters
              >
                <!-- <v-col
                    md="2"
                    style="
                      padding: 3px;
                      padding-left: 0px;
                      width: 30px;  
                      max-width: 30px;
                    "
                  >
                    <v-img
                      style="
                        border-radius: 50%;
                        height: auto;
                        width: 30px;
                        max-width: 30px;
                      "
                      :src="
                        item.visitor.profile_picture
                          ? item.visitor.profile_picture
                          : '/no-profile-image.jpg'
                      "
                    >
                    </v-img>
                  </v-col> -->
                <v-col md="8">
                  <div>
                    {{ item.visitor.full_name ?? "---" }}
                    <br />
                    {{ item.visitor.phone_number ?? "---" }}
                  </div>
                </v-col>
              </v-row>

              <v-row v-else-if="item.employee" no-gutters>
                <!-- <v-col
                    md="2"
                    style="
                      padding: 3px;
                      padding-left: 0px;
                      width: 30px;
                      max-width: 30px;
                    "
                  >
                    <v-img
                      style="
                        border-radius: 50%;
                        height: auto;
                        width: 30px;
                        max-width: 30px;
                      "
                      :src="
                        item.employee && item.employee.profile_picture
                          ? item.employee.profile_picture
                          : '/no-profile-image.jpg'
                      "
                    >
                    </v-img>
                  </v-col> -->
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
  props: ["user_type", "dropdown", "label", "showFilters"],

  data: () => ({
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
    UserID: ``,
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
      },
      {
        text: "Name",
        align: "left",
        sortable: true,
        key: "user",
        value: "user",
      },
      {
        text: "Host",
        align: "left",
        sortable: true,
        key: "host",
        value: "host",
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
        key: "in",
        value: "in",
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
    this.getUsers();
    this.getDeviceList();

    this.payload.user_type = this.user_type;
  },
  methods: {
    setUserID(id) {
      this.payload.UserID =
        this.users.find((e) => e.id == id).system_user_id ?? 0;
    },

    filterAttr(data) {
      this.payload.from_date = data.from;
      this.payload.to_date = data.to;
      this.getDataFromApi();
    },

    getUsers() {
      let options = {
        params: {
          per_page: 1000,
          company_id: this.$auth.user.company_id,
        },
      };

      this.$axios.get(`/get_users`, options).then(({ data }) => {
        console.log(data);
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
