<template>
  <v-dialog persistent v-model="dialog" width="900">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-icon right  color="black">mdi-account-plus</v-icon>
        <!-- <v-btn dense small class="primary" text title="Add Company">
          Create {{ label }}
          <v-icon right dark>mdi-plus-circle-outline</v-icon>
        </v-btn> -->
      </span>
    </template>
    <v-card>
      <v-toolbar flat dense>
        <v-card-title> Create {{ label }} </v-card-title>
        <v-spacer></v-spacer>
        <v-icon color="primary" @click="dialog = false">mdi-close</v-icon>
      </v-toolbar>

      <v-container>
        <v-row>
          <v-col cols="3">
            <v-row no-gutters>
              <v-col cols="12">
                <CameraORUpload @imageSrc="handleAttachment" />
                <span
                  v-if="errors && errors.profile_picture"
                  class="error--text mt-2"
                  >{{ errors.profile_picture[0] }}</span
                >
              </v-col>

              <v-col cols="12">
                <v-text-field
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
          </v-col>
          <v-col cols="9">
            <v-row class="mt-1">
              <v-col cols="6">
                <v-text-field
                  label="First Name"
                  :readonly="disabled"
                  v-model="payload.first_name"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.first_name"
                  :error-messages="
                    errors && errors.first_name ? errors.first_name[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Last Name"
                  :readonly="disabled"
                  v-model="payload.last_name"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.last_name"
                  :error-messages="
                    errors && errors.last_name ? errors.last_name[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-autocomplete
                  label="Term"
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
                <v-autocomplete
                  @change="getRelatedChildDetails"
                  label="Room Category"
                  outlined
                  :disabled="disabled"
                  v-model="payload.room_category_id"
                  :items="room_categories"
                  dense
                  item-text="name"
                  item-value="id"
                  :hide-details="!errors.room_category_id"
                  :error-messages="
                    errors && errors.room_category_id
                      ? errors.room_category_id[0]
                      : ''
                  "
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="6">
                <v-autocomplete
                  label="Room Sub Category"
                  outlined
                  :disabled="disabled"
                  v-model="payload.room_sub_category_id"
                  :items="filtered_room_sub_categories"
                  dense
                  item-text="name"
                  item-value="id"
                  :hide-details="!errors.room_sub_category_id"
                  :error-messages="
                    errors && errors.room_sub_category_id
                      ? errors.room_sub_category_id[0]
                      : ''
                  "
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="6">
                <v-autocomplete
                  @change="getRoomsByFloorId(payload)"
                  label="Floor Number"
                  outlined
                  :readonly="disabled"
                  v-model="payload.floor_id"
                  :items="floors"
                  dense
                  item-text="floor_number"
                  item-value="id"
                  :hide-details="!errors.floor_id"
                  :error-messages="
                    errors && errors.floor_id ? errors.floor_id[0] : ''
                  "
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="6">
                <v-autocomplete
                  @change="getRoomNumber(payload.room_id)"
                  label="Room"
                  outlined
                  :readonly="disabled"
                  v-model="payload.room_id"
                  :items="rooms"
                  dense
                  item-text="room_number"
                  item-value="id"
                  :hide-details="!errors.room_id"
                  :error-messages="
                    errors && errors.room_id ? errors.room_id[0] : ''
                  "
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
                <v-menu
                  v-model="menu3"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="payload.date_of_birth"
                      label="Date of Birth"
                      append-icon="mdi-calendar"
                      outlined
                      dense
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :hide-details="!errors.date_of_birth"
                      :error-messages="
                        errors && errors.date_of_birth
                          ? errors.date_of_birth[0]
                          : ''
                      "
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="payload.date_of_birth"
                    @input="menu3 = false"
                    no-title
                    scrollable
                  ></v-date-picker>
                </v-menu>
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
                  label="Whatsapp Number (optional)"
                  :readonly="disabled"
                  v-model="payload.whatsapp_number"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.whatsapp_number"
                  :error-messages="
                    errors && errors.whatsapp_number
                      ? errors.whatsapp_number[0]
                      : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Nationality"
                  :readonly="disabled"
                  v-model="payload.nationality"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.nationality"
                  :error-messages="
                    errors && errors.nationality ? errors.nationality[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="6">
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
                      v-model="payload.start_date"
                      label="Start Date"
                      append-icon="mdi-calendar"
                      outlined
                      dense
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :hide-details="!errors.start_date"
                      :error-messages="
                        errors && errors.start_date ? errors.start_date[0] : ''
                      "
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="payload.start_date"
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
                      v-model="payload.end_date"
                      label="End Date"
                      append-icon="mdi-calendar"
                      outlined
                      dense
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :hide-details="!errors.end_date"
                      :error-messages="
                        errors && errors.end_date ? errors.end_date[0] : ''
                      "
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="payload.end_date"
                    @input="menu2 = false"
                    no-title
                    scrollable
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" v-if="type == 'Owner'">
                <v-checkbox
                  label="Is Staying"
                  dense
                  v-model="payload.isStaying"
                  primary
                  :hide-details="!errors.isStaying"
                  :error-messages="
                    errors && errors.isStaying ? errors.isStaying[0] : ''
                  "
                ></v-checkbox>
              </v-col>

              <v-col cols="12" v-if="errorResponse">
                <span class="red--text">{{ errorResponse }}</span>
              </v-col>

              <v-col cols="12" class="text-right my-1">
                <v-btn @click="dialog = false">Close</v-btn>
                <v-btn
                  v-if="formAction == 'Create'"
                  class="primary"
                  @click="submit"
                  >Submit</v-btn
                >
              </v-col>
            </v-row>
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
  components: {
    VueCropper,
  },

  props: {
    label: {
      type: String,
      default: "Tanent", // Define your default value here
    },
    type: {
      type: String,
      default: "Primary", // Define your default value here
    },
  },

  data: () => ({
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
      isStaying: 0,
    },
    documents: [
      { label: "Passport", key: "passport_doc" },
      { label: "ID", key: "id_doc" },
      { label: "Contract", key: "contract_doc" },
      { label: "Ejari", key: "ejari_doc" },
      { label: "License", key: "license_doc" },
      { label: "Other", key: "others_doc" },
    ],
    vehicles: [{ car_number: "", car_brand: "", parking_id: "" }],
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
    upload: {
      name: "",
    },

    errorResponse: null,

    pagination: {
      current: 1,
      total: 0,
      per_page: 10,
    },
    options: {},
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

    let config = {
      params: { company_id: this.$auth.user.company_id },
    };
    await this.getFloors();

    let { data: room_categories } = await this.$axios.get(
      `room-category-list`,
      config
    );
    this.room_categories = room_categories;

    let { data: room_sub_categories } = await this.$axios.get(
      `room-sub-category-list`,
      config
    );
    this.room_sub_categories = room_sub_categories;

    let { data } = await this.$axios.get(`parking-list`);
    this.parkings = data;
  },

  methods: {
    async getRelatedChildDetails() {
      await this.setRoomSubCategories(this.payload.room_category_id);
    },
    async setRoomSubCategories(id) {
      this.filtered_room_sub_categories = this.room_sub_categories.filter(
        (e) => e.room_category_id == id
      );

      await this.getFloorByCategory(id);
    },
    async getFloorByCategory(id) {
      let { data } = await this.$axios.get(`room-floor-by-category/${id}`);
      this.floors = data;

      this.getRoomsByFloorId(this.payload);
    },

    updatePayload(key, document) {
      this.payload[key] = document;
    },
    generateRandomId() {
      const length = 8; // Adjust the length of the ID as needed
      const randomNumber = Math.floor(Math.random() * Math.pow(10, length)); // Generate a random number
      return randomNumber.toString().padStart(length, "0"); // Convert to string and pad with leading zeros if necessary
    },
    handleAttachment(e) {
      this.payload.profile_picture = e;
    },
    nextStep() {
      this.step++;
    },
    prevStep() {
      this.step--;
    },
    getRoomNumber(room_id) {
      let { room_number } = this.rooms.find((e) => e.id == room_id);
      this.payload.room_number = room_number || 0;
    },
    async getFloors() {
      let { data: floors } = await this.$axios.get(`floor`, {
        params: { company_id: this.$auth.user.company_id },
      });
      this.floors = floors.data;
    },
    async getRoomsByFloorId({ floor_id, room_category_id }) {
      let { data } = await this.$axios.get(`room-by-floor-id`, {
        params: {
          company_id: this.$auth.user.company_id,
          floor_id: floor_id,
          room_category_id: room_category_id,
        },
      });
      this.rooms = data;
    },
    closeViewDialog() {
      this.viewDialog = false;
    },
    caps(str) {
      if (str == "" || str == null) {
        return "---";
      } else {
        let res = str.toString();
        return res.replace(/\b\w/g, (c) => c.toUpperCase());
      }
    },
    closePopup() {
      //croppingimagestep5
      this.$refs.otherDoc_input.value = null;
      this.dialogCropping = false;
    },
    close() {
      this.dialog = false;
      this.errors = [];
      setTimeout(() => {}, 300);
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },
    addItem() {
      this.vehicles.push({ car_number: "", car_brand: "", parking_id: "" });
    },

    deleteItem(index) {
      this.vehicles.splice(index, 1);
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    submit() {
      this.payload.member_type = this.type;
      this.payload.company_id = this.$auth.user.company_id;

      this.$axios
        .post(this.endpoint, this.payload)
        .then(({ data }) => {
          if (!data.status) {
            this.errorResponse = data.message;
            return;
          }
          this.handleSuccessResponse(this.label + " inserted successfully");
        })
        .catch(({ response }) => {
          this.handleErrorResponse(response);
        });

      // }
    },

    handleSuccessResponse(message) {
      this.errorResponse = null;
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
