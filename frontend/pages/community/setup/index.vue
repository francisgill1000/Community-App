<template>
  <v-tabs color="deep-purple accent-4" right>
    <!-- <v-tab>Available Rooms</v-tab>
    <v-tab>Occupied Rooms</v-tab>
    <v-tab>Expiring Soon</v-tab> -->

    <v-tab>Floor</v-tab>
    <v-tab>Category</v-tab>
    <v-tab>Sub Category</v-tab>
    <v-tab>Room</v-tab>
    <v-tab>Parking</v-tab>
    <v-tab>Purpose</v-tab>
    <v-tab>Users</v-tab>
    <!-- <v-tab>Community</v-tab> -->

    <!-- <v-tab-item> <CommunityFilteredRooms report_type="Available" /></v-tab-item>
    <v-tab-item> <CommunityFilteredRooms report_type="Occupied" /> </v-tab-item>
    <v-tab-item> <CommunityFilteredRooms report_type="Expire" /> </v-tab-item> -->
    <v-tab-item> <CommunityFloor :id="companyId" /> </v-tab-item>
    <v-tab-item> <CommunityCategory :id="companyId" /> </v-tab-item>
    <v-tab-item>
      <CommunitySubCategory :key="generateRandomId()" :id="companyId" />
    </v-tab-item>
    <v-tab-item> <CommunityRoom :id="companyId" /> </v-tab-item>

    <v-tab-item> <CommunityParking /></v-tab-item>
    <v-tab-item> <CommunityPurpose :id="companyId" /> </v-tab-item>
    <v-tab-item> <CommunityUser :id="companyId" /> </v-tab-item>
    <!-- <v-tab-item> <CompanyProfile :id="companyId" /> </v-tab-item> -->
  </v-tabs>
</template>
<script>
export default {
  data: () => ({
    companyId: 0,
  }),
  created() {
    this.companyId = this.$auth.user.company_id;
  },
  methods: {
    generateRandomId() {
      const length = 8; // Adjust the length of the ID as needed
      const randomNumber = Math.floor(Math.random() * Math.pow(10, length)); // Generate a random number
      return randomNumber.toString().padStart(length, "0"); // Convert to string and pad with leading zeros if necessary
    },
  },
};
</script>
