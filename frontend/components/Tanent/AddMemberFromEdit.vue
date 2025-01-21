<template>
  <v-dialog persistent v-model="dialog" width="900">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-alert outlined color="primary" dense class="text-center">
          <v-icon color="primary" small> mdi-account </v-icon>
          Add Member(s)
        </v-alert>
      </span>
    </template>
    <v-card>
      <v-card-title>Add Member</v-card-title>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-row>
              <v-col cols="12">
                <div class="text-center">
                  <CameraORUpload @imageSrc="handleAttachment" />

                  <span
                    v-if="errors && errors.profile_picture"
                    class="text-danger mt-2"
                    >{{ errors.profile_picture[0] }}</span
                  >
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="9">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="Tanent Ref #"
                  :disabled="true"
                  v-model="item.tanent_id"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.parent_id"
                  :error-messages="
                    errors && errors.parent_id ? errors.parent_id[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Device User Id"
                  v-model="item.system_user_id"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.system_user_id"
                  :error-messages="
                    errors && errors.system_user_id
                      ? errors.system_user_id[0]
                      : ''
                  "
                ></v-text-field>
              </v-col>
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
                <v-text-field
                  label="Age"
                  :readonly="disabled"
                  v-model="payload.age"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.age"
                  :error-messages="errors && errors.age ? errors.age[0] : ''"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Phone Number"
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
      member_type: "Family Member",
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

    let config = {
      params: { company_id: this.$auth.user.company_id },
    };

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

    // let { data: member_types } = await this.$axios.get(`get_member_types`);
    // member_types.shift();
    // this.member_types = member_types;

    this.payload.parent_id = this.item.tanent_id;
    this.payload.system_user_id = this.item.system_user_id;
  },

  methods: {
    handleAttachment(e) {
      this.payload.profile_picture = e;
    },
    submit() {
      this.payload.company_id = this.$auth.user.company_id;

      this.$axios
        .post(`add-member`, this.payload)
        .then(({ data }) => {
          this.errors = [];
          this.handleSuccessResponse("Member inserted successfully");
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
