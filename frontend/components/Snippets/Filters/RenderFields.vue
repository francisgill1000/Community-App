<template>
  <tr>
    <td v-for="(header, index) in customHeaders" :key="index">
      <v-container v-if="header.filterable == true">
        <SnippetsFiltersTextField
          v-if="header.filterable == true && header.type == 'text'"
          :header="header"
          :column="header.value"
          @entered-value="handleFilter"
        />
        <SnippetsFiltersDropDown
          v-if="header.filterable == true && header.type == 'dropdown'"
          :header="header"
          :column="header.value"
          :items="header.items"
          @entered-value="handleFilter"
        />

        <div class="mt-3">
          <v-menu
            v-if="header.filterable == true && header.type == 'date_range'"
            v-model="header.date_menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="header.search_value"
                append-icon="mdi-calendar"
                outlined
                dense
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="header.search_value"
              @input="handleDatesFilter(header)"
              no-title
              scrollable
            ></v-date-picker>
          </v-menu>
        </div>
      </v-container>
    </td>
  </tr>
</template>
<script>
export default {
  props: ["headers", "fields"],
  data: () => ({
    customHeaders: [],
  }),
  methods: {
    handleFilter(e) {
      this.$emit("filtered", e);
    },
    handleDatesFilter(e) {
      e.date_menu = false;
      this.$emit("filtered", e);
    },
  },
  created() {
    this.customHeaders = this.headers.filter((header) =>
      this.fields.includes(header.key)
    );
  },
};
</script>
