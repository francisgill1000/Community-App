<template>
  <div v-if="can(`tanent_access`)">
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar" small top="top" :color="color">
        {{ response }}
      </v-snackbar>
    </div>
    <v-dialog persistent v-model="deleteDialog" max-width="700">
      <v-card>
        <v-toolbar flat dense class="popup_background">
          <span class="popup_title">Delete From Device(s)</span>

          <v-spacer></v-spacer>

          <v-icon @click="deleteDialog = false" class="primary--text">
            mdi-close
          </v-icon>
        </v-toolbar>
        <v-card-text>
          <table style="width: 100%" class="mt-2">
            <thead>
              <tr class=" " dark>
                <th style="width: 30%">Device ID</th>
                <th style="width: 60%">Message</th>
                <th class="text-center">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(d, index) in deleteResponseList" :key="index">
                <td>{{ d.DeviceID }}</td>
                <td v-html="d.message"></td>
                <td class="text-center">
                  <v-icon color="green" v-if="d.status == 200"
                    >mdi-check</v-icon
                  >
                  <v-icon color="error" v-else>mdi-close</v-icon>
                </td>
              </tr>

              <tr v-if="deleteResponseList.length == 0">
                <td colspan="3" class="text-center">No Data available</td>
              </tr>
            </tbody>
          </table>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="viewDocumentsDialog" width="900">
      <!-- <v-toolbar flat dense>
        <b> Documents </b>
        <v-spacer></v-spacer>
        <v-icon color="primary" @click="viewDocumentsDialog = false"
          >mdi-close-circle-outline</v-icon
        >
      </v-toolbar> -->
      <v-card>
        <v-card-title dark class="popup_background">
          Tenant Documents
          <v-spacer></v-spacer>
          <v-icon @click="viewDocumentsDialog = false" outlined dark>
            mdi mdi-close-circle
          </v-icon>
        </v-card-title>
        <v-card-text>
          <CommunityTenantDocumentsList
            :tenant_id="tenant_id"
            :key="generateRandomId()"
          ></CommunityTenantDocumentsList>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" max-width="1000">
      <v-card>
        <v-container>
          <v-row no-gutters class="pa-0 ma-0">
            <v-col class="text-right">
              <v-icon color="primary" @click="dialog = false">
                mdi-close-circle-outline
              </v-icon>
            </v-col>
          </v-row>

          <TenantAttendanceLogsPopup
            :key="generateRandomId()"
            :UserID="UserID"
            :visitor_type="'tenant'"
          />
        </v-container>
      </v-card>
    </v-dialog>
    <div v-if="!loading && can(`tanent_view`)">
      <v-dialog persistent v-model="viewMemberDialogBox" width="700">
        <v-toolbar flat dense>
          <b> Members </b>
          <v-spacer></v-spacer>
          <v-icon color="primary" @click="viewMemberDialogBox = false"
            >mdi-close-circle-outline</v-icon
          >
        </v-toolbar>
        <v-card>
          <v-container>
            <TanentMembers :members="payload.members" />
          </v-container>
        </v-card>
      </v-dialog>

      <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
        {{ snackText }}

        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
        </template>
      </v-snackbar>
      <v-card elevation="1" class="mb-5">
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
          <ExportData :data="exportData()" />
          <TanentCreate
            v-if="can(`tanent_create`)"
            @success="handleSuccessResponse"
          />
        </v-toolbar>

        <SnippetsFiltersRenderFields
          :fields="headers.map((e) => e.key)"
          @filtered="handleFilter"
          :headers="headers"
        />
      </v-card>

      <v-card elevation="1">
        <!-- @dblclick:row="showDialog"
          @click:row="showDialog" -->
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
                <v-list-item v-if="can(`tanent_create`)">
                  <v-list-item-title style="cursor: pointer">
                    <TanentAddMember
                      :key="generateRandomId()"
                      @success="handleSuccessResponse"
                      :fullItem="item"
                      :item="{
                        tanent_id: item.id,
                        system_user_id:
                          parseInt(item.system_user_id) +
                          parseInt(item.members_only_count) +
                          parseInt(item.cards_count) +
                          1,
                      }"
                    />
                  </v-list-item-title>
                </v-list-item>
                <v-list-item v-if="can(`tanent_create`)">
                  <v-list-item-title style="cursor: pointer">
                    <v-list-item-title
                      style="cursor: pointer"
                      @click="viewDocuments(item.id)"
                    >
                      <v-icon color="secondary" small> mdi-file </v-icon>
                      Documents
                    </v-list-item-title>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item v-if="can(`tanent_create`)">
                  <v-list-item-title style="cursor: pointer">
                    <TanentAddCard
                      :key="generateRandomId()"
                      @success="handleSuccessResponse"
                      :item="{
                        tanent_id: item.id,
                        system_user_id:
                          parseInt(item.system_user_id) +
                          parseInt(item.members_only_count) +
                          parseInt(item.cards_count) +
                          1,
                      }"
                    />
                  </v-list-item-title>
                </v-list-item>
                <v-list-item v-if="can(`tanent_view`)">
                  <v-list-item-title style="cursor: pointer">
                    <TanentSingle :key="generateRandomId()" :item="item" />
                  </v-list-item-title>
                </v-list-item>
                <v-list-item v-if="can(`tanent_edit`)">
                  <v-list-item-title style="cursor: pointer">
                    <TanentEdit
                      :key="generateRandomId()"
                      @success="handleSuccessResponse"
                      @silentlyClose="getDataFromApi"
                      :item="item"
                    />
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title style="cursor: pointer">
                    <DeviceUser
                      :key="generateRandomId()"
                      :system_user_id="item.system_user_id"
                    />
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
import TenantAttendanceLogsPopup from "../../../components/Community/TenantAttendanceLogsPopup.vue";
import { fetchActiveDevices } from "@/utils/deviceFetcher";

export default {
  components: { TenantAttendanceLogsPopup },
  data: () => ({
    viewDocumentsDialog: false,
    disabled: false,
    step: 1,

    members: [],

    payload: {
      full_name: "",
      phone_number: "",
      floor_id: "",
      room_id: "",
      start_date: "",
      end_date: "",
    },
    imagePreview: "/no-profile-image.jpg",
    setImagePreview: null,
    imageMemberPreview: "/no-profile-image.jpg",

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
    tab: "0",
    attrs: [],
    dialog: false,
    editDialog: false,
    viewDialog: false,
    selectedFile: "",
    DialogBox: false,
    memberDialogBox: false,
    viewMemberDialogBox: false,
    m: false,
    expand: false,
    expand2: false,
    boilerplate: false,
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
    upload: {
      name: "",
    },
    options: {},
    Model: "Tenants",
    endpoint: "tanents-only",
    search: "",
    snackbar: false,
    ids: [],
    loading: false,
    //total: 0,
    data: [],
    errors: [],
    headers: [
      {
        text: "Tanent Device ID",
        align: "left",
        sortable: false,
        key: "system_user_id",
        value: "system_user_id",
        filterable: true,
        type: "text",
      },
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
        text: "Members",
        align: "left",
        sortable: false,
        key: "members_only_count",
        value: "members_only_count",
        filterable: false,
        type: "text",
      },
      {
        text: "Cards",
        align: "left",
        sortable: false,
        key: "cards_count",
        value: "cards_count",
        filterable: false,
        type: "text",
      },
      {
        text: "Term",
        align: "left",
        sortable: true,
        key: "term",
        value: "term",
        filterable: true,
        type: "text",
      },
      // {
      //   text: "Phone No",
      //   align: "left",
      //   sortable: true,
      //   key: "phone_number",
      //   value: "phone_number",
      //   filterable: true,
      //   filterSpecial: false,
      // },
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
        text: "Start Date",
        align: "left",
        sortable: true,
        key: "start_date",
        value: "start_date",
        filterable: true,
        type: "date_range",
      },

      {
        text: "End Date",
        align: "left",
        sortable: true,
        key: "end_date",
        value: "end_date",
        filterable: true,
        type: "date_range",
      },
      {
        text: "Details",
        align: "left",
        sortable: false,
        key: "options",
        value: "options",
      },
    ],
    formAction: "Create",

    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    menu2: false,
    menu3: false,

    floors: [],
    member_types: [],
    rooms: [],
    member: {
      full_name: null,
      phone_number: null,
      age: null,
      member_type: null,
      nationality: null,
      tanent_id: 0,
    },
    selectedTenantItem: {},
    UserID: null,
    tenant_id: null,
    component_data: null,

    deleteDialog: false,
    deleteCardLoading: true,
    deleteResponseList: [],
    devices: [],
  }),
  async mounted() {
    try {
      this.devices = await fetchActiveDevices(
        this.$axios,
        this.$auth.user.company_id
      );
    } catch (error) {
      console.log("🚀 ~ mounted ~ error: on fetchActiveDevices", error);
    }
  },
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
    showDialog(item) {
      console.log("item", item);
      this.key++;

      this.UserID = item.id;

      this.dialog = true;
      //this.component_data = item;
    },
    viewDocuments(tenant_id) {
      this.key++;
      this.tenant_id = tenant_id;
      this.viewDocumentsDialog = true;
    },
    exportData() {
      let cols = [
        "system_user_id",
        "full_name",
        "members_only_count",
        "term",
        "floor_number",
        "room_number",
        "category",
        "start_date",
        "end_date",
        "rfid",
      ];

      return this.data.map((item) => {
        let filteredItem = {};
        Object.keys(item).forEach((key) => {
          if (cols.includes(key)) {
            filteredItem[key] = item[key];
            filteredItem["floor"] = item?.floor?.floor_number ?? "---";
            filteredItem["room"] = item?.room?.room_number ?? "---";
            filteredItem["category"] = item?.room?.room_category?.name ?? "---";
          }
        });
        return filteredItem;
      });
    },
    handleFilter({ key, search_value }) {
      this.filters[key] = search_value;
      this.getDataFromApi(this.endpoint);
    },
    generateRandomId() {
      const length = 8; // Adjust the length of the ID as needed
      const randomNumber = Math.floor(Math.random() * Math.pow(10, length)); // Generate a random number
      return randomNumber.toString().padStart(length, "0"); // Convert to string and pad with leading zeros if necessary
    },
    caps(str) {
      if (str == "" || str == null) {
        return "---";
      } else {
        let res = str.toString();
        return res.replace(/\b\w/g, (c) => c.toUpperCase());
      }
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
      //this.loading = true;
      this.loadinglinear = true;

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
    addItem() {
      this.disabled = false;
      this.formAction = "Create";
      this.DialogBox = true;
      this.payload = {};
      this.setImagePreview = "/no-profile-image.jpg";
    },
    addMember(item) {
      this.disabled = false;
      this.formAction = "Create";
      this.memberDialogBox = true;
      this.payload = item;
      this.member.tanent_id = item.id;
      this.member.system_user_id =
        parseInt(item.system_user_id) + parseInt(item.members.length) + 1;
      this.member.company_id = this.$auth.user.company_id;

      this.getExistingMembers(item.id);
    },
    viewMember(item) {
      this.disabled = true;
      this.formAction = "View";
      this.viewMemberDialogBox = true;
      this.payload = item;

      this.getExistingMembers(item.id);
    },
    editItem({
      profile_picture,
      passport_doc,
      id_doc,
      contract_doc,
      ejari_doc,
      license_doc,
      others_doc,
      floor,
      room,
      ...payload
    }) {
      this.formAction = "Edit";
      this.disabled = false;
      this.DialogBox = true;

      this.setImagePreview = profile_picture;
      this.payload = payload;

      this.getRoomsByFloorId(payload.floor_id);
    },
    viewItem({ profile_picture, ...payload }) {
      this.formAction = "View";
      this.disabled = true;
      this.DialogBox = true;

      this.imagePreview = profile_picture;
      this.payload = payload;
    },
    getExistingMembers(id) {
      this.$axios.get(`/members/${id}`).then(({ data }) => {
        this.members = data;

        if (!data.length) {
          this.members.push({
            full_name: null,
            phone_number: null,
            age: null,
            member_type: null,
            nationality: null,
            tanent_id: id,
          });
        }
      });
    },

    deleteItem(item) {
      confirm(
        "Are you sure you wish to delete , to mitigate any inconvenience in future."
      ) &&
        this.$axios
          .delete(`tanent/${item.id}`)
          .then(({ data }) => {
            this.deleteFromDevices(item.system_user_id);
          })
          .catch((err) => console.log(err));
    },
    async deleteFromDevices(system_user_id) {
      this.deleteDialog = true;
      this.deleteCardLoading = true;
      this.deleteResponseList = [];

      for (const device_id of this.devices) {
        try {
          const { data: deletedCard } = await this.$axios.post("delete-card", {
            UserID: system_user_id,
            DeviceID: device_id,
          });

          this.deleteResponseList.push({
            status: deletedCard.status,
            message: deletedCard.message,
            DeviceID: device_id,
          });
        } catch (error) {
          console.error("Error deleting record:", error);
        }
      }

      // Run after all deletions are complete
      this.getDataFromApi();
      this.snackbar = true;
      this.response = "Record deleted successfully";
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    previewImage(event) {
      const file = this.payload.profile_picture;

      if (file) {
        // Read the selected file and create a preview
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.imagePreview = null;
      }
    },

    previewMemberImage(event) {
      const file = this.member.profile_picture;

      if (file) {
        // Read the selected file and create a preview
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageMemberPreview = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.imageMemberPreview = null;
      }
    },
    others_doc(e) {
      this.upload.name = e.target.files[0] || "";

      let input = this.$refs.otherDoc_input;
      let file = input.files;

      if (file[0].size > 1024 * 1024) {
        e.preventDefault();
        this.errors["profile_picture"] = [
          "File too big (> 1MB). Upload less than 1MB",
        ];
        return;
      }

      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          //croppedimage step6
          // this.previewImage = e.target.result;

          this.selectedFile = event.target.result;

          this.$refs.cropper.replace(this.selectedFile);
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);

        this.dialogCropping = true;
      }
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
<style scoped>
@import url("@/assets/tableStyles.css");
</style>
