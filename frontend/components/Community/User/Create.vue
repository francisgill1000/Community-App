<template>
  <v-dialog persistent v-model="DialogBox" width="500">
    <template v-if="buttonVisible" v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-btn dense small class="primary" text title="Create Tanent">
          Create User
          <v-icon right dark>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </span>
    </template>
    <v-card>
      <v-toolbar class="popup_background" flat dense>
        Create User
        <v-spacer></v-spacer>
        <span>
          <v-icon class="ml-2" @click="DialogBox = false" dark>
            mdi-close-circle-outline</v-icon
          >
        </span>
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="User"
              v-model="payload.name"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.name"
              :error="errors.name"
              :error-messages="errors && errors.name ? errors.name[0] : ''"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Email"
              v-model="payload.email"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.email"
              :error="errors.email"
              :error-messages="errors && errors.email ? errors.email[0] : ''"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Password"
              v-model="payload.password"
              dense
              class="text-center"
              outlined
              :hide-details="!errors.password"
              :error="errors.password"
              :error-messages="
                errors && errors.password ? errors.password[0] : ''
              "
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              label="Roles"
              outlined
              v-model="payload.role_id"
              :items="roles"
              item-value="id"
              item-text="name"
              dense
              :hide-details="!errors.role_id"
              :error-messages="
                errors && errors.role_id ? errors.role_id[0] : ''
              "
            >
            </v-autocomplete>
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
  props: ["buttonVisible"],
  data: () => ({
    endpoint: "community-admin",
    payload: {},
    errors: [],
    roles: [],
    loading: false,
    response: null,
    DialogBox: false,
  }),
  async created() {
    try {
      const { data } = await this.$axios.get("role-list", {
        params: { company_id: this.$auth.user.company_id },
      });
      this.roles = data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    submit() {
      this.payload.company_id = this.$auth.user.company_id;
      this.$axios
        .post(this.endpoint, this.payload)
        .then(({ data }) => {
          this.errors = [];
          this.$emit("success", "User inserted successfully");
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
