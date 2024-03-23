<template>
  <div v-if="can(`timezone_mapping_access`)">
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar" small top="top" :color="color">
        {{ response }}
      </v-snackbar>
    </div>
    <v-row class=" ">
      <v-col cols="12">
        <!-- <Back class="primary white--text" /> -->

        <v-card class="mb-5 mt-2 rounded-md" elevation="0">
          <v-toolbar class="rounded-md" dense flat>
            <v-toolbar-title
              ><span> {{ Model }} </span></v-toolbar-title
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
                <v-icon class="ml-2" @click="getDataFromApi()" dark
                  >mdi mdi-reload</v-icon
                >
              </v-btn>
            </span>
            <span>
              <v-btn
                x-small
                :ripple="false"
                text
                title="Filter"
                @click="attendancFilters = true"
              >
                <v-icon dark @click="toggleFilter">mdi-filter</v-icon>
              </v-btn>
            </span>
            <v-spacer></v-spacer>
            <v-btn
              v-if="can(`timezone_mapping_create`)"
              color="primary"
              title="Add Timezone"
              @click="goToCreatePage()"
            >
              Add Mapping
            </v-btn>
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
            :loading="loading"
            :options.sync="options"
            :footer-props="{
              itemsPerPageOptions: [100, 500, 1000],
            }"
            class="elevation-1"
            :server-items-length="totalRowsCount"
          >
            <template v-slot:header="{ props: { headers } }">
              <tr v-if="isFilter">
                <td v-for="header in headers" :key="header.text">
                  <v-container>
                    <v-text-field
                      clearable
                      :hide-details="true"
                      v-if="header.filterable && !header.filterSpecial"
                      v-model="filters[header.key]"
                      :id="header.key"
                      @input="applyFilters(header.key, $event)"
                      outlined
                      dense
                      autocomplete="off"
                      :placeholder="header.placeHolder"
                    ></v-text-field>
                  </v-container>
                </td>
              </tr>
            </template>
            <template v-slot:item.sno="{ item, index }">
              <b>{{ ++index }}</b>
            </template>
            <template v-slot:item.timezone.timezone_name="{ item }">
              {{ item.timezone && item.timezone.timezone_name }}
            </template>
            <template v-slot:item.devices="{ item }">
              <div
                class="d-flex flex-row bg-surface-variant"
                v-for="(subitem, index) in item.device_id.slice(0, 3)"
                :key="index"
              >
                {{ caps(subitem.name) }}
                <br />
                {{ caps(subitem.location) }}
              </div>

              <v-btn
                small
                warning
                @click="displayView(item.id)"
                v-if="item.device_id.length > 3"
              >
                All Devices
              </v-btn>
            </template>
            <template v-slot:item.employees="{ item, index }">
              <v-img
                :key="'employeeimg' + index"
                v-for="(subitem, index) in item.employee_id.slice(0, 10)"
                class="employee-pic"
                :title="caps(subitem.first_name + ' ' + subitem.last_name)"
                style="float: left; border-radius: 50%; height: auto"
                :src="
                  subitem.profile_picture
                    ? subitem.profile_picture
                    : '/no-profile-image.jpg'
                "
              >
              </v-img>

              <v-btn
                small
                warning
                @click="displayView(item.id)"
                v-if="item.employee_id.length > 10"
              >
                All Employees
              </v-btn>
            </template>
            <template
              v-slot:item.actions="{ item }"
              style="background-color: #fff !important"
            >
              <v-menu bottom left style="background-color: #fff !important">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark-2 icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list
                  width="120"
                  dense
                  style="background-color: #fff !important"
                >
                  <v-list-item
                    v-if="can(`timezone_mapping_view`)"
                    @click="displayView(item.id)"
                  >
                    <v-list-item-title style="cursor: pointer">
                      <v-icon color="primary" small> mdi-view-list </v-icon>
                      View
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item @click="displayEdit(item.id)">
                    <v-list-item-title style="cursor: pointer">
                      <v-icon color="secondary" small> mdi-pencil </v-icon>
                      Edit
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    v-if="can(`timezone_mapping_delete`)"
                    @click="deleteItem(item.id, item.timezone_id)"
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
      </v-col>
    </v-row>
  </div>
</template>
<script>
//var nuxtThisobject.$router;
//var nuxtThisobject.$axios;
var nuxtThisobject;
// import DataTable from "@andresouzaabreu/vue-data-table";
var datatableobject;
import Back from "@/components/Snippets/Back.vue";

export default {
  components: {
    //  DataTable,
    Back,
  },
  data(vm) {
    return {
      showFilters: false,
      filters: {},
      isFilter: false,
      totalRowsCount: 10,
      filter_employeeid: "",
      snack: false,
      snackColor: "",
      snackText: "",
      datatable_search_textbox: "",
      total: 0,
      options: {},
      data: [],
      name: "",
      endpoint: "gettimezonesinfo",
      Model: "Timezone Mapping List ",
      response: "",
      tableData: [],
      tableColumns: [],
      loading: false,
      snackbar: false,
      color: "black",
      pagination: {
        current: 1,
        total: 0,
        per_page: 10,
      },
      headers: [
        {
          text: "#",
          align: "left",
          sortable: false,
          value: "sno",
          align: "start",
          key: "sno",
          value: "sno",
        },
        {
          text: "Timezone Name",
          align: "left",
          sortable: true,
          align: "start",
          key: "timezoneName",
          filterable: true,
          filterSpecial: false,
          value: "timezone.timezone_name",
        },

        {
          text: "Devices",
          align: "left",
          sortable: false,
          value: "devices",
          filterable: false,
          filterSpecial: false,
          key: "device",
          placeHolder: "Type Device Name",
        },
        {
          text: "Employees",
          align: "left",
          sortable: false,
          value: "employees",
          filterable: false,
          key: "employees",
          placeHolder: "Type First Name",
        },

        { text: "Actions", value: "actions", sortable: false },
      ],
      branchesList: [],
      branch_id: "",
    };
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  // computed: {
  //   data: {
  //     get() {
  //       return this.data
  //     },
  //     set(val) {
  //       this.$emit('update:usersProp', val)
  //     }
  //   }
  // },
  created() {
    //this.getData();
    this.loading = true;
  },
  mounted: function () {
    this.getDataFromApi();
  },
  methods: {
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
    caps(str) {
      if (str == "" || str == null) {
        return "---";
      } else {
        let res = str.toString();
        return res.replace(/\b\w/g, (c) => c.toUpperCase());
      }
    },
    displayView(rowId) {
      this.$router.push("/timezonemapping/" + rowId);
    },
    displayEdit(rowId) {
      this.$router.push("/community/access_control/tenant-mapping/" + rowId);
    },
    deleteItem(rowId, timezone_id) {
      let url = this.$axios.defaults.baseURL + "/deletetimezone";
      let options = {
        timezone_id: timezone_id,
        id: rowId,
        company_id: this.$auth.user.company_id,
      };

      confirm("Are you sure you want to delete this item?") &&
        this.$axios.post(`${url}`, options).then(({ data }) => {
          this.getDataFromApi();
          if (!data.status) {
            this.errors = data.errors;
          } else {
            this.errors = [];
            this.snackbar = true;
            this.response = data.message;
          }
        });
    },
    getDataFromApi(url = this.endpoint, additional_params) {
      this.data = [];
      let { sortBy, sortDesc, page, itemsPerPage } = this.options;

      let sortedBy = sortBy ? sortBy[0] : "";
      let sortedDesc = sortDesc ? sortDesc[0] : "";
      let options = {
        params: {
          page: page,
          sortBy: sortedBy,
          sortDesc: sortedDesc,
          per_page: itemsPerPage,
          company_id: this.$auth.user.company_id,
          branch_id: this.branch_id,

          cols: ["id", "employee_id", "display_name"],
          ...this.filters,
        },
      };
      if (additional_params != "")
        options.params["additional_params"] = additional_params;
      this.loading = true;
      this.$axios.get(`${url}?page=${page}`, options).then(({ data }) => {
        this.data = data.data;
        this.itemsPerPage = this.data.length;
        this.loading = false;
      });
    },

    goToCreatePage() {
      this.$router.push("/community/access_control/employee-mapping/new");
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },
  },
};
</script>
<style scoped>
.employee-pic {
  border: 1px solid #ddd;
  position: relative;
  top: 0;
  transition: top ease 1s;
  z-index: 7;
  margin-left: -3px;
  width: 30px;
}
.employee-pic:hover {
  transition: top ease 1s;
  top: -6px;
  z-index: 9999;
  width: 32px;
  border: 2px solid black;
  border-radius: 50%;
}
</style>
