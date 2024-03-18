<template>
  <div>
    <v-dialog persistent v-model="dialog" max-width="700">
      <v-card>
        <v-toolbar flat dense class="popup_background">
          <span class="popup_title">Card Delete From Device(s)</span>

          <v-spacer></v-spacer>
          <v-btn :loading="loading" small icon @click="render"
            ><v-icon>mdi-sync</v-icon></v-btn
          >

          <v-icon @click="dialog = false" class="primary--text">
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
              <tr v-for="(d, index) in data" :key="index">
                <td>{{ d.DeviceID }}</td>
                <td v-html="d.message"></td>
                <td class="text-center">
                  <v-icon color="green" v-if="d.status == 200"
                    >mdi-check</v-icon
                  >
                  <v-icon color="error" v-else>mdi-close</v-icon>
                </td>
              </tr>

              <tr v-if="data.length == 0">
                <td colspan="3" class="text-center">No Data available</td>
              </tr>
            </tbody>
          </table>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="text-right mb-5">
          <v-icon color="primary" @click="close"
            >mdi-close-circle-outline</v-icon
          >
        </v-col>
      </v-row>
      <TanentAddCardFromEdit
        @success="handleSuccessResponse"
        :item="{
          tanent_id: item.id,
          system_user_id:
            parseInt(item.system_user_id) +
            parseInt(item.members_count + parseInt(item.cards_count)) +
            1,
        }"
        v-if="!payload.cards.length"
      />
      <div v-else>
        <v-card
          outlined
          v-for="(member, index) in payload.cards"
          :key="index"
          class="mb-2"
        >
          <v-container>
            <v-row class="mt-1">
              <v-col cols="12">
                <v-text-field
                  disabled
                  label="User Device Id"
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
              <v-col cols="5">
                <v-text-field
                  label="Card Name"
                  v-model="member.full_name"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.full_name"
                  :error-messages="
                    errors && errors.full_name ? errors.full_name[0] : ''
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  append-icon="mdi-credit-card-scan-outline"
                  label="RFID"
                  v-model="member.rfid"
                  dense
                  class="text-center"
                  outlined
                  :hide-details="!errors.rfid"
                  :error-messages="errors && errors.rfid ? errors.rfid[0] : ''"
                ></v-text-field>
              </v-col>

              <v-col cols="2" class="">
                <v-icon @click="update_card(member)" color="primary"
                  >mdi-floppy</v-icon
                >
                <v-icon @click="delete_card(index, member)" color="error"
                  >mdi-delete</v-icon
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["item"],
  components: {},

  data: () => ({
    dialog: false,
    disabled: false,
    payload: {
      full_name: "",
    },

    color: "background",
    response: "",
    snackbar: false,
    loading: false,
    data: [],
    errors: [],
    singleMessage: null,
  }),

  async created() {
    this.payload = this.item;
  },

  methods: {
    generateRandomId() {
      const length = 8; // Adjust the length of the ID as needed
      const randomNumber = Math.floor(Math.random() * Math.pow(10, length)); // Generate a random number
      return randomNumber.toString().padStart(length, "0"); // Convert to string and pad with leading zeros if necessary
    },
    handleSuccessResponse(message) {
      this.$emit("success", message);
    },
    close() {
      this.$emit("close");
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },

    update_card(member) {
      this.loading = true;
      this.$axios
        .post("/update-card/" + member.id, member)
        .then(({ data }) => {
          this.singleMessage = null;
          this.errors = [];
          this.$emit("success", "Member has been updated");
          this.loading = false;
        })
        .catch(({ response }) => {
          this.handleErrorResponse(response);
        });

      // }
    },

    delete_card(index, member) {
      this.loading = true;

      confirm(
        "Are you sure you wish to delete , to mitigate any inconvenience in future."
      ) &&
        this.$axios
          .delete(`delete-member/${member.id}`)
          .then(({ data }) => {
            this.render(index, member);
          })
          .catch((err) => console.log(err));
    },
    render(index, member) {
      this.loading = true;
      this.dialog = true;
      this.data = [];

      this.$axios
        .get(`/device_list`, {
          params: {
            company_id: this.$auth.user.company_id,
          },
        })
        .then(({ data }) => {
          let devices = data;
          devices.forEach(async ({ device_id }) => {
            let payload = {
              UserID: member.system_user_id,
              DeviceID: device_id,
            };

            try {
              const { data } = await this.$axios.post("delete-card", payload);
              this.data.push({
                status: data.status,
                message: data.message,
                DeviceID: payload.DeviceID,
              });
            } catch (error) {
              console.error("Error deleting record:", error);
            }

            this.loading = false;

            this.payload.cards.splice(index, 1);

            // if (this.data.length == devices.length) {
            //   setTimeout(() => {
            //     this.$emit("success", "Record deleted successfully");
            //   }, 3000);
            // }
          });
        });
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
