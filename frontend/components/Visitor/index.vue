<template>
  <div v-if="can(access)">
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
      <v-card v-if="can(view)" elevation="0">
        <v-toolbar class="mb-2" dense flat>
          <v-toolbar-title
            ><span>{{ label }}</span></v-toolbar-title
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
          <CommunityVisitorCreate
            :visitor_type="visitor_type"
            :label="label"
            v-if="can(create)"
            @success="handleSuccessResponse"
          />
        </v-toolbar>
        <SnippetsFiltersRenderFields
          :fields="headers.map((e) => e.key)"
          @filtered="handleFilter"
          :headers="headers"
        />
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
          <template v-slot:item.category="{ item }">
            {{ item?.room?.room_category?.name }}
          </template>

          <template
            v-slot:item.full_name="{ item, index }"
            style="width: 300px"
          >
            <v-row no-gutters>
              <v-col
                style="
                  padding: 5px;
                  padding-left: 0px;
                  width: 50px;
                  max-width: 50px;
                "
              >
                <v-img
                  style="
                    border-radius: 50%;
                    height: 50px;
                    width: 50px;
                    max-width: 50px;
                  "
                  :src="
                    item.profile_picture
                      ? item.profile_picture
                      : '/no-profile-image.jpg'
                  "
                >
                </v-img>
              </v-col>
              <v-col style="padding: 10px">
                <strong> {{ item.full_name }}</strong>
                <p>
                  {{ item.system_user_id }}<br v-if="item.nationality" />{{
                    item.nationality
                  }}
                </p>
              </v-col>
            </v-row>
          </template>

          <template v-slot:item.from="{ item }">
            {{ item.visit_from }} {{ item.time_in }}
          </template>
          <template v-slot:item.to="{ item }">
            {{ item.visit_to }} {{ item.time_out }}
          </template>

          <template v-slot:item.options="{ item }">
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark-2 icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list width="150" dense>
                <v-list-item v-if="can(edit)">
                  <v-list-item-title style="cursor: pointer">
                    <CommunityVisitorEdit
                      :visitor_type="visitor_type"
                      :item="item"
                      @success="handleSuccessResponse"
                    />
                  </v-list-item-title>
                </v-list-item>
                <v-list-item  v-if="can(view)">
                  <v-list-item-title style="cursor: pointer">
                    <CommunityVisitorSingle
                      :visitor_type="visitor_type"
                      :key="generateRandomId()"
                      :item="item"
                    />
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
  <NoAccess v-else />
</template>

<script>
export default {
  props: [
    "access",
    "view",
    "create",
    "edit",
    "delete",
    "visitor_type",
    "label",
  ],
  data: () => ({
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
    endpoint: "visitor-list",
    search: "",
    snackbar: false,
    ids: [],
    loading: false,
    //total: 0,
    data: [],
    errors: [],
    headers: [
      {
        text: "Full Name",
        align: "left",
        sortable: true,
        key: "full_name",
        value: "full_name",
        filterable: true,
        type: "text",
      },
      {
        text: "Company",
        align: "left",
        sortable: true,
        key: "visitor_company_name",
        value: "visitor_company_name",
        filterable: true,
        type: "text",
      },
      {
        text: "From",
        align: "left",
        sortable: true,
        key: "from",
        value: "from",
        filterable: true,
        type: "date_range",
      },
      {
        text: "To",
        align: "left",
        sortable: true,
        key: "to",
        value: "to",
        filterable: true,
        type: "date_range",
      },
      {
        text: "Purpose",
        align: "left",
        sortable: true,
        key: "purpose.name",
        value: "purpose.name",
        filterable: true,
        type: "text",
      },
      {
        text: "Gender",
        align: "left",
        sortable: true,
        key: "gender",
        value: "gender",
        filterable: true,
        type: "text",
      },
      {
        text: "Phone Number",
        align: "left",
        sortable: true,
        key: "phone_number",
        value: "phone_number",
        filterable: true,
        type: "text",
      },
      {
        text: "Email",
        align: "left",
        sortable: true,
        key: "email",
        value: "email",
        filterable: true,
        type: "text",
      },

      {
        text: "EID",
        align: "left",
        sortable: true,
        key: "id_number",
        value: "id_number",
        filterable: true,
        type: "text",
      },
      {
        text: "Tanent",
        align: "left",
        sortable: true,
        key: "tanent.full_name",
        value: "tanent.full_name",
        filterable: true,
        filterSpecial: false,
      },
      {
        text: "Date",
        align: "left",
        sortable: true,
        key: "date",
        value: "date",
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
    handleFilter({ key, search_value }) {
      this.filters[key] = search_value;
      this.getDataFromApi(this.endpoint);
    },
    exportData() {
      let cols = [
        "full_name",
        "visitor_company_name",
        "from",
        "to",
        "purpose.name",
        "gender",
        "phone_number",
        "email",
        "id_number",
        "date",
      ];

      return this.data.map((item) => {
        let filteredItem = {};
        Object.keys(item).forEach((key) => {
          if (cols.includes(key)) {
            filteredItem[key] = item[key];
            filteredItem["tanent_full_name"] = item?.tanent?.full_name ?? "---";
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
          visitor_type: this.visitor_type,
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
          .delete(`${this.endpoint}/${item.id}`)
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
    mapper(obj) {
      let formData = new FormData();

      for (let x in obj) {
        formData.append(x, obj[x]);
      }
      if (this.payload.profile_picture) {
        formData.append("profile_picture", this.upload.name);
      }

      if (this.payload.passport_doc) {
        formData.append("passport_doc", this.payload.passport_doc.name);
      }

      formData.append("company_id", this.$auth.user.company_id);

      return formData;
    },
    handleSuccessResponse(message) {
      this.snackbar = true;
      this.response = message;
      this.dialog = true;
      this.getDataFromApi();
    },
  },
};
</script>
