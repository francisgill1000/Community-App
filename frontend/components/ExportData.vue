<!-- ExportComponent.vue -->
<template>
   <span class="pa-2 text-center" @click="exportData">
      <!-- <v-icon
              title="Download"
              @click="export_submit"
              right
              dark
              color="black"
              size="x-large"
              >mdi-arrow-down-bold-circle</v-icon
            > -->
      <img
        title="Download"
        style="width: 20px; cursor: pointer"
        src="@/static/icons/icon_excel.png"
      />
      <div style="font-size: 8px; color: black; margin-top: -4px">Download</div>
    </span>
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
