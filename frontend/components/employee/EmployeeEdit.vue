<template>
  <div>
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar" small top="top" :color="color">
        {{ response }}
      </v-snackbar>
    </div>
    <v-card>
      <v-card-text>
        <v-dialog v-model="dialogCropping" width="500">
          <v-card style="padding-top: 20px">
            <v-card-text>
              <!-- <img :src="imageUrl" alt="Preview Image" /> -->
              <!-- Cropping image step1 -->
              <VueCropper
                v-show="selectedFile"
                ref="cropper"
                :src="selectedFile"
                alt="Source Image"
                :aspectRatio="1"
                :autoCropArea="0.9"
                :viewMode="3"
              ></VueCropper>

              <!-- <div class="cropper-preview"></div> -->
            </v-card-text>

            <v-card-actions>
              <div col="6" md="6" class="col-sm-12 col-md-6 col-12 pull-left">
                <v-btn
                  class="danger btn btn-danger text-left"
                  text
                  @click="closePopup()"
                  style="float: left"
                  >Cancel</v-btn
                >
              </div>
              <div col="6" md="6" class="col-sm-12 col-md-6 col-12 text-right">
                <v-btn
                  class="primary btn btn-danger text-right"
                  @click="saveCroppedImageStep2(), (dialog = false)"
                  >Crop</v-btn
                >
              </div>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-row>
          <v-col md="6" sm="12" cols="12" dense>
            <v-row>
              <v-col md="6" sm="12" cols="12">
                <v-select
                  label="Title"
                  v-model="employee.title"
                  :items="titleItems"
                  :hide-details="!errors.title"
                  :error="errors.title"
                  :error-messages="
                    errors && errors.title ? errors.title[0] : ''
                  "
                  dense
                  outlined
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="6" sm="12" cols="12" dense>
                <!-- <label class="col-form-label"
                  >Display Name <span class="text-danger">*</span></label
                > -->
                <v-text-field
                  label="Display Name"
                  dense
                  outlined
                  :hide-details="!errors.display_name"
                  type="text"
                  v-model="employee.display_name"
                  :error-messages="
                    errors && errors.display_name ? errors.display_name[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col md="6" sm="12" cols="12" dense>
                <v-text-field
                  label="Full Name"
                  dense
                  outlined
                  :hide-details="!errors.full_name"
                  type="text"
                  v-model="employee.full_name"
                  :error-messages="
                    errors && errors.full_name ? errors.full_name[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col md="6" sm="12" cols="12" dense>
                <!-- <label class="col-form-label"
                  >First Name <span class="text-danger">*</span></label
                > -->
                <v-text-field
                  label="First Name "
                  dense
                  outlined
                  :hide-details="!errors.first_name"
                  type="text"
                  v-model="employee.first_name"
                  :error="errors.first_name"
                  :error-messages="
                    errors && errors.first_name ? errors.first_name[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col md="6" sm="12" cols="12" dense>
                <!-- <label class="col-form-label"
                  >Last Name <span class="text-danger">*</span></label
                > -->
                <v-text-field
                  label="Last Name"
                  dense
                  outlined
                  :hide-details="!errors.last_name"
                  type="text"
                  v-model="employee.last_name"
                  :error="errors.last_name"
                  :error-messages="
                    errors && errors.last_name ? errors.last_name[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col md="6" cols="12" sm="12" dense>
                <!-- <label class="col-form-label"
                  >Employee ID <span class="text-danger">*</span></label
                > -->
                <v-text-field
                  label="Employee ID"
                  dense
                  outlined
                  type="text"
                  v-model="employee.employee_id"
                  :hide-details="!errors.employee_id"
                  :error="errors.employee_id"
                  :error-messages="
                    errors && errors.employee_id ? errors.employee_id[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col md="6" cols="12" sm="12" dense>
                <!-- <label class="col-form-label"
                  >Employee Device Id <span class="text-danger">*</span></label
                > -->
                <v-text-field
                  label="Employee Device Id"
                  dense
                  outlined
                  type="text"
                  v-model="employee.system_user_id"
                  :hide-details="!errors.system_user_id"
                  :error="errors.system_user_id"
                  :error-messages="
                    errors && errors.system_user_id
                      ? errors.system_user_id[0]
                      : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col md="6" sm="12" cols="12">
                <!-- <label class="col-form-label">Department</label> -->
                <v-select
                  label="Department"
                  :items="departments"
                  item-text="name"
                  item-value="id"
                  placeholder="Select"
                  v-model="employee.department_id"
                  :hide-details="!errors.department_id"
                  :error-messages="
                    errors && errors.department_id
                      ? errors.department_id[0]
                      : ''
                  "
                  dense
                  outlined
                ></v-select>
              </v-col>
              <v-col md="6" sm="12" cols="12">
                <!-- <label class="col-form-label">Designation </label> -->
                <v-autocomplete
                  label="Designation "
                  :items="designations"
                  item-text="name"
                  item-value="id"
                  placeholder="Select"
                  v-model="employee.designation_id"
                  :hide-details="!errors.designation_id"
                  :error="errors.designation_id"
                  :error-messages="
                    errors && errors.designation_id
                      ? errors.designation_id[0]
                      : ''
                  "
                  dense
                  outlined
                ></v-autocomplete>
                {{ setPreviewImage }}
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-sm-6">
            <CameraORUpload
              v-if="!loading"
              :PreviewImage="setPreviewImage"
              @imageSrc="handleAttachment"
            />

            <span
              v-if="errors && errors.profile_picture"
              class="text-danger mt-2"
              >{{ errors.profile_picture[0] }}</span
            >
          </v-col>
          <!-- <v-divider></v-divider> -->
          <v-col cols="12" class="text-right">
            <v-btn
              v-if="can('employee_edit')"
              small
              :loading="loading"
              color="primary"
              @click="store_data"
            >
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import "cropperjs/dist/cropper.css";
import VueCropper from "vue-cropperjs";
export default {
  components: {
    VueCropper,
  },
  props: ["employeeId"],
  data: () => ({
    image: "",
    leave_managers: [],
    mime_type: "",
    cropedImage: "",
    cropper: "",
    autoCrop: false,
    dialogCropping: false,
    selectedFile: "",
    upload_edit: {
      name: "",
    },

    attrs: [],
    dialog: false,
    editDialog: false,
    tab: null,
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
    color: "background",
    files: "",
    Model: "Employee",
    endpoint: "employee",
    search: "",
    loading: false,
    total: 0,
    next_page_url: "",
    prev_page_url: "",
    current_page: 1,
    per_page: 8,
    response: "",
    ListName: "",
    snackbar: false,
    btnLoader: false,
    max_employee: 0,
    employee: {
      title: "",
      display_name: "",
      employee_id: "",
      system_user_id: "",
      profile_picture: "",
      //employee_role_id: "",
      leave_group_id: "",
      reporting_manager_id: "",
    },
    upload: {
      name: "",
    },
    setPreviewImage: null,
    snackbar: false,
    ids: [],
    loading: false,
    total: 0,
    titleItems: ["Mr", "Mrs", "Miss", "Ms", "Dr"],
    editedIndex: -1,
    response: "",
    departments: [],
    sub_departments: [],
    designations: [],
    leave_groups: [],
    data: [],
    errors: [],
    departments: [],
    department_id: "",
    branchesList: [],
    isCompany: true,
    isImage: false,
  }),

  async created() {
    this.getInfo(this.employeeId);

    this.getDepartments();
  },
  mounted() {
    //this.getDataFromApi();
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  methods: {
    handleAttachment(e) {
      this.isImage = true;
      this.employee.profile_picture = e;
    },
    getInfo(id) {
      this.loading = true;
      this.$axios
        .get(`employee-single/${id}`)
        .then(({ data }) => {
          this.employee = {
            title: data.title,
            display_name: data.display_name,
            full_name: data.full_name,
            first_name: data.first_name,
            last_name: data.last_name,
            employee_id: data.employee_id,
            system_user_id: data.system_user_id,
            department_id: data.department_id,
            sub_department_id: data.sub_department_id,
            designation_id: data.designation_id,
            //employee_role_id: data.user.employee_role_id,
            leave_group_id: data.leave_group_id,
            reporting_manager_id: data.reporting_manager_id,
            branch_id: data.branch_id,
          };
          // this.employee.id = data.id;
          this.setPreviewImage = data.profile_picture;
          this.loading = false;

          this.getDesignations();
        })
        .catch((err) => console.log(err));
    },
    getDesignations() {
      this.$axios
        .get(`designation`, {
          params: {
            per_page: 1000,
            company_id: this.$auth.user.company_id,
            //department_ids: this.$auth.user.assignedDepartments,
          },
        })
        .then(({ data }) => {
          this.designations = data.data;
        })
        .catch((err) => console.log(err));
    },
    getDepartments() {
      this.$axios
        .get(`departments`, {
          params: {
            per_page: 1000,
            company_id: this.$auth.user.company_id,
          },
        })
        .then(({ data }) => {
          this.departments = data.data;
        });
    },
    can() {
      return true;
    },
    close() {
      this.dialog = false;
    },

    store_data() {
      let newObj = {};

      if (!this.isImage) {
        newObj = { ...this.employee, profile_picture: null };
      } else {
        newObj = this.employee;
      }

      this.$axios
        .post(`/employee-update/${this.employeeId}`, newObj)
        .then(({ data }) => {
          this.loading = false;

          if (!data.status) {
            this.errors = data.errors;
          } else {
            this.errors = [];
            this.snackbar = true;
            this.response = "Employees Updated successfully";
            this.$emit("eventFromchild");
            setTimeout(() => {
              this.$emit("close-popup");
            }, 1000);

            //this.employeeDialog = false;
          }
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
