<template>
  <v-dialog persistent v-model="DialogBox" width="700">
    <template v-if="buttonVisible" v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-btn dense small class="primary" text title="Create Tanent">
          Create {{ label }}
          <v-icon right dark>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </span>
    </template>
    <v-card>
      <v-toolbar class="popup_background" flat dense>
        Create {{ label }}
        <v-spacer></v-spacer>
        <span>
          <v-icon class="ml-2" @click="DialogBox = false" dark>
            mdi-close-circle-outline</v-icon
          >
        </span>
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Card Name"
              v-model="payload.name"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.name"
              :error="errors.name"
              :error-messages="errors && errors.name ? errors.name[0] : ''"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              append-icon="mdi-credit-card-scan-outline"
              label="Card Number"
              v-model="payload.number"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.number"
              :error="errors.number"
              :error-messages="errors && errors.number ? errors.number[0] : ''"
            ></v-text-field>
          </v-col>
          <!-- <v-col cols="4">
            <v-text-field
              label="Card Sytem Number"
              v-model="payload.system_number"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.system_number"
              :error="errors.system_number"
              :error-messages="
                errors && errors.system_number ? errors.system_number[0] : ''
              "
            ></v-text-field>
          </v-col> -->
          <v-col cols="6">
            <v-menu
              v-model="issue_date"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="payload.issue_date"
                  label="Issue Date"
                  append-icon="mdi-calendar"
                  outlined
                  dense
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :hide-details="!errors.issue_date"
                  :error-messages="
                    errors && errors.issue_date ? errors.issue_date[0] : ''
                  "
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="payload.issue_date"
                @input="issue_date = false"
                no-title
                scrollable
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="6">
            <v-menu
              v-model="expire_date"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="payload.expire_date"
                  label="Expire Date"
                  append-icon="mdi-calendar"
                  outlined
                  dense
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :hide-details="!errors.expire_date"
                  :error-messages="
                    errors && errors.expire_date ? errors.expire_date[0] : ''
                  "
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="payload.expire_date"
                @input="expire_date = false"
                no-title
                scrollable
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <div class="text-right">
          <v-btn small color="grey white--text" @click="DialogBox = false">
            Close
          </v-btn>

          <v-btn small :loading="loading" color="primary" @click="submit">
            Submit
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["label", "buttonVisible", "type"],
  data: () => ({
    endpoint: "card",
    payload: {
      system_number: 1111,
    },
    errors: [],
    loading: false,
    response: null,
    DialogBox: false,

    issue_date: false,
    expire_date: false,
  }),
  mounted() {
    this.payload.type = this.type;
  },
  methods: {
    submit() {
      this.payload.company_id = this.$auth.user.company_id;
      this.$axios
        .post(this.endpoint, this.payload)
        .then(({ data }) => {
          this.errors = [];
          this.$emit("success", this.label + " inserted successfully");
          this.DialogBox = false;
        })
        .catch(({ response }) => {
          if (!response) {
            return false;
          }
          let { status, data, statusText } = response;

          if (status && status == 422) {
            this.errors = data.errors;
            return;
          }

          this.response = statusText;
        });

      // }
    },
  },
};
</script>
