<template>
  <div class="text-center">
    <v-dialog persistent v-model="dialog" width="500">
      <v-row no-gutters>
        <v-col class="pt-2 text-center" cols="12">
          <v-avatar size="150">
            <v-img src="/fail.png"></v-img>
          </v-avatar>
        </v-col>
      </v-row>
    </v-dialog>
  </div>
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
  props: ["item", "visitor_type", "label"],

  data: () => ({
    disabled: false,
    cards: [],
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
    employeeId: 0,
    employeeObject: {},
    attrs: [],
    editDialog: false,
    viewDialog: false,
    selectedFile: "",
    dialog: true,
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
    purposes: [],
  }),

  async created() {
    this.loading = false;
    this.getPurposes();
    await this.getCards();

    this.payload = this.item;
    this.payload.rfid = `` + this.item.rfid;
    this.payload.tanent_room_number = this.item?.tanent?.room?.room_number;
    this.payload.tanent_id = this.item.tanent.id;
    this.payload.tanent_full_name = this.item.tanent.full_name;
    this.payload.tanent_phone_number = this.item.tanent.phone_number;
    this.payload.tanent_gender = this.item.tanent.gender;
    this.payload.tanent_email = this.item.tanent.email;
    this.payload.tanent_term = this.item.tanent.term;
    this.payload.tanent_nationality = this.item.tanent.nationality;
    this.setImagePreview = this.item.logo;
  },

  methods: {
    closeRFIDCard() {
      this.dialog = false;
      this.$emit("close");
    },
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
        this.payload.tanent_gender = tanent.gender;
        this.payload.tanent_email = tanent.email;
        this.payload.tanent_term = tanent.term;
        this.payload.tanent_nationality = tanent.nationality;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async getCards() {
      const { data } = await this.$axios.get(`/card-list`, {
        params: {
          type: this.visitor_type,
        },
      });

      this.cards = data;
    },
    openDialogForCustom(id) {
      if (id == "custom") {
        this.$refs["customPopup"].DialogBox = true;
      }
    },
    async handleResponse(e) {
      this.payload.purpose_id = e;
      this.getPurposes();
    },
    getPurposes() {
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
    handleAttachment(e) {
      this.payload.logo = e;
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },
    submit() {
      this.payload.rfid = Number(this.payload.rfid).toString();
      this.payload.system_user_id = this.payload.rfid;

      this.$axios
        .post(`visitor-update/${this.payload.id}`, this.payload)
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
.v-dialog.v-dialog--active {
  box-shadow: none !important;
}
</style>
