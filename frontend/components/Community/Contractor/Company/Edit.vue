<template>
  <v-dialog persistent v-model="dialog" width="900">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-btn dense small class="primary" text title="Add Contractor">
          Create Contractor
          <v-icon right dark>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </span>
    </template>
    <v-card>
      <v-card-title>Edit Contractor Company</v-card-title>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-row>
              <v-col cols="12">
                <div class="text-center">
                  <SnippetsUploadAttachment
                    :defaultImage="setImagePreview"
                    @uploaded="handleAttachment"
                  />

                  <span v-if="errors && errors.logo" class="text-danger mt-2">{{
                    errors.logo[0]
                  }}</span>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="9">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="Branch Name"
                  :readonly="disabled"
                  v-model="payload.branch_name"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.branch_name"
                  :error-messages="
                    errors && errors.branch_name ? errors.branch_name[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Manager Name"
                  v-model="payload.manager_name"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.manager_name"
                  :error-messages="
                    errors && errors.manager_name ? errors.manager_name[0] : ''
                  "
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-autocomplete
                  label="Member Type"
                  outlined
                  :readonly="disabled"
                  v-model="payload.term"
                  :items="[`Long Term`, `Short Term`]"
                  dense
                  :hide-details="!errors.term"
                  :error-messages="errors && errors.term ? errors.term[0] : ''"
                >
                </v-autocomplete>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  label="Email"
                  :readonly="disabled"
                  v-model="payload.email"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.email"
                  :error-messages="
                    errors && errors.email ? errors.email[0] : ''
                  "
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  label="Phone Number"
                  :readonly="disabled"
                  v-model="payload.phone_number"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.phone_number"
                  :error-messages="
                    errors && errors.phone_number ? errors.phone_number[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Mobile Number"
                  :readonly="disabled"
                  v-model="payload.mobile_number"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.mobile_number"
                  :error-messages="
                    errors && errors.mobile_number
                      ? errors.mobile_number[0]
                      : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Licence Number"
                  :readonly="disabled"
                  v-model="payload.licence_number"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.licence_number"
                  :error-messages="
                    errors && errors.licence_number
                      ? errors.licence_number[0]
                      : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Licence Issue By Department"
                  :readonly="disabled"
                  v-model="payload.licence_issue_by_department"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.licence_issue_by_department"
                  :error-messages="
                    errors && errors.licence_issue_by_department
                      ? errors.licence_issue_by_department[0]
                      : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="payload.licence_expiry"
                      label="Licence Expiry"
                      append-icon="mdi-calendar"
                      outlined
                      dense
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :hide-details="!errors.licence_expiry"
                      :error-messages="
                        errors && errors.licence_expiry
                          ? errors.licence_expiry[0]
                          : ''
                      "
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="payload.licence_expiry"
                    @input="menu = false"
                    no-title
                    scrollable
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Car Number"
                  :readonly="disabled"
                  v-model="payload.car_number"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.car_number"
                  :error-messages="
                    errors && errors.car_number ? errors.car_number[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Car Brand"
                  :readonly="disabled"
                  v-model="payload.car_brand"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.car_brand"
                  :error-messages="
                    errors && errors.car_brand ? errors.car_brand[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Car Issued city"
                  :readonly="disabled"
                  v-model="payload.car_issued_city"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.car_issued_city"
                  :error-messages="
                    errors && errors.car_issued_city
                      ? errors.car_issued_city[0]
                      : ''
                  "
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Address"
                  :readonly="disabled"
                  v-model="payload.address"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.address"
                  :error-messages="
                    errors && errors.address ? errors.address[0] : ''
                  "
                ></v-text-field>
              </v-col>
            </v-row>
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
    menu: false,
    parkings: [],
    room_categories: [],
    room_sub_categories: [],
    filtered_room_sub_categories: [],
    disabled: false,
    step: 1,
    payload: {
      term: "Long Term",
      gender: "Male",
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
    member_types: [],
  }),

  async created() {
    this.loading = false;
    this.boilerplate = true;

    this.payload = this.item;
  },

  methods: {
    handleAttachment(e) {
      this.payload.logo = e;
    },
    mapper(obj) {
      let formData = new FormData();

      for (let x in obj) {
        formData.append(x, obj[x]);
      }
      if (this.payload.logo) {
        formData.append("logo", this.upload.name);
      }
      formData.append("company_id", this.$auth.user.company_id);

      return formData;
    },

    submit() {
      this.$axios
        .post(`contractor`, this.mapper(Object.assign(this.payload)))
        .then(({ data }) => {
          this.errors = [];
          this.handleSuccessResponse("Contract Company inserted successfully");
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
