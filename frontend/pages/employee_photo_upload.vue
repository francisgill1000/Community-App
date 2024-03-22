<template>
  <div
    style="width: 100% !important"
    v-if="can(`employee_device_photo_upload`)"
  >
    <div class="text-center ma-2">
      <v-snackbar
        :color="snackbar.color"
        v-model="snackbar.show"
        small
        top="top"
        :timeout="3000"
      >
        {{ response }}
      </v-snackbar>
    </div>
    <v-row>
      <v-col cols="4">
        <v-autocomplete
          @change="loadDepartmentemployees"
          v-model="departmentautocompleteed"
          :items="[{ id: `---`, name: `All Departments` }, ...departments]"
          dense
          outlined
          item-value="id"
          item-text="name"
          hide-details
          label="Department"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
        <v-card class="photo-displaylist" style="height: 300px">
          <v-toolbar color=" " dense flat style="border: 1px solid #ddd">
            <span> Employees </span>
          </v-toolbar>
          <div style="max-height: 250px; overflow-y: auto; overflow-x: hidden">
            <v-card-text>
              <v-row
                class="timezone-displaylistview1"
                v-for="(user, index) in leftEmployees"
                :id="user.id"
                v-model="leftEmployees"
                :key="user.id"
                style="border-bottom: 1px solid #ddd"
              >
                <v-col cols="1" class="pa-0 ma-0">
                  <v-checkbox
                    dense
                    small
                    primary
                    hide-details
                    v-model="leftSelectedEmp"
                    :value="user.id"
                  ></v-checkbox>
                  <!-- :disabled="!user.profile_picture" -->
                </v-col>

                <v-col cols="1" class="py-1 ma-0">
                  <v-avatar size="40">
                    <v-img
                      :src="
                        user.profile_picture
                          ? user.profile_picture
                          : '/no-profile-image.jpg'
                      "
                    >
                    </v-img>
                  </v-avatar>
                </v-col>
                <v-col col="4" class="pt-2">
                  {{ user.first_name }} {{ user.last_name }}
                </v-col>
              </v-row>
            </v-card-text>
          </div>
        </v-card>
      </v-col>

      <v-col cols="2">
        <div style="text-align: -webkit-center">
          <button
            type="button"
            id="undo_redo_undo"
            class="btn primary btn-block white--text"
          >
            Options
          </button>

          <button
            @click="moveToRightEmpOption2"
            type="button"
            id="undo_redo_rightSelected"
            class="btn btn-default btn-block"
          >
            <i
              aria-hidden="true"
              class="v-icon notranslate mdi mdi-chevron-right theme--red"
            ></i>
          </button>

          <button
            @click="allmoveToRightEmp"
            type="button"
            id="undo_redo_rightAll"
            class="btn btn-default btn-block"
          >
            <i
              aria-hidden="true"
              class="v-icon notranslate mdi mdi-chevron-double-right theme--red"
            ></i>
          </button>
          <button
            @click="moveToLeftempOption2"
            type="button"
            id="undo_redo_leftSelected"
            class="btn btn-default btn-block"
          >
            <i
              aria-hidden="true"
              class="v-icon notranslate mdi mdi-chevron-left theme--red"
            ></i>
          </button>
          <button
            @click="allmoveToLeftemp"
            type="button"
            id="undo_redo_leftAll"
            class="btn btn-default btn-block"
          >
            <i
              aria-hidden="true"
              class="v-icon notranslate mdi mdi-chevron-double-left theme--red"
            ></i>
          </button>
        </div>
      </v-col>

      <v-col cols="5">
        <v-card class="photo-displaylist" style="height: 300px">
          <v-toolbar color=" " dense flat style="border: 1px solid #ddd">
            <span>Selected Employees </span>
          </v-toolbar>
          <div style="max-height: 250px; overflow-y: auto; overflow-x: hidden">
            <v-card-text>
              <v-row
                class="timezone-displaylistview1"
                v-for="(user, index) in rightEmployees"
                :id="user.id"
                v-model="rightSelectedEmp"
                :key="user.id"
                style="border-bottom: 1px solid #ddd"
              >
                <v-col cols="1" class="pa-0 ma-0">
                  <v-checkbox
                    dense
                    small
                    primary
                    hide-details
                    v-model="leftSelectedEmp"
                    :value="user.id"
                  ></v-checkbox>
                  <!-- :disabled="!user.profile_picture" -->
                </v-col>

                <v-col cols="1" class="py-1 ma-0">
                  <v-avatar size="40">
                    <v-img
                      :src="
                        user.profile_picture
                          ? user.profile_picture
                          : '/no-profile-image.jpg'
                      "
                    >
                    </v-img>
                  </v-avatar>
                </v-col>
                <v-col col="4" class="pt-2">
                  {{ user.first_name }} {{ user.last_name }}
                </v-col>
              </v-row>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
        <v-card class="photo-displaylist" style="height: 300px">
          <v-toolbar color=" " dense flat style="border: 1px solid #ddd">
            <span> Devices</span>
          </v-toolbar>
          <div style="max-height: 250px; overflow-y: auto; overflow-x: hidden">
            <v-card-text>
              <v-row
                class="timezone-displaylistview1"
                v-for="(user, index) in leftDevices"
                :id="user.id"
                v-model="leftSelectedDevices"
                :key="user.id"
                style="border-bottom: 1px solid #ddd"
              >
                <v-col md="1" style="padding: 0px;margin-top-3">
                  <v-checkbox
                    v-if="user.status.name == 'active'"
                    dense
                    small
                    hideDetails
                    v-model="leftSelectedDevices"
                    :value="user.id"
                    primary
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    style="padding: 0px;margin-top-3"
                    v-else
                    indeterminate
                    value
                    disabled
                    dense
                    small
                    hideDetails
                    v-model="leftSelectedDevices"
                    :value="user.id"
                    primary
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col md="3" style="padding: 0px; padding-top: 5px">
                  {{ user.name }}
                </v-col>
                <v-col md="3" style="padding: 0px; padding-top: 5px">
                  {{ user.model_number }}
                </v-col>
                <v-col md="3" style="padding: 0px">
                  <img
                    title="Online"
                    v-if="user.status.name == 'active'"
                    src="/icons/device_status_open.png"
                    style="width: 30px"
                  />
                  <img
                    title="Offline"
                    v-else
                    src="/icons/device_status_close.png"
                    style="width: 30px"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </div>
        </v-card>
      </v-col>

      <v-col cols="2">
        <div style="text-align: -webkit-center">
          <button
            type="button"
            id="undo_redo_undo"
            class="btn primary btn-block white--text"
          >
            Options
          </button>

          <button
            @click="moveToRightDevicesOption2"
            type="button"
            id="undo_redo_rightSelected"
            class="btn btn-default btn-block"
          >
            <i
              aria-hidden="true"
              class="v-icon notranslate mdi mdi-chevron-right theme--red"
            ></i>
          </button>

          <button
            @click="allmoveToRightDevices"
            type="button"
            id="undo_redo_rightAll"
            class="btn btn-default btn-block"
          >
            <i
              aria-hidden="true"
              class="v-icon notranslate mdi mdi-chevron-double-right theme--red"
            ></i>
          </button>
          <button
            @click="moveToLeftDevicesOption2"
            type="button"
            id="undo_redo_leftSelected"
            class="btn btn-default btn-block"
          >
            <i
              aria-hidden="true"
              class="v-icon notranslate mdi mdi-chevron-left theme--red"
            ></i>
          </button>
          <button
            @click="allmoveToLeftDevices"
            type="button"
            id="undo_redo_leftAll"
            class="btn btn-default btn-block"
          >
            <i
              aria-hidden="true"
              class="v-icon notranslate mdi mdi-chevron-double-left theme--red"
            ></i>
          </button>
        </div>
      </v-col>

      <v-col cols="5">
        <v-card class="photo-displaylist" style="height: 300px">
          <v-toolbar color=" " dense flat style="border: 1px solid #ddd">
            <span>Selected Devices</span>
          </v-toolbar>
          <div style="max-height: 250px; overflow-y: auto; overflow-x: hidden">
            <v-card-text>
              <v-row
                class="timezone-displaylistview1"
                v-for="(user, index) in rightDevices"
                :id="user.id"
                v-model="rightSelectedDevices"
                :key="user.id"
                style="border-bottom: 1px solid #ddd"
              >
                <v-col md="1" style="padding: 0px;margin-top-3">
                  <v-checkbox
                    v-if="user.status.name == 'active'"
                    dense
                    small
                    hideDetails
                    v-model="rightSelectedDevices"
                    :value="user.id"
                    primary
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    style="padding: 0px;margin-top-3"
                    v-else
                    indeterminate
                    value
                    disabled
                    dense
                    small
                    hideDetails
                    v-model="leftSelectedDevices"
                    :value="user.id"
                    primary
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col md="3" style="padding: 0px; padding-top: 5px">
                  {{ user.name }}
                </v-col>
                <v-col md="3" style="padding: 0px; padding-top: 5px">
                  {{ user.model_number }}
                </v-col>
                <v-col md="3" style="padding: 0px">
                  <span
                    v-if="user.sdkDeviceResponse == 'Success'"
                    style="color: green"
                    >{{ user.sdkDeviceResponse }}</span
                  >
                  <span v-else style="color: red">{{
                    user.sdkDeviceResponse
                  }}</span>
                </v-col>
              </v-row>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-right">
        <div>
          <span v-if="errors && errors.message" class="text-danger mt-2">{{
            errors.message
          }}</span>
        </div>

        <v-btn
          :disabled="!displaybutton"
          :loading="loading"
          @click="submit"
          id="save"
          class="primary"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </div>
  <NoAccess v-else />
</template>

<script>
export default {
  data() {
    return {
      isCompany: true,
      branchesList: [],
      loading: false,
      counter: 0,
      displaybutton: false,
      progressloading: false,
      searchInput: "",
      snackbar: {
        message: "",
        color: "black",
        show: false,
      },
      errors: [],
      response: "",
      color: "primary",
      loading: true,
      endpointEmployee: "get_employeeswith_timezonename",
      endpointDevise: "device",
      leftSelectedEmp: [],
      departmentselected: [],
      departments: [],
      leftEmployees: [],
      rightSelectedEmp: [],
      rightEmployees: [],
      leftSelectedDevices: [],
      leftDevices: [],
      rightSelectedDevices: [],
      rightDevices: [],
      options: {
        params: {
          company_id: this.$auth.user.company_id,
          cols: ["id", "name"],
        },
      },
    };
  },
  mounted: function () {
    // this.snackbar.show = false;
    // this.snackbar.message = "Data loading...Please wait ";
    // this.response = "Data loading...Please wait ";

    this.$nextTick(function () {
      setTimeout(() => {
        this.loading = false;
        //this.snackbar = false;
      }, 2000);
    });

    setTimeout(() => {
      this.loading = false;
      //this.snackbar = false;
    }, 2000);
  },
  async created() {
    this.progressloading = true;
    let options = {
      params: {
        company_id: this.$auth.user.company_id,
      },
    };
    this.getDepartments(options);
  },
  methods: {
    can(per) {
      return this.$pagePermission.can(per, this);
    },
    getDepartments(options) {
      this.progressloading = true;
      this.$axios
        .get("department-list", options)
        .then(({ data }) => {
          this.departments = data;
        })
        .catch((err) => console.log(err));
    },
    loadDepartmentemployees() {
      //this.loading = true;
      // let page = this.pagination.current;
      let url = this.endpointEmployee;
      let options = {
        params: {
          per_page: 1000, //this.pagination.per_page,
          company_id: this.$auth.user.company_id,
          department_id: this.departmentselected,
          cols: ["id", "employee_id", "first_name", "last_name"],
        },
      };
      let page = 1;

      this.$axios.get(`${url}?page=${page}`, options).then(({ data }) => {
        this.leftEmployees = [];
        this.leftEmployees = data.data;
        this.leftSelectedEmp = [];

        this.rightEmployees = [];
        this.rightSelectedEmp = [];

        this.getDevisesDataFromApi();
      });
    },
    resetErrorMessages() {
      this.errors = [];
      this.response = "";
      this.leftEmployees.forEach((element) => {
        element["sdkEmpResponse"] = "";
      });
      this.leftDevices.forEach((element) => {
        element["sdkDeviceResponse"] = "";
      });
    },
    getDevisesDataFromApi(url = this.endpointDevise) {
      //this.loading = true;
      // let page = this.pagination.current;
      let options = {
        params: {
          per_page: 1000, //this.pagination.per_page,
          company_id: this.$auth.user.company_id,
          sortBy: "status_id",
          //cols: ["id", "location", "name", "device_id", "status:id"],
        },
      };
      let page = 1;
      this.$axios.get(`${url}?page=${page}`, options).then(({ data }) => {
        this.leftDevices = data.data;
      });
    },
    sortObject: (o) =>
      o.sort(function compareByName(a, b) {
        if (a.first_name && b.first_name) {
          let nameA = a.first_name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
          let nameB = b.first_name.toUpperCase();

          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          } else {
            return 0;
          }
        } else {
        }
      }),
    sortObjectD: (o) =>
      o.sort(function compareByName(a, b) {
        if (a.device_id && b.device_id) {
          let nameA = a.device_id.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
          let nameB = b.device_id.toUpperCase();

          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          } else {
            return 0;
          }
        } else {
          return 0;
        }
      }),

    verifySubmitButton() {
      this.displaybutton =
        this.rightEmployees.length > 0 && this.rightDevices.length > 0;
    },
    allmoveToLeftemp() {
      this.resetErrorMessages();
      this.leftEmployees = this.leftEmployees.concat(this.rightEmployees);
      this.rightEmployees = [];
      this.leftEmployees = this.sortObject(this.leftEmployees);

      this.verifySubmitButton();
    },
    allmoveToRightEmp() {
      this.resetErrorMessages();
      // this.rightEmployees = this.rightEmployees.concat(this.leftEmployees);
      // this.leftEmployees = [];

      this.rightEmployees = this.rightEmployees.concat(
        this.leftEmployees.filter((el) => el.profile_picture != null)
      );

      this.leftEmployees = this.leftEmployees.filter(
        (el) => el.profile_picture == null
      );

      this.rightEmployees = this.sortObject(this.rightEmployees);
      this.verifySubmitButton();
    },
    moveToLeftempOption2() {
      this.resetErrorMessages();

      if (!this.rightSelectedEmp.length) return;
      //for (let i = this.leftSelectedEmp.length; i > 0; i--) {
      let _rightSelectedEmp_length = this.rightSelectedEmp.length;
      for (let i = 0; i < _rightSelectedEmp_length; i++) {
        if (this.rightSelectedEmp) {
          let selectedindex = this.rightEmployees.findIndex(
            (e) => e.id == this.rightSelectedEmp[i]
          );

          let selectedobject = this.rightEmployees.find(
            (e) => e.id == this.rightSelectedEmp[i]
          );

          selectedobject.sdkEmpResponse = "";
          this.leftEmployees.push(selectedobject);

          this.rightEmployees.splice(selectedindex, 1);
        }
      }
      this.leftEmployees = this.sortObject(this.leftEmployees);
      for (let i = 0; i < _rightSelectedEmp_length; i++) {
        this.rightSelectedEmp.pop(this.rightSelectedEmp[i]);
      }

      this.verifySubmitButton();
    },
    moveToLeftemp(id) {
      this.resetErrorMessages();
      this.rightSelectedEmp.push(id);
      if (!this.rightSelectedEmp.length) return;

      //for (let i = this.leftSelectedEmp.length; i > 0; i--) {
      let _rightSelectedEmp_length = this.rightSelectedEmp.length;
      for (let i = 0; i < _rightSelectedEmp_length; i++) {
        if (this.rightSelectedEmp) {
          let selectedindex = this.rightEmployees.findIndex(
            (e) => e.id == this.rightSelectedEmp[i]
          );

          let selectedobject = this.rightEmployees.find(
            (e) => e.id == this.rightSelectedEmp[i]
          );

          selectedobject.sdkEmpResponse = "";
          this.leftEmployees.push(selectedobject);

          this.rightEmployees.splice(selectedindex, 1);
        }
      }
      this.leftEmployees = this.sortObject(this.leftEmployees);

      this.rightSelectedEmp.pop(id);
      this.verifySubmitButton();
    },

    moveToRightEmpOption2() {
      this.resetErrorMessages();
      this.resetErrorMessages();
      if (!this.leftSelectedEmp.length) return;

      let _leftSelectedEmp_length = this.leftSelectedEmp.length;
      for (let i = 0; i < _leftSelectedEmp_length; i++) {
        if (this.leftSelectedEmp) {
          let selectedindex = this.leftEmployees.findIndex(
            (e) => e.id == this.leftSelectedEmp[i]
          );

          let selectedobject = this.leftEmployees.find(
            (e) => e.id == this.leftSelectedEmp[i]
          );

          this.rightEmployees.push(selectedobject);

          this.leftEmployees.splice(selectedindex, 1);
        }
      }
      this.rightEmployees = this.sortObject(this.rightEmployees);

      for (let i = 0; i < _leftSelectedEmp_length; i++) {
        this.leftSelectedEmp.pop(this.leftSelectedEmp[i]);
      }
      this.verifySubmitButton();
    },

    /* Devices---------------------------------------- */
    allmoveToLeftDevices() {
      this.resetErrorMessages();
      this.leftDevices = this.leftDevices.concat(this.rightDevices);
      this.rightDevices = [];

      this.leftDevices = this.sortObjectD(this.leftDevices);
      this.verifySubmitButton();
    },
    allmoveToRightDevices() {
      this.resetErrorMessages();
      ///this.rightDevices = this.rightDevices.concat(this.leftDevices);
      //this.leftDevices = [];

      this.rightDevices = this.rightDevices.concat(
        this.leftDevices.filter((el) => el.status.name == "active")
      );

      this.leftDevices = this.leftDevices.filter(
        (el) => el.status.name == "inactive"
      );

      this.rightDevices = this.sortObjectD(this.rightDevices);
      this.verifySubmitButton();
    },
    moveToLeftDevicesOption2() {
      this.resetErrorMessages();

      if (!this.rightSelectedDevices.length) return;

      //for (let i = this.leftSelectedDevices.length; i > 0; i--) {
      let _rightSelectedDevices_length = this.rightSelectedDevices.length;
      for (let i = 0; i < _rightSelectedDevices_length; i++) {
        if (this.rightSelectedDevices) {
          let selectedindex = this.rightDevices.findIndex(
            (e) => e.id == this.rightSelectedDevices[i]
          );

          let selectedobject = this.rightDevices.find(
            (e) => e.id == this.rightSelectedDevices[i]
          );
          selectedobject["sdkEmpResponse"] = "";
          this.leftDevices.push(selectedobject);

          this.rightDevices.splice(selectedindex, 1);
        }
      }

      this.leftDevices = this.sortObjectD(this.leftDevices);

      for (let i = 0; i < _rightSelectedDevices_length; i++) {
        this.rightSelectedDevices.pop(this.rightSelectedDevices[i]);
      }
      this.verifySubmitButton();
    },
    moveToLeftDevices(id) {
      this.resetErrorMessages();
      this.rightSelectedDevices.push(id);

      if (!this.rightSelectedDevices.length) return;

      //for (let i = this.leftSelectedDevices.length; i > 0; i--) {
      let _rightSelectedDevices_length = this.rightSelectedDevices.length;
      for (let i = 0; i < _rightSelectedDevices_length; i++) {
        if (this.rightSelectedDevices) {
          let selectedindex = this.rightDevices.findIndex(
            (e) => e.id == this.rightSelectedDevices[i]
          );

          let selectedobject = this.rightDevices.find(
            (e) => e.id == this.rightSelectedDevices[i]
          );

          this.leftDevices.push(selectedobject);

          this.rightDevices.splice(selectedindex, 1);
        }
      }

      this.leftDevices = this.sortObjectD(this.leftDevices);

      this.rightSelectedDevices.pop(id);
      this.verifySubmitButton();
    },
    moveToRightDevicesOption2() {
      this.resetErrorMessages();

      if (!this.leftSelectedDevices.length) return;

      let _leftSelectedDevices_length = this.leftSelectedDevices.length;
      for (let i = 0; i < _leftSelectedDevices_length; i++) {
        if (this.leftSelectedDevices) {
          let selectedindex = this.leftDevices.findIndex(
            (e) => e.id == this.leftSelectedDevices[i]
          );

          let selectedobject = this.leftDevices.find(
            (e) => e.id == this.leftSelectedDevices[i]
          );
          selectedobject["sdkDeviceResponse"] = "";
          this.rightDevices.push(selectedobject);

          this.leftDevices.splice(selectedindex, 1);
        }
      }

      this.rightDevices = this.sortObjectD(this.rightDevices);

      for (let i = 0; i < _leftSelectedDevices_length; i++) {
        this.leftSelectedDevices.pop(this.leftSelectedDevices[i]);
      }
      this.verifySubmitButton();
    },
    moveToRightDevices(id) {
      this.resetErrorMessages();
      this.leftSelectedDevices.push(id);

      if (!this.leftSelectedDevices.length) return;

      let _leftSelectedDevices_length = this.leftSelectedDevices.length;
      for (let i = 0; i < _leftSelectedDevices_length; i++) {
        if (this.leftSelectedDevices) {
          let selectedindex = this.leftDevices.findIndex(
            (e) => e.id == this.leftSelectedDevices[i]
          );

          let selectedobject = this.leftDevices.find(
            (e) => e.id == this.leftSelectedDevices[i]
          );

          selectedobject["sdkDeviceResponse"] = "";
          this.rightDevices.push(selectedobject);

          this.leftDevices.splice(selectedindex, 1);
        }
      }

      this.rightDevices = this.sortObjectD(this.rightDevices);

      this.leftSelectedDevices.pop(id);
      this.verifySubmitButton();
    },

    async submit() {
      this.displaybutton = false;
      this.loading = true;
      if (this.rightEmployees.length == 0) {
        this.response = this.response + " Atleast select one Employee Details";
      } else if (this.rightDevices.length == 0) {
        this.response = this.response + " Atleast select one Device Details";
      }

      this.loading_dialog = true;
      this.errors = [];

      let personListArray = [];

      this.rightEmployees.forEach((item) => {
        let person = {
          name: item.first_name + " " + item.last_name,

          userCode: parseInt(item.system_user_id),
          profile_picture_raw: item.profile_picture_raw,
          faceImage:
            process.env.APP_ENV != "local"
              ? item.profile_picture
              : "https://backend.mytime2cloud.com/media/employee/profile_picture/1706172456.jpg",
        };
        if (item.rfid_card_number != "") {
          person.cardData = item.rfid_card_number;
        }
        if (item.rfid_card_password != "") {
          person.password = item.rfid_card_password;
        }
        personListArray.push(person);
      });

      let payload = {
        personList: personListArray,
        snList: this.rightDevices.map((e) => e.device_id),
      };

      if (payload.snList && payload.snList.length === 0) {
        alert(`Atleast one device must be selected`);
        return false;
      }

      const { data } = await this.$axios.post(
        `/Person/AddRange/Photos`,
        payload
      );

      if (data.status == 200) {
        this.loading_dialog = false;

        this.snackbar.show = true;
        this.response = "Employee(s) Pictures has been uploaded";

        let jsrightEmployees = this.rightEmployees;
        jsrightEmployees.forEach((element) => {
          element["sdkEmpResponse"] = "Success";
        });
        this.rightDevices.forEach((elementDevice) => {
          elementDevice["sdkDeviceResponse"] = "Success";
          this.errors = [];
          this.loading = false;
        });
      } else {
        this.loading_dialog = false;
        this.snackbar.show = true;
        this.response = data.message;

        this.loading = false;
      }

      this.displaybutton = true;
    },
  },
};
</script>
