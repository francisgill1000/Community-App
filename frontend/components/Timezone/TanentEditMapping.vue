<template>
  <v-dialog persistent v-model="dialog" width="1500">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-icon color="black" small>mdi-pencil</v-icon>
        Edit
      </span>
    </template>
    <v-card>
      <v-container>
        <div style="width: 100% !important" v-if="can(`tanent_access`)">
          <div class="text-center ma-2">
            <v-snackbar
              color="primary"
              v-model="snackbar.show"
              small
              top="top"
              :timeout="3000"
            >
              Users has been uploaded.
            </v-snackbar>
          </div>

          <v-row>
            <v-col cols="12" class="text-right">
              <v-icon color="primary" @click="dialog = false">mdi-close</v-icon>
            </v-col>
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
                label="Timezones"
                required
                :hide-details="!errors.timezone_id"
                :error-messages="
                  errors && errors.timezone_id ? errors.timezone_id[0] : ''
                "
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
              <v-card class="photo-displaylist" style="height: 300px">
                <v-toolbar color=" " dense flat style="border: 1px solid #ddd">
                  <span> Devices</span>
                </v-toolbar>
                <div
                  style="
                    max-height: 250px;
                    overflow-y: auto;
                    overflow-x: hidden;
                  "
                >
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
              <v-row no-gutters>
                <v-col cols="12">
                  <v-btn class="primary" block> Options </v-btn>
                </v-col>

                <v-col cols="12">
                  <v-btn
                    class="popup_background my-1"
                    block
                    @click="moveToRightDevicesOption2"
                  >
                    <v-icon> mdi-chevron-right </v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="12">
                  <v-btn
                    class="popup_background my-1"
                    block
                    @click="allmoveToRightDevices"
                  >
                    <v-icon> mdi-chevron-double-right </v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="12">
                  <v-btn
                    class="popup_background my-1"
                    block
                    @click="moveToLeftDevicesOption2"
                  >
                    <v-icon> mdi-chevron-left </v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="12">
                  <v-btn
                    class="popup_background my-1"
                    block
                    @click="allmoveToLeftDevices"
                  >
                    <v-icon> mdi-chevron-double-left </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="5">
              <v-card class="photo-displaylist" style="height: 300px">
                <v-toolbar color=" " dense flat style="border: 1px solid #ddd">
                  <span>Selected Devices</span>
                </v-toolbar>
                <div
                  style="
                    max-height: 250px;
                    overflow-y: auto;
                    overflow-x: hidden;
                  "
                >
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
                <span
                  v-if="errors && errors.message"
                  class="text-danger mt-2"
                  >{{ errors.message }}</span
                >
              </div>

              <v-btn
                :disabled="!displaybutton"
                :loading="loading"
                @click="processPayload"
                id="save"
                class="primary"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </div>
        <NoAccess v-else />
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {
      timezones: [],
      timezone_id: ``,
      floor_id: [],
      floors: [],
      room_id: [],
      rooms: [],
      isCompany: true,
      loading: false,
      counter: 0,
      devices_dialog: [],
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
      endpointDevise: "device",
      leftSelectedEmp: [],
      departmentselected: [],
      departments: [],
      leftTenants: [],
      rightSelectedEmp: [],
      rightTenants: [],
      leftSelectedDevices: [],
      leftDevices: [],
      rightSelectedDevices: [],
      rightDevices: [],
      department_ids: ["---"],
      timezones: ["Timeszones are not available"],
      timezonesselected: [],
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
    let item = this.item;
    this.floor_id = item.floor_id;
    this.room_id = item.room_id;
    this.timezone_id = item.timezone_id;
    await this.getFloors();
    await this.getTimezonesFromApi();
    this.getRoomsByFloorId(this.floor_id);
    this.getDevisesDataFromApi();
  },
  methods: {
    goback() {
      this.$router.push("/community/access_control/2");
    },
    async getTimezonesFromApi() {
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
          full_name: e.full_name + ` (${e?.room?.room_number || ""})`,
          system_user_id: parseInt(e.system_user_id),
          profile_picture: e.profile_picture,
          rfid: e.rfid,
        });

        e.members_only.forEach((member) => {
          result.push({
            id: e.id + member.id,
            full_name: member.full_name + ` (${e?.room?.room_number || ""})`,
            system_user_id: member.system_user_id,
            profile_picture: member.profile_picture,
            rfid: member.rfid,
          });
        });

        e.maids.forEach((maid) => {
          result.push({
            id: e.id + maid.id,
            full_name: maid.full_name + ` (${e?.room?.room_number || ""})`,
            system_user_id: maid.system_user_id,
            profile_picture: maid.profile_picture,
            rfid: maid.rfid,
          });
        });
      });

      this.leftTenants = result;

      this.getDevisesDataFromApi();
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },
    resetErrorMessages() {
      this.errors = [];
      this.response = "";

      this.leftTenants.forEach((element) => {
        element["sdkEmpResponse"] = "";
      });
      this.leftDevices.forEach((element) => {
        element["sdkDeviceResponse"] = "";
      });
    },
    getDevisesDataFromApi() {
      this.$axios
        .get(this.endpointDevise, {
          params: {
            per_page: 1000, //this.pagination.per_page,
            company_id: this.$auth.user.company_id,
            sortBy: "status_id",
            //cols: ["id", "location", "name", "device_id", "status:id"],
          },
        })
        .then(({ data }) => {
          this.leftDevices = data.data;
        });
    },
    sortObject: (o) =>
      o.sort(function compareByName(a, b) {
        if (a.full_name && b.full_name) {
          let nameA = a.full_name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
          let nameB = b.full_name.toUpperCase();

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
    verifySubmitButton() {

        // return this.rightDevices.length > 0;
      if (this.rightDevices.length > 0) {
        this.displaybutton = true;
      } else {
        this.displaybutton = false;
      }
    },
    allmoveToLeftemp() {
      this.resetErrorMessages();
      this.leftTenants = this.leftTenants.concat(this.rightTenants);
      this.rightTenants = [];
      this.leftTenants = this.sortObject(this.leftTenants);

      this.verifySubmitButton();
    },
    allmoveToRightEmp() {
      this.resetErrorMessages();
      // this.rightTenants = this.rightTenants.concat(this.leftTenants);
      // this.leftTenants = [];

      this.rightTenants = this.rightTenants.concat(
        this.leftTenants.filter((el) => el.profile_picture != null)
      );

      this.leftTenants = this.leftTenants.filter(
        (el) => el.profile_picture == null
      );

      this.rightTenants = this.sortObject(this.rightTenants);
      this.verifySubmitButton();
    },
    moveToLeftempOption2() {
      this.resetErrorMessages();

      if (!this.rightSelectedEmp.length) return;
      //for (let i = this.leftSelectedEmp.length; i > 0; i--) {
      let _rightSelectedEmp_length = this.rightSelectedEmp.length;
      for (let i = 0; i < _rightSelectedEmp_length; i++) {
        if (this.rightSelectedEmp) {
          let selectedindex = this.rightTenants.findIndex(
            (e) => e.id == this.rightSelectedEmp[i]
          );

          let selectedobject = this.rightTenants.find(
            (e) => e.id == this.rightSelectedEmp[i]
          );

          selectedobject.sdkEmpResponse = "";
          this.leftTenants.push(selectedobject);

          this.rightTenants.splice(selectedindex, 1);
        }
      }
      this.leftTenants = this.sortObject(this.leftTenants);
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
          let selectedindex = this.rightTenants.findIndex(
            (e) => e.id == this.rightSelectedEmp[i]
          );

          let selectedobject = this.rightTenants.find(
            (e) => e.id == this.rightSelectedEmp[i]
          );

          selectedobject.sdkEmpResponse = "";
          this.leftTenants.push(selectedobject);

          this.rightTenants.splice(selectedindex, 1);
        }
      }
      this.leftTenants = this.sortObject(this.leftTenants);

      this.rightSelectedEmp.pop(id);
      this.verifySubmitButton();
    },
    selectLeftTenant(id) {
      this.leftSelectedEmp.push(id);
    },
    moveToRightEmpOption2() {
      this.resetErrorMessages();
      if (!this.leftSelectedEmp.length) return;

      let _leftSelectedEmp_length = this.leftSelectedEmp.length;
      for (let i = 0; i < _leftSelectedEmp_length; i++) {
        if (this.leftSelectedEmp) {
          let selectedindex = this.leftTenants.findIndex(
            (e) => e.id == this.leftSelectedEmp[i]
          );

          let selectedobject = this.leftTenants.find(
            (e) => e.id == this.leftSelectedEmp[i]
          );

          this.rightTenants.push(selectedobject);

          this.leftTenants.splice(selectedindex, 1);
        }
      }
      this.rightTenants = this.sortObject(this.rightTenants);

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

    async processPayload() {
      let json = {
        company_id: this.$auth.user.company_id,
        floor_id: this.floor_id,
        room_id: this.room_id,
        timezone_id: this.timezone_id,
        device_ids: this.rightDevices.map((e) => e.device_id),
        tanents: this.rightTenants.map((e) => ({
          id: e.id,
          full_name: e.full_name,
          system_user_id: e.system_user_id,
        })),
      };

      if (this.rightTenants.length == 0) {
        this.response = this.response + " Atleast select one Tenant Details";
      } else if (this.rightDevices.length == 0) {
        this.response = this.response + " Atleast select one Device Details";
      }

      this.loading = true;
      this.loading_dialog = true;
      this.errors = [];

      try {
        await this.$axios.post(`/tanent-timezone-mapping`, json);
        await this.uploadToDevices();
      } catch ({ response }) {
        this.loading_dialog = false;
        this.loading = false;
        this.displaybutton = true;

        if (!response) return;

        let { status, statusText, data } = response;

        if (status == 422) {
          this.errors = data.errors;
          return;
        }

        console.log(statusText);
      }
    },
    async uploadToDevices() {
      let personList = this.rightTenants.map((e) => ({
        name: e.full_name,
        userCode: parseInt(e.system_user_id),
        faceImage: e.profile_picture,
        cardData: e.rfid,
        timeGroup: this.timezone_id,
      }));

      let snList = this.rightDevices.map((e) => e.device_id);

      let payload = {
        personList,
        snList,
      };

      if (payload.snList && payload.snList.length === 0) {
        alert(`Atleast one device must be selected`);
        return false;
      }

      this.devices_dialog.forEach((e) => {
        e.state = "---";
        e.message = "---";
      });

      await this.$axios.post(`/Person/AddRange/Photos`, payload);

      console.log(payload);

      try {
        this.snackbar.show = true;
        this.response = "Tanents(s) Pictures has been uploaded";
        this.loading_dialog = false;
        this.loading = false;
        this.displaybutton = true;
        this.errors = [];
        setTimeout(() => this.goback(), 3000);
      } catch (error) {
        this.loading_dialog = false;
        this.loading = false;
        this.displaybutton = true;
        this.errors = [];
      }
    },
  },
};
</script>
