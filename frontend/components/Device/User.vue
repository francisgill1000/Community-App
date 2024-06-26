<template>
  <v-dialog v-model="dialog" max-width="1100">
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on">
        <v-icon :color="iconColor" :size="iconSize">mdi-cellphone-text</v-icon>
        {{ iconText }}
      </span>
    </template>
    <v-card>
      <v-toolbar dense flat color="primary" dark>
        <v-card-title>{{ label }}</v-card-title>
        <v-spacer></v-spacer>
        <v-icon :loading="loading" @click="getDataFromApi">mdi-sync</v-icon>
        <v-icon @click="dialog = false">mdi-close</v-icon>
      </v-toolbar>
      <v-card-text>
        <!-- <pre>{{ json }}</pre> -->
        <v-container>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">User Id</th>
                  <th class="text-center">Device Name</th>
                  <th class="text-center">Location</th>
                  <th class="text-center">Face</th>
                  <th class="text-center">RFID</th>
                  <th class="text-center">PIN</th>
                  <th class="text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="loading" class="pt-5">
                  <td colspan="5" class="text-center pa-5">
                    <div class="text-center">
                      <v-progress-circular
                        color="primary"
                        indeterminate
                      ></v-progress-circular>
                    </div>
                  </td>
                </tr>

                <tr v-for="(d, index) in data" :key="index">
                  <td class="text-center">{{ d.system_user_id }}</td>
                  <td class="text-center">{{ d.name }}</td>
                  <td class="text-center">{{ d.location }}</td>
                  <td class="text-center">
                    <v-icon color="green" v-if="d.IsFace">mdi-check</v-icon>
                    <v-icon color="" v-else>mdi-minus</v-icon>
                  </td>
                  <td class="text-center">
                    <v-icon color="green" v-if="d.IsRFID">mdi-check</v-icon>
                    <v-icon color="" v-else>mdi-minus</v-icon>
                  </td>
                  <td class="text-center">
                    <v-icon color="green" v-if="d.IsPIN">mdi-check</v-icon>
                    <v-icon color="" v-else>mdi-minus</v-icon>
                  </td>
                  <td class="text-center">
                    <v-icon
                      color="red"
                      @click="
                        deleteUserFromDevice(d.device_id, d.system_user_id)
                      "
                      >mdi-close</v-icon
                    >
                  </td>
                </tr>

                <tr v-if="!loading && !data.length" class="pt-5">
                  <td colspan="5" class="text-center">No Data available</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "Tenant",
    },
    iconText: {
      type: String,
      default: "Devices",
    },
    iconColor: {
      type: String,
      default: "secondary",
    },
    iconSize: {
      type: String,
      default: "small",
    },
    system_user_id: {
      required: true,
    },
  },

  data: () => ({
    options: {},
    endpoint: "device",
    dialog: false,
    devices: [],
    data: [],
    loading: false,
    total: 0,
    totalRowsCount: 0,
    headers: [
      {
        text: "Name",
        align: "left",
        sortable: false,
        value: "name",
        filterable: false,
      },
      {
        text: "Location",
        align: "left",
        sortable: false,
        value: "location",
        filterable: false,
      },
      {
        text: "Face",
        align: "left",
        sortable: false,
        value: "IsFace",
        filterable: false,
      },
      {
        text: "RFID",
        align: "left",
        sortable: false,
        value: "IsRFID",
        filterable: false,
      },
      {
        text: "PIN",
        align: "left",
        sortable: false,
        value: "IsPIN",
        filterable: false,
      },
      //   {
      //     text: "DateTime",
      //     align: "center",
      //     sortable: false,
      //     value: "uploaded_at",
      //     filterable: false,
      //     filterSpecial: false,
      //   },
    ],
    response: "",
    errors: [],
    json: {},
  }),

  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  async created() {
    this.loading = true;
    await this.getDataFromApi();
  },

  methods: {
    async getDataFromApi() {
      this.data = [];
      await this.$axios
        .get(`device-list`, {
          params: {
            company_id: this.$auth.user.company_id,
          },
        })
        .then(({ data }) => {
          this.loading = true;
          this.devices = data
            .filter((el) => el.status_id == 1)
            .forEach((e) => {
              this.$axios
                .get(
                  `/SDK/get-device-person-details/${e.device_id}/${this.system_user_id}`
                )
                .then(({ data: { data } }) => {
                  this.loading = false;
                  const { face, cardData, password } = data;

                  this.data.push({
                    device_id: e.device_id,
                    name: e.name,
                    location: e.location,
                    IsFace: Boolean(face),
                    IsRFID: cardData !== "" && cardData !== "0",
                    IsPIN: password !== "" && password !== "FFFFFFFF",
                    system_user_id: this.system_user_id,
                  });
                  this.json = data;
                });
            });
        });
    },

    deleteUserFromDevice(device_id, system_user_id) {
      this.$axios
        .delete(`/SDK/delete-device-person-details/${device_id}`, {params:{ userCodeArray: [system_user_id] }})
        .then(({ data }) => {
          this.loading = false;
          this.getDataFromApi();
        })
        .catch((e) => {
          alert("Record cannot delete");
          console.log(e);
          this.loading = false;
        });
    },
  },
};
</script>
