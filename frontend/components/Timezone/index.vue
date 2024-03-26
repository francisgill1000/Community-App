<template>
  <div v-if="can(`timezone_access`)">
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar" top="top" color="secondary" elevation="24">
        {{ response }}
      </v-snackbar>
    </div>

    <v-dialog persistent v-model="syncDeviceDialog" max-width="1100">
      <v-card>
        <v-card-title dense class="popup_background">
          <span class="popup_title">Sync Device</span>

          <v-spacer></v-spacer>
          <v-icon @click="syncDeviceDialog = false" outlined dark>
            mdi mdi-close-circle
          </v-icon>
        </v-card-title>
        <v-card-text>
          <v-progress-linear
            v-if="loading_devicesync"
            :active="loading_devicesync"
            :indeterminate="loading_devicesync"
            absolute
            color="primary"
          ></v-progress-linear>
          <table style="width: 100%" class="mt-2">
            <thead>
              <tr class=" " dark>
                <th style="width: 20%">Device ID</th>
                <th style="width: 70%">Message</th>
                <th class="text-center">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(d, index) in deviceResults" :key="index">
                <td>{{ d.DeviceID }}</td>
                <td v-html="d.message"></td>
                <td class="text-center">
                  <v-icon color="primary" v-if="d.status">mdi-check</v-icon>
                  <v-icon color="error" v-else>mdi-close</v-icon>
                </td>
              </tr>

              <tr v-if="deviceResults.length == 0">
                <td colspan="3" class="text-center">No Data available</td>
              </tr>
            </tbody>
          </table>
          <!-- <br />
          <v-btn small color="grey white--text" @click="syncDeviceDialog = false">
            Close</v-btn> -->
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-card class="mt-2">
      <v-toolbar class="rounded-md" dense flat>
        <v-toolbar-title><span> Timezones List</span></v-toolbar-title>
        <span>
          <v-btn
            dense
            class="ma-0 px-0"
            x-small
            :ripple="false"
            text
            title="Reload"
          >
            <v-icon class="ml-2" @click="getDataFromApi()" dark
              >mdi mdi-reload</v-icon
            >
          </v-btn>
        </span>

        <v-spacer></v-spacer>

        <span class="mr-1">
          <v-btn
            color="primary"
            title="Upload Timezone to Device(s)"
            @click="openDeviceDialog"
          >
            Upload Timezone to Device(s)
          </v-btn>
        </span>
        <TimezoneCreate
          :key="generateRandomId()"
          @success="handleSuccessResponse"
        />
      </v-toolbar>
      <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
        {{ snackText }}

        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
        </template>
      </v-snackbar>
      <v-data-table
        dense
        :headers="headers"
        :items="data"
        model-value="data.id"
        :loading="loading"
        :options.sync="options"
        :footer-props="{
          itemsPerPageOptions: [10, 50, 100, 500, 1000],
        }"
        class="elevation-1"
      >
        <template v-slot:item.sno="{ item, index }">
          {{
            currentPage
              ? (currentPage - 1) * perPage +
                (cumulativeIndex + data.indexOf(item))
              : ""
          }}
        </template>

        <template v-slot:item.member="{ item }">
          {{ item.employee_device && item.employee_device.employee_ids.length }}
        </template>

        <template v-slot:item.menu="{ item }">
          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark-2 icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list width="120" dense>
              <v-list-item v-if="can(`timezone_view`)">
                <v-list-item-title style="cursor: pointer">
                  <TimezoneSingle
                    :key="generateRandomId()"
                    @success="handleSuccessResponse"
                    :item="item"
                  />
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-if="can(`timezone_edit`)">
                <v-list-item-title style="cursor: pointer">
                  <TimezoneEdit
                    :key="generateRandomId()"
                    @success="handleSuccessResponse"
                    :item="item"
                  />
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                v-if="can(`timezone_delete`)"
                @click="deleteItem(item)"
              >
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
  <NoAccess v-else />
</template>

<script>
let setTimezonesDefaultData = {
  timezone_id: "0",
  timezone_name: "Timezone Name",
  interval: [
    { interval1: {}, interval2: {}, interval3: {}, interval4: {} },
    { interval1: {}, interval2: {}, interval3: {}, interval4: {} },
    { interval1: {}, interval2: {}, interval3: {}, interval4: {} },
    { interval1: {}, interval2: {}, interval3: {}, interval4: {} },
    { interval1: {}, interval2: {}, interval3: {}, interval4: {} },
    { interval1: {}, interval2: {}, interval3: {}, interval4: {} },
    { interval1: {}, interval2: {}, interval3: {}, interval4: {} },
  ],
};
export default {
  data: () => ({
    viewmode: false,
    cumulativeIndex: 1,
    perPage: 10,
    currentPage: 1,

    snackbar: false,
    response: "",
    dialog_time_start: "",

    dialog_time_end: "",
    dialogManualInput: false,
    span_time_minutes: 30,

    timeSlots: {}, // Generate time slots for 24 hours with 30-minute intervals
    selectedCells: new Set(),
    array: [],

    snack: false,
    snackColor: "",
    snackText: "",

    pagination: {
      current: 1,
      total: 0,
      per_page: 100,
    },
    loading_devicesync: false,
    Module: "Timezone",
    options: {},
    endpoint: "timezone",
    search: "",
    snackbar: false,
    dialog: false,
    syncDeviceDialog: false,

    loading: false,
    loading_dialog: false,
    isEdit: false,
    total: 0,
    response: "",
    data: [],
    dayBoxes: [],
    errors: {},
    editedItem: setTimezonesDefaultData,
    defaultItem: setTimezonesDefaultData,
    headers: [
      {
        text: "#",
        align: "left",
        sortable: false,
        key: "sno",
        value: "sno",
      },

      {
        text: "Timezone Name",
        align: "left",
        sortable: true,
        key: "timezone_name",
        value: "timezone_name",
      },

      {
        text: "Description",
        align: "left",
        sortable: true,
        key: "description",
        value: "description",
      },
      {
        text: "Member",
        align: "left",
        sortable: true,
        key: "member",
        value: "member",
      },
      {
        text: "Created",
        align: "left",
        sortable: false,
        key: "updated_at",
        value: "updated_at",
      },
      {
        text: "Actions",
        align: "left",
        sortable: false,
        key: "menu",
        value: "menu",
      },
    ],
    deviceResults: [],
    readOnly: false,
    editedIndex: -1,

    isCompany: true,
  }),

  computed: {},

  watch: {
    dialog(val) {
      val || this.close();
      this.errors = {};
      this.search = "";
    },
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
    search() {
      this.pagination.current = 1;
    },
  },
  async created() {
    this.loading = true;
    this.loading_dialog = true;
  },

  methods: {
    generateRandomId() {
      const length = 8; // Adjust the length of the ID as needed
      const randomNumber = Math.floor(Math.random() * Math.pow(10, length)); // Generate a random number
      return randomNumber.toString().padStart(length, "0"); // Convert to string and pad with leading zeros if necessary
    },
    handleSuccessResponse(message) {
      this.snackbar = true;
      this.response = message;
      this.openDeviceDialog();
      this.getDataFromApi();
    },
    async openDeviceDialog() {
      if (!this.data.length) {
        this.snackbar = true;
        this.response = "No data found";
        return;
      }
      this.syncDeviceDialog = true;

      this.editedItem.company_id = this.$auth.user.company_id;

      try {
        let endpoint = "getDevicesCountForTimezone";
        const { data } = await this.$axios.post(endpoint, this.editedItem);
        this.processTimeZone(data);
      } catch (error) {}
    },
    processTimeZone(devices) {
      this.deviceResults = [];
      let payload = {
        company_id: this.$auth.user.company_id,
      };
      let counter = 0;
      devices.forEach(async (DeviceID) => {
        try {
          this.loading_devicesync = true;
          let endpoint = `${DeviceID}/WriteTimeGroup`;
          const { data } = await this.$axios.post(endpoint, payload);
          let json = {
            DeviceID,
            message: `<span style="color:red">Device communication error ${data.status}</span>`,
            status: false,
          };

          if (data.status == 200) {
            (json.message =
              '<span style="color:green">Timezone data has been upload'),
              (json.status = true);
            counter++;
          } else {
            counter++;
          }

          this.deviceResults.push(json);
          if (counter == devices.length) {
            this.loading_devicesync = false;
          }
        } catch (error) {}
      });
    },
    close() {
      this.dialog = false;
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },
    //main
    getDataFromApi(url = this.endpoint, filter_column = "", filter_value = "") {
      this.loading = true;

      let page = this.pagination.current;

      let options = {
        params: {
          per_page: this.pagination.per_page,
          page: page,
          company_id: this.$auth.user.company_id,
        },
      };
      if (filter_column != "") {
        options.params["datatable_filter"] = true;
        options.params[filter_column] = filter_value;
      }

      this.$axios.get(url, options).then(({ data }) => {
        if (filter_column != "" && data.data.length == 0) {
          this.snack = true;
          this.snackColor = "error";
          this.snackText = "No Results Found";
          this.loading = false;
          return false;
        }
        this.data = data.data;
        this.pagination.current = data.current_page;
        this.pagination.total = data.last_page;
        this.loading = false;
      });
    },

    deleteItem(item) {
      confirm(
        "Are you sure you wish to delete , to mitigate any inconvenience in future."
      ) &&
        this.$axios
          .delete(`${this.endpoint}/` + item.id)
          .then(({ data }) => {
            const index = this.data.indexOf(item);
            this.data.splice(index, 1);
            this.snackbar = data.status;
            this.response = data.message;
            this.getDataFromApi();
          })
          .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
@import url("@/assets/timezoneTableStyle.css");
</style>
