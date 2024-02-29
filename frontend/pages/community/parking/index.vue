<template>
  <div v-if="can('employee_access')">
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar" small top="top" :color="color">
        {{ response }}
      </v-snackbar>
    </div>
    <div v-if="!loading">
      <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
        {{ snackText }}

        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
        </template>
      </v-snackbar>
      <div v-if="can(`employee_view`)">
        <v-card elevation="0">
          <v-toolbar class="mb-2" dense flat>
            <v-toolbar-title>
              <span>{{ Model }} </span></v-toolbar-title
            >
            <span>
              <v-btn
                dense
                class="ma-0 px-0"
                x-small
                :ripple="false"
                text
                title="Reload"
              >
                <v-icon class="ml-2" @click="clearFilters" dark
                  >mdi-reload</v-icon
                >
              </v-btn>
            </span>
            <v-spacer></v-spacer>
            <ExportData :data="exportData()" />
            <CommunityParkingAllocationCreate @success="getDataFromApi" />
            <!-- <v-tooltip top color="primary">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ma-0"
                  x-small
                  :ripple="false"
                  text
                  v-bind="attrs"
                  v-on="on"
                  @click="process_file(`parkingReportPrint`)"
                >
                  <img src="/icons/icon_print.png" class="iconsize" />
                </v-btn>
              </template>
              <span>PRINT</span>
            </v-tooltip>

            <v-tooltip top color="primary">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  x-small
                  :ripple="false"
                  text
                  v-bind="attrs"
                  v-on="on"
                  @click="process_file(`parkingReportDownload`)"
                >
                  <img src="/icons/icon_pdf.png" class="iconsize" />
                </v-btn>
              </template>
              <span>DOWNLOAD</span>
            </v-tooltip> -->

            <!-- <v-tooltip top color="primary">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  x-small
                  :ripple="false"
                  text
                  v-bind="attrs"
                  v-on="on"
                  @click="process_file(report_type + '_download_csv')"
                >
                <img src="/icons/icon_excel.png" class="iconsize" />
                </v-btn>
              </template>
              <span>CSV</span>
            </v-tooltip> -->
          </v-toolbar>
          <v-data-table
            dense
            :headers="headers"
            :items="data"
            model-value="data.id"
            :loading="loadinglinear"
            :options.sync="options"
            :footer-props="{
              itemsPerPageOptions: [100, 500, 1000],
            }"
            class="elevation-1"
            :server-items-length="totalRowsCount"
          >
            <template v-slot:header="{ props: { headers } }">
              <SnippetsFiltersRenderFields
                :fields="headers.map((e) => e.key)"
                @filtered="handleFilter"
                :headers="headers"
              />
            </template>
            <template v-slot:item.options="{ item }">
              <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark-2 icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list width="120" dense>
                  <v-list-item>
                    <v-list-item-title style="cursor: pointer">
                      <CommunityParkingAllocationSingle :item="item" />
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title style="cursor: pointer">
                      <CommunityParkingAllocationEdit
                        @success="getDataFromApi"
                        :item="item"
                      />
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="deleteItem(item.vehicle.id)">
                    <v-list-item-title style="cursor: pointer">
                      <v-icon color="error" small> mdi-delete </v-icon>
                      Delete
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
    <Preloader v-else />
  </div>

  <NoAccess v-else />
</template>

<script>
export default {
  props: ["id"],

  data: () => ({
    disabled: false,
    openTimePicker: false,
    closeTimePicker: false,

    menu: false,

    tab: null,

    totalRowsCount: 0,
    filters: {},
    isFilter: false,
    sortBy: "id",
    sortDesc: false,
    snack: false,
    snackColor: "",
    snackText: "",
    loadinglinear: true,
    displayErrormsg: false,
    image: "",
    mime_type: "",
    cropedImage: "",
    cropper: "",
    autoCrop: false,
    dialogCropping: false,
    tabMenu: [],
    tab: "0",
    employeeId: 0,
    employeeObject: {},
    attrs: [],
    dialog: false,
    editDialog: false,
    viewDialog: false,
    selectedFile: "",
    DialogBox: false,
    m: false,
    expand: false,
    expand2: false,
    right: true,
    rightDrawer: false,
    drawer: true,
    tab: null,
    selectedItem: 1,
    on: "",
    files: "",
    search: "",
    loading: false,
    //total: 0,
    next_page_url: "",
    prev_page_url: "",
    current_page: 1,
    per_page: 1000,
    ListName: "",
    color: "background",
    response: "",
    snackbar: false,
    btnLoader: false,
    max_employee: 0,
    employee: {
      title: "Mr",
      display_name: "",
      employee_id: "",
      system_user_id: "",
    },
    upload: {
      name: "",
    },
    previewImage: null,

    pagination: {
      current: 1,
      total: 0,
      per_page: 10,
    },
    options: {},
    Model: "Parking Report",
    endpoint: "parking-allocation",
    search: "",
    snackbar: false,
    ids: [],
    loading: false,
    //total: 0,
    editedIndex: -1,
    response: "",
    data: [],
    errors: [],
    headers: [
      {
        text: "#",
        align: "left",
        sortable: false,
        key: "id",
        value: "id",
        filterable: false,
        width: "10px",
      },
      {
        text: "Category",
        align: "left",
        sortable: true,
        key: "category",
        value: "category",
        filterable: true,
        type: "dropdown",
        render_childens: true,
        items: [
          { id: `Commercial`, name: `Commercial` },
          { id: `Residence`, name: `Residence` },
          { id: `VIP`, name: `VIP` },
          { id: `Guest`, name: `Guest` },
          { id: `Green`, name: `Green` },
          { id: `Special Needs`, name: `Special Needs` },
        ],
      },
      {
        text: "Floor",
        align: "left",
        sortable: true,
        key: "floor_id",
        value: "floor.floor_number",
        filterable: true,
        type: "dropdown",
        items: [{ id: ``, name: `` }],
      },
      {
        text: "Flat/Room",
        align: "left",
        sortable: true,
        key: "room_number",
        value: "vehicle.tanent.room.room_number",
        filterable: true,
        type: "text",
      },
      {
        text: "Parking Number",
        align: "left",
        sortable: true,
        key: "parking_number",
        value: "parking_number",
        filterable: true,
        type: "text",
      },
      {
        text: "Car Number",
        align: "left",
        sortable: true,
        key: "car_number",
        value: "vehicle.car_number",
        filterable: true,
        type: "text",
      },
      {
        text: "Car Brand",
        align: "left",
        sortable: true,
        key: "car_brand",
        value: "vehicle.car_brand",
        filterable: true,
        type: "text",
      },
      {
        text: "Tanent",
        align: "left",
        sortable: true,
        key: "full_name",
        value: "vehicle.tanent.full_name",
        filterable: true,
        type: "text",
      },

      {
        text: "Phone Number",
        align: "left",
        sortable: true,
        key: "phone_number",
        value: "vehicle.tanent.phone_number",
        filterable: true,
        type: "text",
      },
      {
        text: "Email",
        align: "left",
        sortable: true,
        key: "email",
        value: "vehicle.tanent.email",
        filterable: true,
        type: "text",
      },
      // {
      //   text: "Start Date",
      //   align: "left",
      //   sortable: true,
      //   key: "start_date",
      //   value: "vehicle.tanent.start_date",
      //   filterable: true,
      //   type: "date_range",
      // },
      // {
      //   text: "End Date",
      //   align: "left",
      //   sortable: true,
      //   key: "end_date",
      //   value: "vehicle.tanent.end_date",
      //   filterable: true,
      //   type: "date_range",
      // },
      {
        text: "Details",
        align: "left",
        sortable: false,
        key: "options",
        value: "options",
      },
    ],
    tanents: [],
    floors: [],
  }),

  async created() {
    this.loading = false;
    this.getDataFromApi();
    await this.getTanents();
  },

  mounted() {},
  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  methods: {
    exportData() {
      let cols = [
        "category",
        "parking_number",
      ];

      return this.data.map((item) => {
        let filteredItem = {};
        Object.keys(item).forEach((key) => {
          if (cols.includes(key)) {
            filteredItem[key] = item[key];
            filteredItem["floor_number"] = item?.floor?.floor_number ?? "---";
            filteredItem["car_number"] = item?.vehicle?.car_number ?? "---";
            filteredItem["car_brand"] = item?.vehicle?.car_brand ?? "---";
            filteredItem["room_number"] = item?.vehicle?.tanent?.room?.room_number ?? "---";
            filteredItem["tanent_full_name"] =
              item?.vehicle?.tanent?.full_name ?? "---";
            filteredItem["tanent_phone_number"] =
              item?.vehicle?.tanent?.phone_number ?? "---";
            filteredItem["tanent_email"] =
              item?.vehicle?.tanent?.email ?? "---";
          }
        });
        return filteredItem;
      });
    },
    handleFilter({ key, search_value, render_childens = false }) {
      this.filters[key] = search_value;
      if (render_childens) {
        this.getFloorByCategory(search_value);
      }
      this.getDataFromApi(this.endpoint);
    },
    filterAttr(data) {
      this.filters.from_date = data.from;
      this.filters.to_date = data.to;
      this.filters.filterType = "Monthly";
    },
    process_file(endpoint) {
      if (!this.data || this.data.length === 0) {
        alert("No data found");
        return;
      }

      const baseUrl = process.env.BACKEND_URL;
      const queryParams = {
        company_id: this.$auth.user.company_id,
        ...this.filters,
      };

      const queryString = Object.entries(queryParams)
        .filter(
          ([key, value]) =>
            value !== undefined && value !== null && value !== ""
        )
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&");

      const url = `${baseUrl}/${endpoint}?${queryString}`;

      let report = document.createElement("a");
      report.setAttribute("href", url);
      report.setAttribute("target", "_blank");
      report.click();

      this.getDataFromApi();
    },
    handleDatesFilter(dates) {
      if (dates.length > 1) {
        this.getDataFromApi(this.endpoint, "dates", dates);
      }
    },
    async getFloorByCategory(category) {
      let { data } = await this.$axios.get(
        `parking-floor-by-category/${category}`
      );
      this.floors = data;

      let header = this.headers.find((e) => e.key == "floor_id");

      header.items = data.map((e) => ({ id: e.id, name: e.floor_number }));
    },
    async getTanents() {
      let { data: tanents } = await this.$axios.get(`tanent-list`, {
        params: { company_id: this.$auth.user.company_id },
      });

      this.tanents = tanents;
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },
    applyFilters() {
      this.getDataFromApi();
    },
    toggleFilter() {
      // this.filters = {};
      this.isFilter = !this.isFilter;
    },
    clearFilters() {
      this.filters = {};

      this.isFilter = false;
      this.getDataFromApi();
    },
    getDataFromApi() {
      this.loadinglinear = true;

      let { sortBy, sortDesc, page, itemsPerPage } = this.options;

      let options = {
        params: {
          page: page,
          sortBy: sortBy ? sortBy[0] : "",
          sortDesc: sortDesc ? sortDesc[0] : "",
          per_page: itemsPerPage, //this.pagination.per_page,
          company_id: this.$auth.user.company_id,
          ...this.filters,
        },
      };

      this.$axios.get(this.endpoint, options).then(({ data }) => {
        this.data = data.data;
        //this.server_datatable_totalItems = data.total;
        this.pagination.current = data.current_page;
        this.pagination.total = data.last_page;

        this.totalRowsCount = data.total;

        this.data.length == 0
          ? (this.displayErrormsg = true)
          : (this.displayErrormsg = false);

        this.loadinglinear = false;
      });
    },
    deleteItem(id) {
      confirm(
        "Are you sure you wish to delete , to mitigate any inconvenience in future."
      ) &&
        this.$axios
          .delete(`${this.endpoint}/${id}`)
          .then(({ data }) => {
            this.getDataFromApi();
            this.snackbar = true;
            this.response = data.message;
          })
          .catch((err) => console.log(err));
    },
  },
};
</script>
