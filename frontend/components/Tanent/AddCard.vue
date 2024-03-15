<template>
  <v-dialog persistent v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-icon color="secondary" small> mdi-credit-card-scan-outline</v-icon>
        Add Card
      </span>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="mb-2">
              <b>Add Card</b>
            </div>
          </v-col>

          <v-col cols="12">
            <v-text-field
              label="Device User Id"
              :readonly="true"
              v-model="payload.system_user_id"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.system_user_id"
              :error-messages="
                errors && errors.system_user_id ? errors.system_user_id[0] : ''
              "
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              append-icon="mdi-credit-card-scan-outline"
              label="RFID"
              :readonly="disabled"
              v-model="payload.rfid"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.rfid"
              :error-messages="errors && errors.rfid ? errors.rfid[0] : ''"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-right my-1">
            <v-btn @click="dialog = false">Close</v-btn>
            <v-btn class="primary" @click="submit">Submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import "cropperjs/dist/cropper.css";
import VueCropper from "vue-cropperjs";

export default {
  props: ["item"],
  components: {
    VueCropper,
  },

  data: () => ({
    parkings: [],
    room_categories: [],
    room_sub_categories: [],
    filtered_room_sub_categories: [],
    disabled: false,
    step: 1,
    payload: {
      term: "---",
      gender: "---",
      first_name: "---",
      last_name: "---",
      full_name: "---",
      phone_number: "----------",
      age: "---",
      nationality: "---",
      floor_id: 0,
      room_id: 0,
      start_date: "",
      end_date: "",
      member_type: "card",
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
    tabMenu: [],
    tab: "0",
    employeeId: 0,
    employeeObject: {},
    attrs: [],
    dialog: false,
    editDialog: false,
    viewDialog: false,
    selectedFile: "",
    dialog: false,
    memberdialog: false,
    viewMemberdialog: false,
    m: false,
    expand: false,
    expand2: false,
    boilerplate: false,
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
    upload: {
      name: "",
    },

    pagination: {
      current: 1,
      total: 0,
      per_page: 10,
    },
    options: {},
    Model: "Tanent",
    endpoint: "tanent",
    search: "",
    snackbar: false,
    ids: [],
    loading: false,
    //total: 0,
    titleItems: ["Mr", "Mrs", "Miss", "Ms", "Dr"],
    editedIndex: -1,
    editedItem: { name: "" },
    defaultItem: { name: "" },
    response: "",
    data: [],
    errors: [],
    designations: [],
    roles: [],
    employees: [],
    department_filter_id: "",
    dialogVisible: false,
    formAction: "Create",

    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    menu2: false,
    menu3: false,

    floors: [],
    rooms: [],
    member: {
      full_name: null,
      phone_number: null,
      age: null,
      relation: null,
      tanent_id: 0,
    },
  }),

  async created() {
    this.loading = false;
    this.boilerplate = true;
    this.payload.parent_id = this.item.tanent_id;
    this.payload.system_user_id = this.item.system_user_id;
  },

  methods: {
    handleAttachment(e) {
      this.payload.profile_picture = e;
    },
    mapper(obj) {
      let formData = new FormData();

      for (let x in obj) {
        formData.append(x, obj[x]);
      }
      if (this.payload.profile_picture) {
        formData.append("profile_picture", this.upload.name);
      }
      formData.append("company_id", this.$auth.user.company_id);

      return formData;
    },

    submit() {
      this.$axios
        .post(`add-member`, this.mapper(Object.assign(this.payload)))
        .then(({ data }) => {
          this.errors = [];
          this.handleSuccessResponse("Tanent inserted successfully");
        })
        .catch(({ response }) => {
          this.handleErrorResponse(response);
        });
    },
    handleSuccessResponse(message) {
      this.errors = [];
      this.dialog = false;
      this.$emit("success", message);
    },
    handleErrorResponse(response) {
      if (!response) {
        this.snackbar = true;
        this.response = "An unexpected error occurred.";
        return;
      }
      let { status, data, statusText } = response;

      if (status && status == 422) {
        this.errors = data.errors;
        return;
      }

      this.snackbar = true;
      this.response = statusText;
    },
  },
};
</script>
