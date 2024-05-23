<template>
  <v-dialog persistent v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" v-bind="attrs" v-on="on">
        <v-icon color="error" small> mdi-delete </v-icon>
        Delete
      </span>
    </template>

    <v-card>
      <v-card-title>
        Delete Mapping <v-spacer></v-spacer>
        <v-icon color="primary" @click="dialog = false">mdi-close</v-icon>
      </v-card-title>
      <v-container fluid>
        <div style="width: 100% !important" v-if="can(`tanent_access`)">
          <v-card
            outlined
            class="mb-2"
            v-for="(mapping, index) in item.mappings"
            :key="index"
          >
            <v-container
              v-if="mapping.timezone && mapping.timezone.timezone_name"
            >
              <v-row class="mt-1">
                <v-col cols="10">
                  <v-text-field
                    v-model="mapping.timezone.timezone_name"
                    readonly
                    label="Timezone"
                    dense
                    class="text-center"
                    outlined
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col class="text-right">
                  <!-- <v-icon color="primary">mdi-floppy</v-icon> -->
                  <v-icon color="error" @click="deleteMapping(mapping.id)"
                    >mdi-delete</v-icon
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card>
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
      dialog: false,
    };
  },

  methods: {
    deleteMapping(id) {
      confirm(
        "Are you sure you wish to delete , to mitigate any inconvenience in future."
      ) &&
        this.$axios
          .delete(`tanent-timezone-mapping/${id}`)
          .then(() => {
            this.$emit("success", "Record deleted successfully");
          })
          .catch((err) => console.log(err));
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },
  },
};
</script>
