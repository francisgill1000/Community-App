<template>
  <v-text-field
    :placeholder="header.text"
    v-if="header.key == column || header.type == 'text'"
    clearable
    :hide-details="true"
    v-model="header.search_value"
    @input="handleChange"
    outlined
    dense
    autocomplete="off"
  ></v-text-field>
</template>

<script>
export default {
  props: ["header", "column"],
  date: () => ({
    text: "",
  }),
  methods: {
    handleChange() {
      this.$emit("entered-value", this.header);
    },
  },
};
</script>
