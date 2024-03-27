<template>
  <div v-if="can(`tanent_access`)">
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar" small top="top" :color="color">
        {{ response }}
      </v-snackbar>
    </div>

    <div v-if="!loading && can(`tanent_view`)">
      <v-toolbar dense flat>
        <v-toolbar-title
          ><span>{{ Model }}</span></v-toolbar-title
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
              >mdi mdi-reload</v-icon
            >
          </v-btn>
        </span>
        <v-spacer></v-spacer>
        <span>
          <v-icon
            right
            color="black"
            @click="
              () => $router.push(`/community/access_control/tenant-mapping/new`)
            "
            >mdi-timetable</v-icon
          >
        </span>
      </v-toolbar>

      <v-card elevation="1">
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
          <template v-slot:item.full_name="{ item, index }">
            <v-row no-gutters>
              <v-col cols="3" class="ma-2">
                <v-avatar>
                  <v-img
                    :src="item.profile_picture ?? '/no-profile-image.jpg'"
                  />
                </v-avatar>
              </v-col>
              <v-col class="pt-2">
                <strong> {{ item.full_name }}</strong>
                <p>
                  {{ item.phone_number }}<br v-if="item.phone_number" />{{
                    item.nationality
                  }}
                </p>
              </v-col>
            </v-row>
          </template>
          <template v-slot:item.options="{ item }">
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark-2 icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list width="150" dense>
                <v-list-item v-if="can(`tanent_edit`)">
                  <v-list-item-title style="cursor: pointer">
                   <TimezoneTanentEditMapping :item="item" />
                  </v-list-item-title>
                </v-list-item>
                <v-list-item
                  v-if="can(`tanent_delete`)"
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
    <Preloader v-else />
  </div>
</template>

<script>
export default {
  data: () => ({
    disabled: false,
    tab: null,

    totalRowsCount: 0,
    sortBy: "id",
    sortDesc: false,
    loadinglinear: true,
    displayErrormsg: false,
    loading: false,
    color: "background",
    response: "",
    options: {},
    Model: "Tenants",
    endpoint: "tanent-timezone-mapping",
    search: "",
    snackbar: false,
    ids: [],
    loading: false,
    data: [],
    headers: [
      {
        text: "Full Name",
        align: "left",
        sortable: false,
        key: "full_name",
        value: "full_name",
        filterable: true,
        type: "text",
        width: "200px",
      },
      {
        text: "Member Type",
        align: "left",
        sortable: false,
        key: "member_type",
        value: "member_type",
        filterable: false,
        type: "text",
      },
      {
        text: "Floor No",
        align: "left",
        sortable: true,
        key: "floor_number",
        value: "floor.floor_number",
        filterable: true,
        type: "text",
      },
      {
        text: "Room No",
        align: "left",
        sortable: true,
        key: "room_number",
        value: "room.room_number",
        filterable: true,
        type: "text",
      },
      {
        text: "Category",
        align: "left",
        sortable: true,
        key: "category",
        value: "room.room_category.name",
        filterable: true,
        type: "text",
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
    generateRandomId() {
      const length = 8; // Adjust the length of the ID as needed
      const randomNumber = Math.floor(Math.random() * Math.pow(10, length)); // Generate a random number
      return randomNumber.toString().padStart(length, "0"); // Convert to string and pad with leading zeros if necessary
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
          .delete(`tanent-timezone-mapping/${item.id}`)
          .then(({ data }) => {
            this.getDataFromApi();
            this.snackbar = true;
            this.response = "Record deleted successfully";
          })
          .catch((err) => console.log(err));
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    handleSuccessResponse(message) {
      this.snackbar = true;
      this.response = message;
      // this.dialog = false;
      this.getDataFromApi();
    },
  },
};
</script>
