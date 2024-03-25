<template>
  <v-icon title="Download" @click="exportData" right dark color="black"
    >mdi-folder-download</v-icon
  >
</template>

<script>
export default {
  props: ["data"],
  methods: {
    exportData() {
      if (this.data.length === 0) {
        this.snackbar = true;
        this.response = "No record to download";
        return;
      }

      let header = Object.keys(this.data[0]).join(",") + "\n";
      let rows = "";
      this.data.forEach((e) => {
        rows += Object.values(e).join(",").trim() + "\n";
      });

      let element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/csv;charset=utf-8, " + encodeURIComponent(header + rows)
      );
      element.setAttribute("download", "download.csv");
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },
  },
};
</script>
