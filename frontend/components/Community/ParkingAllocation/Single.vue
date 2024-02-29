<template>
  <v-dialog persistent v-model="DialogBox" width="700">
    <template v-slot:activator="{ on, attrs }">
      <span style="cursor: pointer" text v-bind="attrs" v-on="on">
        <v-icon color="secondary" small> mdi-eye </v-icon>
        View
      </span>
    </template>
    <v-card>
      <v-toolbar class="popup_background" flat dense>
        Parking Allocation

        <v-spacer></v-spacer>
        <span>
          <v-icon class="ml-2" @click="DialogBox = false" dark>
            mdi mdi-close-circle-outline</v-icon
          >
        </span>
      </v-toolbar>
      <v-container>
        <table v-if="item && item.id">
          <tr>
            <td>Category</td>
            <td>{{ item.category }}</td>
          </tr>
          <tr>
            <td>Floor Number</td>
            <td>{{ item?.floor?.floor_number ?? "---" }}</td>
          </tr>
          <tr>
            <td>Room Number</td>
            <td>{{ item?.vehicle?.tanent?.room.room_number ?? "---" }}</td>
          </tr>
          <tr>
            <td>Parking Number</td>
            <td>{{ item?.parking_number ?? "---" }}</td>
          </tr>
          <tr>
            <td>Car Number</td>
            <td>{{ item?.vehicle?.car_number ?? "---" }}</td>
          </tr>
          <tr>
            <td>Car Brand</td>
            <td>{{ item?.vehicle?.car_brand ?? "---" }}</td>
          </tr>
          <tr>
            <td>Tanent</td>
            <td>{{ item?.vehicle?.tanent?.full_name ?? "---" }}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{{ item?.vehicle?.tanent?.phone_number ?? "---" }}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{ item?.vehicle?.tanent?.email ?? "---" }}</td>
          </tr>
          <tr>
            <td>Start Date</td>
            <td>{{ item?.vehicle?.tanent?.start_date ?? "---" }}</td>
          </tr>
          <tr>
            <td>Expire Date</td>
            <td>{{ item?.vehicle?.tanent?.end_date ?? "---" }}</td>
          </tr>
        </table>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["item"],
  data: () => ({
    DialogBox: false,
  }),
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
