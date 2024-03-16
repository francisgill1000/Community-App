<template>
  <div>
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
      <v-card elevation="0">
        <v-toolbar class="mb-2" dense flat>
          <v-toolbar-title
            ><span>{{ Model }} </span></v-toolbar-title
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
              <v-icon class="ml-2" @click="getDataFromApi" dark
                >mdi-reload</v-icon
              >
            </v-btn>
          </span>
          <v-spacer></v-spacer>
          <ExportData :data="exportData()" />
          <CommunityMaidCreate
            @response="handleResponse"
            :key="generateRandomId()"
          />
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
          <template
            v-slot:item.full_name="{ item, index }"
            style="width: 300px"
          >
            <v-row no-gutters class="pa-1">
              <v-col cols="3">
                <v-avatar size="50">
                  <v-img
                    :src="
                      item.profile_picture
                        ? item.profile_picture
                        : '/no-profile-image.jpg'
                    "
                  >
                  </v-img>
                </v-avatar>
              </v-col>
              <v-col>
                <div>
                  <strong> {{ item.full_name }}</strong>
                  <p>{{ item.age }} years old <br />{{ item.nationality }}</p>
                </div>
              </v-col>
            </v-row>
          </template>

          <template v-slot:item.tanent_for_maid="{ item, index }">
            <strong> {{ item.tanent_for_maid?.tanent?.full_name }}</strong>
            <p>Flat {{ item.tanent_for_maid?.tanent?.room?.room_number }}</p>
          </template>

          <template v-slot:item.options="{ item }">
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark-2 icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list width="150" dense>
                <v-list-item>
                  <v-list-item-title style="cursor: pointer">
                    <CommunityMaidAssignTanents
                      @response="handleResponse"
                      :id="item.id"
                    />
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title style="cursor: pointer">
                    <CommunityMaidSingle
                      @response="handleResponse"
                      :item="item"
                    />
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title style="cursor: pointer">
                    <CommunityMaidEdit
                      @response="handleResponse"
                      :item="item"
                    />
                  </v-list-item-title>
                </v-list-item>
                <v-list-item @click="deleteItem(item)">
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
    <Preloader v-else />
  </div>
</template>

<script>
export default {
  data: () => ({
    snack: false,
    snackColor: "",
    snackText: "",
    loadinglinear: true,
    displayErrormsg: false,
    dialog: false,
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
    options: {},
    Model: "Maids",
    endpoint: "maids",
    search: "",
    snackbar: false,
    loading: false,
    data: [],
    totalRowsCount: 0,
    headers: [
      {
        text: "User Device Id",
        align: "left",
        sortable: true,
        key: "system_user_id",
        value: "system_user_id",
        filterable: true,
        filterSpecial: false,
      },

      {
        text: "Full Name",
        align: "left",
        sortable: true,
        key: "full_name",
        value: "full_name",
        filterable: true,
        filterSpecial: false,
      },
      {
        text: "Gender",
        align: "left",
        sortable: true,
        key: "gender",
        value: "gender",
        filterable: true,
        filterSpecial: false,
      },
      {
        text: "Phone Number",
        align: "left",
        sortable: true,
        key: "phone_number",
        value: "phone_number",
        filterable: true,
        filterSpecial: false,
      },
      {
        text: "Tanent",
        align: "left",
        sortable: true,
        key: "tanent_for_maid",
        value: "tanent_for_maid",
        filterable: true,
        filterSpecial: false,
      },
      {
        text: "Tanent Phone Number",
        align: "left",
        sortable: true,
        key: "tanent_for_maid.tanent.phone_number",
        value: "tanent_for_maid.tanent.phone_number",
        filterable: true,
        filterSpecial: false,
      },
      {
        text: "Details",
        align: "left",
        sortable: false,
        key: "options",
        value: "options",
      },
    ],
  }),

  async created() {
    this.loading = false;
    this.boilerplate = true;

    this.getDataFromApi();
  },

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
        "system_user_id",
        "full_name",
        "gender",
        "phone_number",
        "age",
        "nationality",
      ];

      return this.data.map((item) => {
        let filteredItem = {};
        Object.keys(item).forEach((key) => {
          if (cols.includes(key)) {
            filteredItem[key] = item[key];
            filteredItem["tanent_full_name"] =
              item?.tanent_for_maid?.tanent?.full_name ?? "---";
            filteredItem["tanent_phone_number"] =
              item?.tanent_for_maid?.tanent?.phone_number ?? "---";
            filteredItem["tanent_term"] =
              item?.tanent_for_maid?.tanent?.term ?? "---";
          }
        });
        return filteredItem;
      });
    },
    generateRandomId() {
      const length = 8; // Adjust the length of the ID as needed
      const randomNumber = Math.floor(Math.random() * Math.pow(10, length)); // Generate a random number
      return randomNumber.toString().padStart(length, "0"); // Convert to string and pad with leading zeros if necessary
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },
    getDataFromApi() {
      //this.loading = true;
      this.loadinglinear = true;

      let { sortBy, sortDesc, page, itemsPerPage } = this.options;

      let options = {
        params: {
          page: page,
          sortBy: sortBy ? sortBy[0] : "",
          sortDesc: sortDesc ? sortDesc[0] : "",
          per_page: itemsPerPage,
          company_id: this.$auth.user.company_id,
          ...this.filters,
        },
      };

      this.$axios.get(this.endpoint, options).then(({ data }) => {
        this.data = data.data;
        //this.server_datatable_totalItems = data.total;

        this.totalRowsCount = data.total;

        this.data.length == 0
          ? (this.displayErrormsg = true)
          : (this.displayErrormsg = false);

        this.loadinglinear = false;
      });
    },

    deleteItem(item) {
      confirm(
        "Are you sure you wish to delete , to mitigate any inconvenience in future."
      ) &&
        this.$axios
          .delete(`delete-member/${item.id}`)
          .then(({ data }) => {
            this.getDataFromApi();
            this.snackbar = true;
            this.response = "Record deleted successfully";
          })
          .catch((err) => console.log(err));
    },
    handleResponse(message) {
      this.snackbar = true;
      this.response = message;
      this.dialog = true;
      this.getDataFromApi();
    },
  },
};
</script>
