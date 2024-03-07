<template>
  <v-dialog persistent v-model="dialog" width="900">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-icon
          v-if="button_type == 'icon'"
          color="black"
          :title="`Create ${label}`"
          >mdi-plus-circle-outline</v-icon
        >
        <v-btn
          v-else
          dense
          small
          class="primary"
          text
          :title="`Create ${label}`"
        >
          Create {{ label }}
          <v-icon right dark>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </span>
    </template>
    <v-card>
      <v-toolbar dense flat>
        <v-card-title>Create {{ label }}</v-card-title>
        <v-spacer></v-spacer>
        <v-icon color="primary" @click="dialog = false">mdi-close</v-icon>
      </v-toolbar>
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <v-row>
              <!-- <v-col cols="12">
                <div class="text-center">
                  <SnippetsUploadAttachment
                    :defaultImage="setImagePreview"
                    @uploaded="handleAttachment"
                  />

                  <span v-if="errors && errors.logo" class="text-danger mt-2">{{
                    errors.logo[0]
                  }}</span>
                </div>
              </v-col> -->
              <v-col cols="12">
                <div class="text-center">
                  <Camera
                    ref="CameraComponent"
                    @imageSrc="
                      (e) => {
                        payload.logo = e;
                      }
                    "
                  />
                  <span v-if="errors && errors.logo" class="error--text mt-2">{{
                    errors.logo[0]
                  }}</span>
                </div>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-if="visitor_type == 'contractor'"
                  v-model="payload.visitor_company_name"
                  :items="[
                    {
                      id: ``,
                      name: `Select Company`,
                    },
                    ...contractorCompanies,
                  ]"
                  dense
                  outlined
                  item-text="name"
                  item-value="id"
                  :hide-details="!errors.visitor_company_name"
                  :error-messages="
                    errors && errors.visitor_company_name
                      ? errors.visitor_company_name[0]
                      : ''
                  "
                  :label="`Contractor Company`"
                ></v-select>
                <v-text-field
                  v-else
                  v-model="payload.visitor_company_name"
                  dense
                  outlined
                  :hide-details="!errors.visitor_company_name"
                  :error-messages="
                    errors && errors.visitor_company_name
                      ? errors.visitor_company_name[0]
                      : ''
                  "
                  label="Company Name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="payload.id_number"
                  dense
                  outlined
                  :hide-details="!errors.id_number"
                  :error-messages="
                    errors && errors.id_number ? errors.id_number[0] : ''
                  "
                  label="Emirates ID"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  append-icon="mdi-credit-card-scan-outline"
                  v-model="payload.rfid"
                  dense
                  outlined
                  :hide-details="!errors.rfid"
                  :error-messages="errors && errors.rfid ? errors.rfid[0] : ''"
                  :label="`${label} Card ID`"
                  type="number"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="9">
            <v-row class="">
              <v-col cols="6">
                <v-text-field
                  v-model="payload.first_name"
                  dense
                  outlined
                  :hide-details="!errors.first_name"
                  :error-messages="
                    errors && errors.first_name ? errors.first_name[0] : ''
                  "
                  label="First Name"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="payload.last_name"
                  dense
                  outlined
                  :hide-details="!errors.last_name"
                  :error-messages="
                    errors && errors.last_name ? errors.last_name[0] : ''
                  "
                  label="Last Name"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  type="number"
                  v-model="payload.phone_number"
                  dense
                  outlined
                  :hide-details="!errors.phone_number"
                  :error-messages="
                    errors && errors.phone_number ? errors.phone_number[0] : ''
                  "
                  label="Phone Number"
                ></v-text-field>
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
                <v-select
                  @change="openDialogForCustom(payload.purpose_id)"
                  v-model="payload.purpose_id"
                  :items="[
                    {
                      id: ``,
                      name: `Select ${
                        visitor_type == 'contractor' ? 'Activity' : 'Purpose'
                      }`,
                    },
                    ...purposes,
                    { id: `custom`, name: `Custom` },
                  ]"
                  dense
                  outlined
                  item-text="name"
                  item-value="id"
                  :hide-details="!errors.purpose_id"
                  :label="`${
                    visitor_type == 'contractor' ? 'Activity' : 'Purpose'
                  }`"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-radio-group
                  class="ma-0 mt-2 px-2 pa-0"
                  v-model="payload.gender"
                  row
                  :hide-details="!errors.gender"
                  :error-messages="
                    errors && errors.gender ? errors.gender[0] : ''
                  "
                >
                  <v-radio label="Male" value="Male"></v-radio>
                  <v-radio label="Female" value="Female"></v-radio>
                  <v-radio label="Other" value="Other"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="6">
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
                      v-model="payload.visit_from"
                      label="Visit From"
                      append-icon="mdi-calendar"
                      outlined
                      dense
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :hide-details="!errors.visit_from"
                      :error-messages="
                        errors && errors.visit_from ? errors.visit_from[0] : ''
                      "
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="payload.visit_from"
                    @input="menu = false"
                    no-title
                    scrollable
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="6">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="payload.visit_to"
                      label="Visit To"
                      append-icon="mdi-calendar"
                      outlined
                      dense
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :hide-details="!errors.visit_to"
                      :error-messages="
                        errors && errors.visit_to ? errors.visit_to[0] : ''
                      "
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="payload.visit_to"
                    @input="menu2 = false"
                    no-title
                    scrollable
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" sm="6" md="4" lg="6">
                <SnippetsTimePickerV1
                  label="Entry Time"
                  :default_value="payload.time_in"
                  @getTime="
                    (e) => {
                      payload.time_in = e;
                    }
                  "
                />
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="6">
                <SnippetsTimePickerV1
                  label="Exit Time"
                  :default_value="payload.time_out"
                  @getTime="
                    (e) => {
                      payload.time_out = e;
                    }
                  "
                />
              </v-col>

              <v-col cols="12"> <b>Enter Tanent/Host Details</b></v-col>
              <v-col cols="6">
                <v-text-field
                  @input="getDetailsByRoomNumber(payload.tanent_room_number)"
                  v-model="payload.tanent_room_number"
                  dense
                  outlined
                  :hide-details="!errors.tanent_id"
                  :error-messages="
                    errors && errors.tanent_id ? errors.tanent_id[0] : ''
                  "
                  label="Room Number"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="payload.tanent_full_name"
                  dense
                  outlined
                  :hide-details="true"
                  label="Full Name"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="payload.tanent_phone_number"
                  dense
                  outlined
                  :hide-details="true"
                  label="Phone Number"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="payload.tanent_email"
                  dense
                  outlined
                  :hide-details="true"
                  label="Email Address"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="payload.tanent_gender"
                  dense
                  outlined
                  :hide-details="true"
                  label="Gender"
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  v-model="payload.tanent_term"
                  dense
                  outlined
                  :hide-details="true"
                  label="Term"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="payload.tanent_nationality"
                  dense
                  outlined
                  :hide-details="true"
                  label="Nationality"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="payload.note"
                  dense
                  outlined
                  :hide-details="!errors.note"
                  :error-messages="errors && errors.note ? errors.note[0] : ''"
                  label="Note/Comment"
                ></v-text-field>
              </v-col>

              <v-col cols="12" class="text-right my-1">
                <v-btn @click="dialog = false">Close</v-btn>
                <v-btn class="primary" @click="submit">Submit</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <CommunityPurposeCreate
      ref="customPopup"
      :type="visitor_type"
      @success="handleResponse"
    />
  </v-dialog>
</template>

<script>
let date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .substring(0, 10);

let hours = String(new Date().getHours()).padStart(2, "0");
let minutes = String(new Date().getMinutes()).padStart(2, "0");
let dynamicTime = hours + ":" + minutes;
hours = parseInt(hours) + 2;
let dynamicOutTime = hours + ":" + minutes;
export default {
  props: ["visitor_type", "button_type", "label"],

  data: () => ({
    disabled: false,
    step: 1,
    payload: {
      company_id: 0,
      visit_from: date,
      visit_to: date,
      time_in: dynamicTime,
      time_out: dynamicOutTime,

      tanent_room_number: null,
      tanent_full_name: null,
      tanent_phone_number: null,
      tanent_gender: null,
      tanent_email: null,
      tanent_term: null,
      tanent_nationality: null,
      note: null,

      timezone_id: 1,
      purpose_id: 0,
      first_name: null,
      last_name: null,
      gender: "Male",
      phone_number: null,
      email: null,
      visitor_company_name: ``,

      status_id: 1,
      date,
      updated_by: 1,
      status_phone_number: null,
      company_name: null,
      reason: null,
      host_company_id: 0,
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
    m: false,
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

    pagination: {
      current: 1,
      total: 0,
      per_page: 10,
    },
    options: {},
    Model: "Tanent",
    endpoint: "visitor-self-register",
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
    purposes: [],
    contractorCompanies: [],
  }),

  created() {
    this.company_id = this.$auth.user.company_id;
    this.payload.company_id = this.$auth.user.company_id;
    this.loading = false;
  },
  mounted() {
    this.getPurposes();

    this.getContractorCompanies();
  },

  methods: {
    async getDetailsByRoomNumber(room) {
      try {
        // Make a GET request to the endpoint
        const { tanent } = await this.$axios.$get(`/room/${room}`);

        if (!tanent) {
          this.payload.tanent_id = null;
          this.payload.tanent_full_name = null;
          this.payload.tanent_phone_number = null;
          this.payload.tanent_gender = null;
          this.payload.tanent_email = null;
          this.payload.tanent_term = null;
          this.payload.tanent_nationality = null;
        }

        this.payload.tanent_id = tanent.id;
        this.payload.tanent_full_name = tanent.full_name;
        this.payload.tanent_phone_number = tanent.phone_number;
        this.payload.tanent_gender = tanent.email;
        this.payload.tanent_email = tanent.gender;
        this.payload.tanent_term = tanent.term;
        this.payload.tanent_nationality = tanent.nationality;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    openDialogForCustom(id) {
      if (id == "custom") {
        this.$refs["customPopup"].DialogBox = true;
      }
    },
    handleResponse(e) {
      this.payload.purpose_id = e;
      this.getPurposes();
    },
    getPurposes() {
      if (this.visitor_type)
        this.$axios
          .get(`purpose_list`, {
            params: {
              company_id: this.$auth.user.company_id,
              type: this.visitor_type,
            },
          })
          .then(({ data }) => {
            this.purposes = data;
          })
          .catch((e) => console.log(e));
    },

    getContractorCompanies() {
      this.$axios
        .get(`branch-list`, {
          params: {
            company_id: this.$auth.user.company_id,
          },
        })
        .then(({ data }) => {
          this.contractorCompanies = data;
        })
        .catch((e) => console.log(e));
    },
    handleAttachment(e) {
      this.payload.profile_picture = e;
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },
    submit() {
      (this.payload.visitor_type = this.visitor_type),
        this.$axios
          .post(this.endpoint, this.payload)
          .then(({ data }) => {
            this.handleSuccessResponse("Visitor inserted successfully");
          })
          .catch(({ response }) => {
            this.handleErrorResponse(response);
          });

      // }
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
<style>
/* Hide the up and down arrows */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
