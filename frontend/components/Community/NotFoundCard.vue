<template>
  <div class="text-center">
    <v-dialog persistent v-model="dialog" width="500">
      <v-row no-gutters>
        <v-col class="pt-2 text-center" cols="12">
          <v-avatar size="150">
            <v-img src="/fail.png"></v-img>
          </v-avatar>
        </v-col>
      </v-row>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: true,
  }),
  created() {
    setTimeout(() => {
      this.dialog = false;
      this.$emit("close");
    }, 3000);
  },
};
</script>
<style scoped>
.v-dialog.v-dialog--active {
  box-shadow: none !important;
}
</style>
