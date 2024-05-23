<template>
  <v-dialog persistent v-model="editDialog" width="1400" :key="employeeId">
    <v-card>
      <v-tabs
        v-model="tab"
        class="popup_background"
        centered
        icons-and-text
        color="violet"
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab v-for="(item, index) in tabMenu" :key="index">
          {{ item.text }}
          <v-icon>{{ item.icon }}</v-icon>
        </v-tab>

        <v-icon
          @click="closeDialog"
          style="margin-right: 4px"
          text-right
          outlined
          dark
          color="black"
        >
          mdi mdi-close-circle
        </v-icon>
      </v-tabs>

      <v-card-text>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="(item, index) in tabMenu" :key="index">
            <component
              :is="getComponent(item.value)"
              :employeeId="employeeId"
              @close-popup="closePopup2"
              @eventFromChild="handleEventFromChild"
              v-if="tab == item.value"
            />
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import EmployeeEdit from "../../components/employee/EmployeeEdit.vue";
import Contact from "../../components/employee/Contact.vue";
import Passport from "../../components/employee/Passport.vue";
import Emirates from "../../components/employee/Emirates.vue";
import Visa from "../../components/employee/Visa.vue";
import Bank from "../../components/employee/Bank.vue";
import Document from "../../components/employee/Document.vue";
import Qualification from "../../components/employee/Qualification.vue";
import Setting from "../../components/employee/Setting.vue";
import Login from "../../components/employee/Login.vue";
import Rfid from "../../components/employee/Rfid.vue";

import EmployeeProfileView from "../../components/EmployeesLogin/EmployeeLanding.vue";

import "cropperjs/dist/cropper.css";
import VueCropper from "vue-cropperjs";

export default {
  props: ["employeeId"],
  components: {
    VueCropper,
    EmployeeProfileView,
    EmployeeEdit,
    Contact,
    Passport,
    Emirates,
    Visa,
    Bank,
    Document,
    Qualification,
    Setting,
    Login,
    Rfid,
  },

  data: () => ({
    totalRowsCount: 0,
    refresh: true,
    id: "",
    employee_id: "",
    system_user_id: "",
    shifts: [],
    timezones: [],
    joiningDate: null,
    joiningDateMenuOpen: false,
    showFilters: false,
    filters: {},
    isFilter: false,
    sortBy: "employee_id",
    sortDesc: false,
    server_datatable_totalItems: 1000,
    snack: false,
    snackColor: "",
    snackText: "",
    selectedItems: [],
    datatable_search_textbox: "",
    datatable_searchById: "",
    loadinglinear: true,
    displayErrormsg: false,
    image: "",
    mime_type: "",
    cropedImage: "",
    cropper: "",
    autoCrop: false,
    dialogCropping: false,
    comp: "EmployeeEdit",
    tabMenu: [
      {
        text: "Profile",
        icon: "mdi-account-box",
        value: 0,
      },
      {
        text: "Contact",
        icon: "mdi-phone",
        value: 1,
      },
      {
        text: "Passport",
        icon: "mdi-file-powerpoint-outline",
        value: 2,
      },
      {
        text: "Emirates",
        icon: "mdi-city-variant",
        value: 3,
      },
      {
        text: "Visa",
        icon: "mdi-file-document-multiple",
        value: 4,
      },
      {
        text: "Bank",
        icon: "mdi-bank",
        value: 5,
      },
      {
        text: "Document",
        icon: "mdi-file",
        value: 6,
      },
      {
        text: "Qualification",
        icon: "mdi-account-box",
        value: 7,
      },
      {
        text: "Setting",
        icon: "mdi-phone",
        value: 8,
      },
      {
        text: "Login",
        icon: "mdi-lock",
        value: 9,
      },
      {
        text: "RFID",
        icon: "mdi-lock",
        value: 10,
      },
    ],
    tab: 0,
    employeeId: 0,
    employee_id: 0,
    employeeObject: {},
    attrs: [],
    dialog: false,
    editDialog: true,
    viewDialog: false,
    selectedFile: "",
    employeeDialog: false,
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
    loading: false,
    //total: 0,
    per_page: 1000,
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
    previewImage: null,
    payload: {},
    personalItem: {},
    contactItem: {},
    emirateItems: {},
    setting: {},
    options: {},
    Model: "Employee",
    endpoint: "employee",
    snackbar: false,
    ids: [],
    loading: false,
    //total: 0,
    headers: [],
    titleItems: ["Mr", "Mrs", "Miss", "Ms", "Dr"],
    editedIndex: -1,
    editedItem: { name: "" },
    defaultItem: { name: "" },
    response: "",
    data: [],
    errors: [],
    departments: [],
    sub_departments: [],
    designations: [],
    roles: [],
    department_filter_id: "",
    dialogVisible: false,
    payloadOptions: {},
    headers_table: [
      {
        text: "Emp Id / Device Id",
        align: "left",
        sortable: true,
        key: "employee_id",
        value: "employee_id",
        filterable: true,
        width: "10%",
        filterSpecial: false,
      },
      {
        text: "Name",
        align: "left",
        sortable: true,
        key: "first_name",
        value: "first_name",
        width: "15%",
        filterable: true,
        filterSpecial: false,
      },
      {
        text: "Department",
        align: "left",
        sortable: true,
        key: "department_name_id",
        value: "department_name_id", //template name should be match for sorting sub table should be the same
        width: "15%",
        filterable: true,
        filterSpecial: true,
      },
      {
        text: "Mobile",
        align: "left",
        sortable: true,
        key: "mobile",
        value: "phone_number", // search and sorting enable if value matches with template name
        width: "10%",
        filterable: true,
        filterSpecial: false,
      },
      {
        text: "Email",
        align: "left",
        sortable: true,
        key: "email",
        value: "user.email",
        filterable: true,
        filterSpecial: false,
        width: "15%",
      },
      {
        text: "Timezone",
        align: "left",
        sortable: true,
        key: "timezone_id",
        value: "timezone.name",
        filterable: true,
        filterSpecial: true,
      },
      {
        text: "Options",
        align: "left",
        sortable: false,
        key: "options",
        value: "options",
      },
    ],
    isCompany: true,

    refresh: false,
  }),

  async created() {
    this.loading = false;
    this.boilerplate = true;

    this.getDesignations(null);

    if (!this.data) {
      this.refresh = true;
      await this.getDataFromApi();
    }
  },
  mounted() {
    //this.getDataFromApi();
    this.headers = [
      // { text: "#" },
      { text: "E.ID" },
      { text: "Profile" },
      { text: "Name" },
      { text: "Email" },
      { text: "Timezone" },
      { text: "Dept" },
      { text: "Sub Dept" },
      { text: "Desgnation" },
      { text: "Role" },
      { text: "Mobile" },
      { text: "Shift" },
      { text: "Actions" },
    ];
    this.getDepartments();

    this.getTimezone(null);
  },
  watch: {
    options: {
      async handler() {
        await this.getDataFromApi();
      },
      deep: true,
    },
  },
  methods: {
    closeDialog() {
      this.editDialog = false;
      this.$emit(`close`);
    },
    handleAttachment(e) {
      this.employee.profile_picture = e;
    },
    closePopup2() {
      this.editDialog = false;
      this.getDataFromApi();
    },
    getComponent(value) {
      const componentsList = {
        0: "EmployeeEdit",
        1: "Contact",
        2: "Passport",
        3: "Emirates",
        4: "Visa",
        5: "Bank",
        6: "Document",
        7: "Qualification",
        8: "Setting",
        9: "Login",
        10: "Rfid",
      };
      return componentsList[value] || "div"; // default to a div if no component found
    },
    async handleEventFromChild() {
      this.refresh = true;
      await this.getDataFromApi();
    },
    async openNewPage() {
      this.employee = {};
      this.departments = [];
      this.employeeDialog = true;

      await this.getDepartments(null);
    },
    async getDepartments() {
      let options = {
        endpoint: "department-list",
        isFilter: this.isFilter,
        params: {
          company_id: this.$auth.user.company_id,
        },
      };
      this.departments = await this.$store.dispatch("department_list", options);
    },

    async getDesignations() {
      let options = {
        endpoint: "designation-list",
        isFilter: this.isFilter,
        params: {
          company_id: this.$auth.user.company_id,
        },
      };
      this.designations = await this.$store.dispatch(
        "designation_list",
        options
      );
    },

    async getTimezone() {
      let options = {
        endpoint: "timezone-list",
        isFilter: this.isFilter,
        params: {
          company_id: this.$auth.user.company_id,
        },
      };
      this.timezones = await this.$store.dispatch("timezone_list", options);
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
      this.$refs.attachment_input.value = null;
      this.dialogCropping = false;
    },
    saveCroppedImageStep2() {
      this.cropedImage = this.$refs.cropper.getCroppedCanvas().toDataURL();

      this.image_name = this.cropedImage;
      this.previewImage = this.cropedImage;

      this.dialogCropping = false;
    },

    close() {
      this.dialog = false;
      this.errors = [];
      setTimeout(() => {}, 300);
    },
    json_to_csv(json) {
      let data = json.map((e) => ({
        first_name: e.first_name,
        last_name: e.last_name,
        email: e.user.email,
        phone_number: e.phone_number,
        whatsapp_number: e.whatsapp_number,
        phone_relative_number: e.phone_relative_number,
        whatsapp_relative_number: e.whatsapp_relative_number,
        employee_id: e.employee_id,
        joining_date: e.show_joining_date,
        department_code: e.department_id,
        designation_code: e.designation_id,
        department: e.department.name,
        sub_department: e.sub_department.name,
        designation: e.designation.name,
      }));
      let header = Object.keys(data[0]).join(",") + "\n";
      let rows = "";
      data.forEach((e) => {
        rows += Object.values(e).join(",").trim() + "\n";
      });
      return header + rows;
    },
    export_submit() {
      if (this.data.length == 0) {
        this.snackbar = true;
        this.response = "No record to download";
        return;
      }

      let csvData = this.json_to_csv(this.data);
      let element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/csv;charset=utf-8, " + encodeURIComponent(csvData)
      );
      element.setAttribute("download", "download.csv");
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },
    importEmployee() {
      let payload = new FormData();
      payload.append("employees", this.files);
      payload.append("company_id", this.$auth?.user?.company?.id);
      let options = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      this.btnLoader = true;
      this.$axios
        .post("/employee/import", payload, options)
        .then(async ({ data }) => {
          this.btnLoader = false;
          if (!data.status) {
            this.errors = data.errors;
            payload.delete("employees");
          } else {
            this.errors = [];
            this.snackbar = true;
            this.response = "Employees imported successfully";
            this.refresh = true;
            await this.getDataFromApi();
            this.close();
          }
        })
        .catch((e) => {
          if (e.toString().includes("Error: Network Error")) {
            this.errors = [
              "File is modified.Please cancel the current file and try again",
            ];
            this.btnLoader = false;
          }
        });
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },
    async toggleFilter() {
      // this.filters = {};
      this.isFilter = !this.isFilter;

      if (this.isFilter) {
        this.refresh = true;
      }
    },
    async serachAll(e) {
      if ((e && e.length == 0) || e == null) {
        this.refresh = true;
        await this.getDataFromApi();
        return;
      } else if (e.length <= 3) {
        return false;
      }

      this.loadinglinear = true;

      let { sortBy, sortDesc, page, itemsPerPage } = this.options;

      this.$axios
        .get(`${this.endpoint}/search/${e}`, {
          params: {
            page,
            sortBy: sortBy ? sortBy[0] : "",
            sortDesc: sortDesc ? sortDesc[0] : "",
            per_page: itemsPerPage,
            company_id: this.$auth.user.company_id,
          },
        })
        .then(({ data }) => {
          this.data = data.data;
          this.totalRowsCount = data.total;
          this.loadinglinear = false;
        })
        .catch(({ err }) => {
          console.log(`err`);
          this.loadinglinear = false;
        });
    },
    async getDataFromApi() {
      this.loadinglinear = true;

      const data = await this.$store.dispatch("fetchData", {
        key: "employees",
        options: this.options,
        refresh: this.refresh,
        endpoint: this.endpoint,
        filters: this.filters,
      });

      this.data = data.data;
      this.totalRowsCount = data.total;
      this.loadinglinear = false;
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    onpick_attachment() {
      this.$refs.attachment_input.click();
    },
    attachment(e) {
      this.upload.name = e.target.files[0] || "";

      let input = this.$refs.attachment_input;
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
      let employee = new FormData();

      for (let x in obj) {
        employee.append(x, obj[x]);
      }
      employee.append("profile_picture", this.upload.name);
      employee.append("company_id", this.$auth.user.company_id);

      return employee;
    },
    store_data_old() {
      let final = Object.assign(this.employee);
      let employee = this.mapper(final);

      //croppedimageStep3
      if (this.$refs.attachment_input.files[0]) {
        this.cropedImage = this.$refs.cropper.getCroppedCanvas().toDataURL();

        this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
          // Create a FormData object and append the Blob as a file
          //const formData = new FormData();
          employee.append("profile_picture", blob, "cropped_image.jpg");
          employee.append("attachment_input", blob, "cropped_image.jpg");

          //croppedimagesptep4 //push to API in blob method only
          this.saveToAPI(employee);
        }, "image/jpeg");
      } else {
        // this.saveToAPI(employee);
      }
    },
    store_data() {
      this.employee.company_id = this.$auth.user.company_id;

      this.$axios
        .post("/employee-store", this.employee)
        .then(async ({ data }) => {
          //this.loading = false;

          if (!data.status) {
            this.errors = [];
            if (data.errors) this.errors = data.errors;
            else {
              this.snackbar = true;
              this.response = data.message;
            }
          } else {
            this.errors = [];
            this.snackbar = true;
            this.response = "Employee(s) inserted successfully";
            this.refresh = true;
            await this.getDataFromApi();
            this.employeeDialog = false;
          }
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
