<template>
  <div>
    <v-dialog persistent v-model="deleteDialog" max-width="700">
      <v-card>
        <v-toolbar flat dense class="popup_background">
          <span class="popup_title">Card Delete From Device(s)</span>

          <v-spacer></v-spacer>

          <v-icon @click="deleteDialog = false" class="primary--text">
            mdi-close
          </v-icon>
        </v-toolbar>
        <v-card-text>
          <table style="width: 100%" class="mt-2">
            <thead>
              <tr class=" " dark>
                <th style="width: 30%">Device ID</th>
                <th style="width: 60%">Message</th>
                <th class="text-center">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(d, index) in deleteResponseList" :key="index">
                <td>{{ d.DeviceID }}</td>
                <td v-html="d.message"></td>
                <td class="text-center">
                  <v-icon color="green" v-if="d.status == 200"
                    >mdi-check</v-icon
                  >
                  <v-icon color="error" v-else>mdi-close</v-icon>
                </td>
              </tr>

              <tr v-if="deleteResponseList.length == 0">
                <td colspan="3" class="text-center">No Data available</td>
              </tr>
            </tbody>
          </table>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog persistent v-model="dialog" width="900">
      <template v-slot:activator="{ on, attrs }">
        <span style="cursor: pointer" v-bind="attrs" v-on="on">
          <v-icon color="secondary" small> mdi-pencil </v-icon>
          Edit
        </span>
      </template>
      <v-toolbar dense flat color="primary" dark>
        <v-card-title>Tenant</v-card-title>
        <v-spacer></v-spacer>
        <v-icon @click="dialog = false">mdi-close</v-icon>
      </v-toolbar>
      <v-tabs color="deep-purple accent-4" right>
        <v-tab>Basic Info</v-tab>
        <v-tab>Members</v-tab>
        <v-tab>Cards</v-tab>
        <v-tab>Vechicle</v-tab>

        <v-tab-item>
          <v-container>
            <v-row>
              <v-col cols="3">
                <v-row>
                  <v-col cols="12">
                    <div class="text-center">
                      <CameraORUpload
                        :PreviewImage="setImagePreview"
                        @imageSrc="handleAttachment"
                      />
                      <span
                        v-if="errors && errors.profile_picture"
                        class="error--text mt-2"
                        >{{ errors.profile_picture[0] }}</span
                      >
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="User Device Id"
                      v-model="payload.system_user_id"
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
                  <v-col cols="12">
                    <v-row no-gutters>
                      <v-col cols="10">
                        <v-text-field
                          label="RFID"
                          v-model="payload.rfid"
                          dense
                          class="text-center"
                          outlined
                          :hide-details="!errors.rfid"
                          :error-messages="
                            errors && errors.rfid ? errors.rfid[0] : ''
                          "
                        ></v-text-field>
                      </v-col>
                      <v-col v-if="devices.length" class="text-right">
                        <v-icon
                          class="mt-2"
                          :loading="deleteCardLoading"
                          color="secondary"
                          @click="deleteFromDevices"
                          >mdi-sync</v-icon
                        >
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="9">
                <v-row class="mt-4">
                  <v-col cols="6">
                    <v-text-field
                      label="First Name"
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
                      v-model="payload.term"
                      :items="[`Long Term`, `Short Term`]"
                      dense
                      :hide-details="!errors.term"
                      :error-messages="
                        errors && errors.term ? errors.term[0] : ''
                      "
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
                      @change="getRoomsByFloorId(payload.floor_id)"
                      label="Floor Number"
                      outlined
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
                      ></v-date-picker>
                    </v-menu>
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
                        errors && errors.phone_number
                          ? errors.phone_number[0]
                          : ''
                      "
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Whatsapp Number (optional)"
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
                      v-model="payload.nationality"
                      dense
                      class="text-center"
                      outlined
                      :hide-details="!errors.nationality"
                      :error-messages="
                        errors && errors.nationality
                          ? errors.nationality[0]
                          : ''
                      "
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      label="Address"
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
                            errors && errors.start_date
                              ? errors.start_date[0]
                              : ''
                          "
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="payload.start_date"
                        @input="menu = false"
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
                      ></v-date-picker>
                    </v-menu>
                  </v-col>

                  <v-col cols="12" v-if="payload.member_type == 'Owner'">
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
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <span v-bind="attrs" v-on="on">
                      <DeviceUser
                        iconText=""
                        iconSize=""
                        iconColor="primary"
                        :system_user_id="payload.system_user_id"
                      />
                    </span>
                  </template>
                  <span>Devices</span>
                </v-tooltip>
              </v-col>
              <v-col cols="6" class="text-right">
                <v-btn @click="dialog = false">Close</v-btn>
                <v-btn class="primary" @click="update_data">Update</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <v-tab-item>
          <v-container>
            <v-card
              outlined
              v-for="(member, index) in payload.members_only"
              :key="index"
              class="mb-2"
            >
              <v-container>
                <v-row>
                  <v-col cols="3">
                    <v-row>
                      <v-col cols="12">
                        <CameraORUpload
                          :PreviewImage="member.profile_picture"
                          @imageSrc="
                            (e) => {
                              member.profile_picture = e;
                              member.isImage = true;
                            }
                          "
                        />

                        <span
                          v-if="errors && errors.profile_picture"
                          class="text-danger mt-2"
                          >{{ errors.profile_picture[0] }}</span
                        >
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="9">
                    <v-row class="mt-1">
                      <v-col cols="6">
                        <v-text-field
                          readonly
                          label="Member Type"
                          v-model="member.member_type"
                          dense
                          class="text-center"
                          outlined
                          :hide-details="!errors.member_type"
                          :error-messages="
                            errors && errors.member_type
                              ? errors.member_type[0]
                              : ''
                          "
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          readonly
                          label="System User Id"
                          v-model="member.system_user_id"
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
                          v-model="member.first_name"
                          dense
                          class="text-center"
                          outlined
                          :hide-details="!errors.first_name"
                          :error-messages="
                            errors && errors.first_name
                              ? errors.first_name[0]
                              : ''
                          "
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          label="Last Name"
                          v-model="member.last_name"
                          dense
                          class="text-center"
                          outlined
                          :hide-details="!errors.last_name"
                          :error-messages="
                            errors && errors.last_name
                              ? errors.last_name[0]
                              : ''
                          "
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          label="Age"
                          v-model="member.age"
                          dense
                          class="text-center"
                          outlined
                          :hide-details="!errors.age"
                          :error-messages="
                            errors && errors.age ? errors.age[0] : ''
                          "
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          label="Phone Number"
                          v-model="member.phone_number"
                          dense
                          class="text-center"
                          outlined
                          :hide-details="!errors.phone_number"
                          :error-messages="
                            errors && errors.phone_number
                              ? errors.phone_number[0]
                              : ''
                          "
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          label="Nationality"
                          v-model="member.nationality"
                          dense
                          class="text-center"
                          outlined
                          :hide-details="!errors.nationality"
                          :error-messages="
                            errors && errors.nationality
                              ? errors.nationality[0]
                              : ''
                          "
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          label="RFID"
                          v-model="member.rfid"
                          dense
                          class="text-center"
                          outlined
                          :hide-details="!errors.rfid"
                          :error-messages="
                            errors && errors.rfid ? errors.rfid[0] : ''
                          "
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-radio-group
                          class="ma-0 mt-2 px-2 pa-0"
                          v-model="member.gender"
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

                      <v-col cols="6" class="text-right">
                        <DeviceUser
                          iconText=""
                          iconSize=""
                          iconColor="primary"
                          :system_user_id="member.system_user_id"
                        />
                        <v-icon @click="update_member(member)" color="primary"
                          >mdi-floppy</v-icon
                        >
                        <v-icon
                          @click="delete_member(index, member)"
                          color="error"
                          >mdi-delete</v-icon
                        >
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-container>
        </v-tab-item>

        <v-tab-item>
          <TanentCardEdit
            :item="payload"
            @close="(e) => (dialog = false)"
            @success="handleSuccessResponse"
          />
        </v-tab-item>

        <v-tab-item>
          <v-container>
            <!-- <v-alert
            v-if="!payload.vehicles.length"
            outlined
            color="primary"
            dense
            class="text-center"
          >
            No vehicle(s) info found found
          </v-alert> -->
            <v-row v-for="(vehicle, index) in payload.vehicles" :key="index">
              <v-col cols="3">
                <v-text-field
                  label="Car Number"
                  v-model="vehicle.car_number"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.car_number"
                  :error-messages="
                    errors && errors.car_number ? errors.car_number[0] : ''
                  "
                ></v-text-field>
              </v-col>

              <v-col cols="3">
                <v-text-field
                  label="Car Brand"
                  v-model="vehicle.car_brand"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.car_brand"
                  :error-messages="
                    errors && errors.car_brand ? errors.car_brand[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-autocomplete
                  label="Parking Number"
                  outlined
                  v-model="vehicle.parking_id"
                  :items="parkings"
                  dense
                  item-text="parking_number"
                  item-value="id"
                  :hide-details="!errors.parking_number"
                  :error-messages="
                    errors && errors.parking_number
                      ? errors.parking_number[0]
                      : ''
                  "
                >
                </v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9" class="text-right">
                <v-icon color="" @click="addVehicleInfo"
                  >mdi-plus-circle-outline</v-icon
                >
                <v-icon @click="delete_vehicle(index)" color=""
                  >mdi-delete</v-icon
                >
              </v-col>
              <v-col cols="12">
                <v-btn @click="add_vehicles" class="primary">Submit</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <!-- <v-tab-item>
        <v-container>
          <v-row>
            <v-col v-for="(document, index) in documents" :key="index" cols="6">
              <SnippetsUploadDocument
                :label="document.label"
                @uploaded="updatePayload(document.key, $event)"
              />
            </v-col>
            <v-col v-if="singleMessage">
              <span class="red--text">
                {{ singleMessage }}
              </span>
            </v-col>
            <v-col cols="12" class="text-right my-1">
              <v-btn @click="dialog = false">close</v-btn>
              <v-btn class="primary" @click="update_data">Update</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item> -->
      </v-tabs>
    </v-dialog>
  </div>
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
    deleteDialog: false,
    deleteResponseList: [],
    room_categories: [],
    room_sub_categories: [],
    filtered_room_sub_categories: [],
    disabled: false,
    parkings: [],
    payload: {
      term: "Long Term",
      gender: "Male",
      full_name: "",
      phone_number: "",
      floor_id: "",
      room_id: "",
      start_date: "",
      end_date: "",
      vehicles: [{ car_number: "", car_brand: "", parking_id: "" }],
    },
    documents: [
      { label: "Passport", key: "passport_doc" },
      { label: "ID", key: "id_doc" },
      { label: "Contract", key: "contract_doc" },
      { label: "Ejari", key: "ejari_doc" },
      { label: "License", key: "license_doc" },
      { label: "Other", key: "others_doc" },
    ],
    setImagePreview: null,
    tab: null,

    tabMenu: [],
    tab: "0",
    attrs: [],
    selectedFile: "",
    dialog: false,
    right: true,
    tab: null,
    color: "background",
    response: "",
    snackbar: false,
    btnLoader: false,

    upload: {
      name: "",
    },
    options: {},
    Model: "Tanent",
    endpoint: "tanent",
    search: "",
    snackbar: false,
    ids: [],
    loading: false,
    //total: 0,
    response: "",
    data: [],
    errors: [],
    singleMessage: null,
    member_types: [],

    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    menu2: false,
    menu3: false,

    floors: [],
    rooms: [],
    devices: [],
    deleteCardLoading: false,
    member: {
      full_name: null,
      phone_number: null,
      age: null,
      member_type: null,
      tanent_id: 0,
    },
  }),

  async created() {
    this.loading = false;
    this.boilerplate = true;
    this.editItem(this.item);
    await this.getFloors();

    this.$axios
      .get(`device`, {
        params: {
          per_page: 1000, //this.pagination.per_page,
          company_id: this.$auth.user.company_id,
          sortBy: "status_id",
        },
      })
      .then(({ data }) => {
        this.devices = data.data
          .filter((el) => el.status.name == "active")
          .map((e) => e.device_id);
      });
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
    await this.getMemberTypes();

    let { data } = await this.$axios.get(`parking-list`);
    this.parkings = data;

    await this.setRoomSubCategories(this.payload.room_category_id);
  },

  methods: {
    async deleteFromDevices() {
      this.deleteCardLoading = true;
      this.payload.rfid = null;

      this.deleteResponseList = [];

      this.devices.forEach(async (device_id) => {
        let deletePayload = {
          UserID: this.payload.system_user_id,
          DeviceID: device_id,
        };

        try {
          const { data: deletedCard } = await this.$axios.post(
            "delete-card",
            deletePayload
          );

          let payload = {
            personList: [
              {
                name: this.payload.first_name + " " + this.payload.last_name,
                userCode: this.payload.system_user_id,
                faceImage: this.setImagePreview,
              },
            ],
            snList: [device_id],
          };

          await this.$axios.post(`/Person/AddRange/Photos`, payload);

          this.deleteDialog = true;

          this.deleteResponseList.push({
            status: deletedCard.status,
            message: deletedCard.message,
            DeviceID: device_id,
          });
        } catch (error) {
          console.error("Error deleting record:", error);
        }
      });

      this.payload.isStaying = this.payload.isStaying ? 1 : 0;
      this.$axios
        .post(
          this.endpoint + "-update/" + this.payload.id,

          this.payload,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(({ data }) => {
          this.singleMessage = null;
          this.errors = [];
          this.deleteCardLoading = false;
        })
        .catch(({ response }) => {
          this.handleErrorResponse(response);
        });

      this.displaybutton = true;
    },
    generateRandomId() {
      const length = 8; // Adjust the length of the ID as needed
      const randomNumber = Math.floor(Math.random() * Math.pow(10, length)); // Generate a random number
      return randomNumber.toString().padStart(length, "0"); // Convert to string and pad with leading zeros if necessary
    },
    handleSuccessResponse(message) {
      this.$emit("success", message);
    },

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
    },
    updatePayload(key, document) {
      this.payload[key] = document;
    },
    handleAttachment(e) {
      console.log("🚀 ~ handleAttachment ~ e:", e);
      this.payload.profile_picture = e;
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
    async getMemberTypes() {
      let { data } = await this.$axios.get(`get_member_types`);
      this.member_types = data;
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
    can(per) {
      return this.$pagePermission.can(per, this);
    },
    addVehicleInfo() {
      this.payload.vehicles.push({
        car_number: "",
        car_brand: "",
        parking_id: "",
      });
    },
    editItem({
      profile_picture,
      passport_doc,
      id_doc,
      contract_doc,
      ejari_doc,
      license_doc,
      others_doc,
      floor,
      room,
      ...payload
    }) {
      this.setImagePreview = profile_picture;

      this.payload = payload;

      this.getRoomsByFloorId(payload.floor_id);
    },

    delete_vehicle(index) {
      this.payload.vehicles.splice(index, 1);
    },
    others_doc(e) {
      this.upload.name = e.target.files[0] || "";

      let input = this.$refs.otherDoc_input;
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
    add_vehicles() {
      let dataToInsert = [];

      this.payload.vehicles.forEach(({ car_number, car_brand, parking_id }) => {
        dataToInsert.push({
          tanent_id: this.payload.id,
          car_number: car_number,
          car_brand: car_brand,
          parking_id: parking_id,
        });
      });
      this.$axios
        .post(`store-multiple-vehicles/${this.payload.id}`, {
          vehicles: dataToInsert,
        })
        .then(({ data }) => {
          this.singleMessage = null;
          this.errors = [];
          this.$emit("success", "Vehicle has been added");
        })
        .catch(({ response }) => {
          this.handleErrorResponse(response);
        });
    },
    update_data() {
      this.payload.isStaying = this.payload.isStaying ? 1 : 0;
      this.$axios
        .post(
          this.endpoint + "-update/" + this.payload.id,

          this.payload,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(({ data }) => {
          this.singleMessage = null;
          this.errors = [];
          this.$emit("success", "Tanent has been updated");
        })
        .catch(({ response }) => {
          this.handleErrorResponse(response);
        });

      // }
    },

    update_member(member) {
      let newObj = {};

      if (!member.isImage) {
        newObj = { ...member, profile_picture: null };
      } else {
        newObj = member;
      }

      this.$axios
        .post("/update-member/" + member.id, newObj)
        .then(({ data }) => {
          this.singleMessage = null;
          this.errors = [];
          this.$emit("success", "Member has been updated");
        })
        .catch(({ response }) => {
          this.handleErrorResponse(response);
        });

      // }
    },
    delete_member(index, member) {
      confirm(
        "Are you sure you wish to delete , to mitigate any inconvenience in future."
      ) &&
        this.$axios
          .delete(`delete-member/${member.id}`)
          .then(({ data }) => {
            this.payload.members.splice(index, 1);
            this.$emit("success", "Record deleted successfully");
          })
          .catch((err) => console.log(err));
    },
    handleErrorResponse(response) {
      if (!response) {
        alert("An unexpected error occurred.");
        return;
      }
      let { status, data } = response;

      if (status && status == 422) {
        this.errors = data.errors;
        this.singleMessage = data.message;

        return;
      }

      alert("An unexpected error occurred.");
    },
  },
};
</script>
<style scoped>
@import url("@/assets/tableStyles.css");
</style>
