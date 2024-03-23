<template>
  <div>
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
      <v-col cols="3">
        <v-autocomplete
          @change="getRoomsByFloorId(floor_id)"
          label="Floor Number"
          outlined
          v-model="floor_id"
          :items="floors"
          dense
          item-text="floor_number"
          item-value="id"
          :hide-details="true"
        >
        </v-autocomplete>
      </v-col>
      <v-col cols="3">
        <v-autocomplete
          @change="getTanentsAndMembersByRoom(room_id)"
          label="Room"
          outlined
          v-model="room_id"
          :items="[{ id: ``, room_number: `Select All` }, ...rooms]"
          dense
          item-text="room_number"
          item-value="id"
          :hide-details="true"
        >
        </v-autocomplete>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="timezone_id"
          :items="timezones"
          dense
          outlined
          item-value="timezone_id"
          item-text="name"
          hide-details
          label="Timezones"
          required
        ></v-select>
      </v-col>
      <v-col cols="3" class="text-right">
        <div>
          <v-btn color="primary" @click="goback()"
            ><v-icon color="white">mdi-format-list-bulleted-square</v-icon> View
            List</v-btn
          >
        </div>
      </v-col>
      <!-- <div>
          <button @click="goback()" type="button" id="back" class="btn primary btn-block white--text v-size--default">
            <v-icon color="white">mdi mdi-format-list-bulleted-square</v-icon>
            View List
          </button>
        </div> -->
    </v-row>
    <v-row>
      <v-col cols="5">
        <v-card class="timezone-displaylist1" style="height: 300px">
          <v-toolbar dense flat style="border-bottom: 1px solid #ddd">
            <span> Tanents & Members </span>
          </v-toolbar>
          <div style="height: 245px; overflow-y: auto; overflow-x: hidden">
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
                  {{ user.full_name }} {{ user.isPrimaryUser }}
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
        <v-card class="timezone-displaylist1" style="height: 300px">
          <v-toolbar color=" " dense flat style="border-bottom: 1px solid #ddd">
            <span>Selected Tanents & Members List</span>
          </v-toolbar>
          <div style="max-height: 245px; overflow-y: auto; overflow-x: hidden">
            <v-card-text>
              <v-row
                class="timezone-displaylistview1"
                v-for="(user, index) in rightEmployees"
                :id="user.id"
                v-model="leftSelectedEmp"
                :key="user.id"
                style="border-bottom: 1px solid #ddd"
              >
                <v-col md="1" style="padding: 0px">
                  <v-checkbox
                    v-if="user.profile_picture"
                    dense
                    small
                    hideDetails
                    v-model="rightSelectedEmp"
                    :value="user.id"
                    primary
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    style="padding: 0px"
                    v-else
                    dense
                    small
                    hideDetails
                    v-model="rightSelectedEmp"
                    :value="user.id"
                    primary
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col md="1" style="padding: 0px">
                  <v-avatar>
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
                <v-col md="3" style="padding: 0px; padding-top: 5px">
                  {{ user.full_name }}
                </v-col>
              </v-row>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
        <v-card class="timezone-displaylist1" style="height: 305px">
          <v-toolbar color=" " dense flat style="border-bottom: 1px solid #ddd">
            <span> Devices </span>
          </v-toolbar>
          <div style="max-height: 260px; overflow-y: auto; overflow-x: hidden">
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
            @click="allmoveRightDevices"
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
            @click="allmoveLeftDevices"
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
        <v-card class="timezone-displaylist1" style="height: 305px">
          <v-toolbar color=" " dense flat style="border-bottom: 1px solid #ddd">
            <span>Selected Devices List</span>
          </v-toolbar>
          <div style="max-height: 260px; overflow-y: auto; overflow-x: hidden">
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
                    dense
                    small
                    hideDetails
                    v-model="rightSelectedDevices"
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
                    style="width: 30px" />
                  <img
                    title="Offline"
                    v-else
                    src="/icons/device_status_close.png"
                    style="width: 30px"
                /></v-col>
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
      <v-col cols="12">
        <span v-if="errors && errors.message" class="text-danger mt-2">{{
          errors.message
        }}</span>
      </v-col>
      <v-col cols="12" class="text-right">
        <v-btn
          :loading="loading"
          @click="onSubmit"
          type="button"
          class="primary"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      floor_id: [],
      floors: [],
      room_id: [],
      rooms: [],
      displaybutton: false,
      progressloading: false,
      searchInput: "",
      snackbar: {
        message: "",
        color: "black",
        show: true,
      },
      errors: [],
      response: "",
      color: "primary",
      loading: true,
      endpointEmployee: "get_employeeswith_timezonename",
      endpointUpdatetimezoneStore: "employee_timezone_mapping",
      //endpointUpdatetimezoneUpdate: "employee_timezone_mapping",
      endpointDevise: "device",
      leftSelectedEmp: [],
      department_id: ``,
      departments: [],
      leftEmployees: [],
      rightSelectedEmp: [],
      rightEmployees: [],
      leftSelectedDevices: [],
      leftDevices: [],
      rightSelectedDevices: [],
      rightDevices: [],
      department_ids: ["---"],
      timezones: [],
      timezone_id: null,
      options: {
        params: {
          company_id: this.$auth.user.company_id,
          cols: ["id", "name"],
        },
      },
      isCompany: true,
    };
  },
  mounted() {
    this.snackbar.show = true;
    this.snackbar.message = "Data loading...Please wait ";
    this.response = "Data loading...Please wait ";

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
    await this.getFloors();
    this.getTimezonesFromApi();
    this.getDevisesDataFromApi();
  },
  methods: {
    async getFloors() {
      let { data: floors } = await this.$axios.get(`floor`, {
        params: { company_id: this.$auth.user.company_id },
      });
      this.floors = floors.data;
    },
    async getRoomsByFloorId(floor_id) {
      let { data } = await this.$axios.get(`room-by-floor-id`, {
        params: {
          company_id: this.$auth.user.company_id,
          floor_id: floor_id,
        },
      });
      this.rooms = data;
    },
    async getTanentsAndMembersByRoom(room_id) {
      let { data } = await this.$axios.get(`tanents-and-members-by-room-id`, {
        params: {
          company_id: this.$auth.user.company_id,
          room_id: room_id,
          floor_id: this.floor_id,
        },
      });

      let result = [];
      data.forEach((e) => {
        result.push({
          id: e.id,
          full_name: e.full_name,
          system_user_id: parseInt(e.system_user_id),
          profile_picture: e.profile_picture,
          isPrimaryUser: "(Primary Member)",
          rfid: e.rfid,
        });

        e.members_only.forEach((member) => {
          result.push({
            id: e.id + member.id,
            full_name: member.full_name,
            system_user_id: member.system_user_id,
            profile_picture: member.profile_picture,
            rfid: member.rfid,
          });
        });

        e.maids.forEach((maid) => {
          result.push({
            id: e.id + maid.id,
            full_name: maid.full_name,
            system_user_id: maid.system_user_id,
            profile_picture: maid.profile_picture,
            rfid: maid.rfid,
          });
        });
      });

      this.leftEmployees = result;

      this.getDevisesDataFromApi();
    },

    getDevisesDataFromApi() {
      let options = {
        params: {
          company_id: this.$auth.user.company_id,
        },
      };
      this.$axios.get(`device_list`, options).then(({ data }) => {
        this.leftDevices = data;
      });
    },
    getEmployeesDataFromApi(url = this.endpointEmployee) {
      let options = {
        params: {
          per_page: 1000, //this.pagination.per_page,
          company_id: this.$auth.user.company_id,
          cols: [
            "id",
            "employee_id",
            "display_name",
            "first_name",
            "last_name",
          ],
        },
      };
      let page = 1;
      this.$axios.get(`${url}?page=${page}`, options).then(({ data }) => {
        this.leftEmployees = data.data;
      }, 1000);
    },
    getTimezonesFromApi() {
      let options = {
        params: {
          company_id: this.$auth.user.company_id,
        },
      };
      this.$axios
        .get("timezone-list", options)
        .then(({ data }) => (this.timezones = data))
        .catch((err) => console.log(err));
    },

    verifySubmitButton() {
      if (this.rightEmployees.length > 0 && this.rightDevices.length > 0) {
        this.displaybutton = true;
      } else {
        this.displaybutton = false;
      }
    },
    loadDepartmentemployees() {
      //this.loading = true;
      // let page = this.pagination.current;
      let url = this.endpointEmployee;

      let options = {
        params: {
          per_page: 1000, //this.pagination.per_page,
          company_id: this.$auth.user.company_id,
          department_id: this.department_id,
          cols: [
            "id",
            "employee_id",
            "display_name",
            "first_name",
            "last_name",
          ],
        },
      };
      let page = 1;

      this.$axios.get(`${url}?page=${page}`, options).then(({ data }) => {
        this.leftEmployees = [];
        this.leftEmployees = data.data;
        this.leftSelectedEmp = [];

        this.rightEmployees = [];
        this.rightSelectedEmp = [];
      });
    },
    resetErrorMessages() {
      this.errors = [];
      this.response = "";
      this.leftEmployees.forEach((e) => (e["sdkEmpResponse"] = ""));
      this.leftDevices.forEach((e) => (e["sdkDeviceResponse"] = ""));
    },
    onSubmit() {
      this.resetErrorMessages();
      this.displaybutton = false;
      if (this.timezone_id == "") {
        this.response = this.response + "Timezones not selected";
      } else if (this.rightEmployees.length == 0) {
        this.response = this.response + " Atleast select one Employee Details";
      } else if (this.rightDevices.length == 0) {
        this.response = this.response + " Atleast select one Device Details";
      }

      if (this.response != "") {
        this.snackbar.show = true;
        this.snackbar.message = this.response;
        this.snackbar.color = "red";
        setTimeout(() => {
          this.snackbar.show = false;
        }, 1000 * 10);
        return false;
      }
      this.loading = true;

      let keysToSelect = ["system_user_id"];

      // Select the specified keys from each object
      let filteredDataEmp = [];
      this.rightEmployees.map(function (obj) {
        let selectedObj = {};
        keysToSelect.forEach(function (key) {
          if (obj.hasOwnProperty(key)) {
            // selectedObj[key] = obj[key];
            selectedObj = obj[key];
            filteredDataEmp.push(selectedObj);
          }
        });
        return selectedObj;
      });
      //
      // Define the keys you want to select
      keysToSelect = ["device_id"];

      // Select the specified keys from each object
      let filteredDataDevices = [];
      this.rightDevices.map(function (obj) {
        let selectedObj = {};
        keysToSelect.forEach(function (key) {
          if (obj.hasOwnProperty(key)) {
            // selectedObj[key] = obj[key];
            selectedObj = obj[key];
            filteredDataDevices.push(selectedObj);
          }
        });
        return selectedObj;
      });
      let options = {
        timezone_id: this.timezone_id,
        employee_id: this.rightEmployees,
        device_id: this.rightDevices,
        company_id: this.$auth.user.company_id,
        employee_ids: filteredDataEmp,
        device_ids: filteredDataDevices,
      };

      this.progressloading = true;
      let jsrightEmployees = this.rightEmployees;

      let SDKSuccessStatus = true;
      this.$axios
        .post(`${this.endpointUpdatetimezoneStore}`, options)
        .then(({ data }) => {
          if (data.status) {
            // this.snackbar.show = true;
            // this.snackbar.message = "Employee(s) has been mapped";
            this.$router.push("/community/access_control/tenant-mapping");
          }
          if (data.record.SDKResponse) {
            this.loading = false;
            this.rightDevices.forEach((rightDevicesobj) => {
              let SdkResponseDeviceobject = data.record.SDKResponse.data.find(
                (e) => e.sn == rightDevicesobj.device_id
              );

              let deviceStatusResponse = "";
              let EmpStatusResponse = "";

              if (SdkResponseDeviceobject.message == "") {
                deviceStatusResponse = "Success";
              } else if (
                SdkResponseDeviceobject.message == "The device was not found"
              ) {
                deviceStatusResponse = "The device was not found or offline";
                SDKSuccessStatus = false;
              } else if (
                SdkResponseDeviceobject.message == "person info error"
              ) {
                let SDKUseridArray = SdkResponseDeviceobject.userList; //SDK error userslist
                jsrightEmployees.forEach((element) => {
                  element["sdkEmpResponse"] = "Success";
                  let systemUserid = element.system_user_id;
                  SDKSuccessStatus = false;
                  let selectedEmpobject = SDKUseridArray.find(
                    (e) => e.userCode == systemUserid
                  );
                  EmpStatusResponse = SdkResponseDeviceobject.sdkEmpResponse;
                  deviceStatusResponse = "";

                  if (EmpStatusResponse != "") {
                    //Adding extra parameters for Employee object
                    if (selectedEmpobject) {
                      element["sdkEmpResponse"] = "person photo error ";
                      // $.extend(element, {
                      //   sdkEmpResponse: "person info error ",
                      // });
                    } else {
                      // $.extend(element, {
                      //   sdkEmpResponse: " Success",
                      // });
                      element["sdkEmpResponse"] = "Success";
                    }
                  }
                });
              } else {
              }

              //Adding extra parameters for Devices object
              rightDevicesobj["sdkDeviceResponse"] =
                deviceStatusResponse != "" ? deviceStatusResponse : " Success";
              this.errors = [];
            });

            this.rightEmployees = jsrightEmployees;
            this.progressloading = false;

            this.loading = false;
            if (!SDKSuccessStatus) {
              {
                this.errors = data.errors;
              }
              this.errors = [];
              this.errors["message"] =
                "Device/Employee Error:   Device and Employee details are Mapped. You can add/remove items from Edit list ";

              //this.displaybutton = false;
            } else {
              this.$router.push("/timezonemapping/list");
            }
          } else {
            this.errors = [];
            this.progressloading = false;
            this.snackbar.show = true;
            this.errors["message"] =
              data.message +
              " But, Error:" +
              "Device Communication is not available";

            this.snackbar.message =
              data.message +
              "But,  Error:" +
              "Device Communication is not available";
            this.response =
              data.message +
              "But,  Error:" +
              "Device Communication is not available";
            return false;
            this.errors = [];
            this.progressloading = false;

            this.errors["message"] = "Device Communication is not available";

            this.snackbar.show = true;
            this.snackbar.message = "Device Communication is not available ";
            this.response = "Device Communication is not available ";
            return false;
          }

          this.displaybutton = true;
        });
    },
    goback() {
      this.$router.push("/community/access_control/tenant-mapping");
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
    sortObjectC: (o) =>
      o.sort(function compareByName(a, b) {
        if (a.name && b.name) {
          let nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
          let nameB = b.name.toUpperCase();

          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          } else {
            return 0;
          }
        }
      }),
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
        this.leftEmployees.filter(
          (el) =>
            el.timezone.timezone_name == "---" || el.timezone.timezone_id == 1
        )
      );

      this.leftEmployees = this.leftEmployees.filter(
        (el) =>
          el.timezone.timezone_name != "---" && el.timezone.timezone_id != 1
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

    moveToRightEmpOption2() {
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
    allmoveLeftDevices() {
      this.resetErrorMessages();
      this.leftDevices = this.leftDevices.concat(this.rightDevices);
      this.rightDevices = [];

      this.leftDevices = this.sortObjectD(this.leftDevices);
      this.verifySubmitButton();
    },
    allmoveRightDevices() {
      this.resetErrorMessages();
      //this.rightDevices = this.rightDevices.concat(this.leftDevices);
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
  },
};
</script>
