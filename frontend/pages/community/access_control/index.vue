<template>
  <v-tabs color="deep-purple accent-4" right v-model="tab">
    <v-tab>Timezone</v-tab>
    <v-tab>Tenant Timezone Mapping</v-tab>
    <!-- <v-tab>Visitor Timezone Mapping</v-tab>
    <v-tab>Delivery Timezone Mapping</v-tab>
    <v-tab>Contractor Timezone Mapping</v-tab> -->

    <v-tab>Employee Timezone Mapping</v-tab>

    <v-tab-item>
      <Timezone :id="companyId" :key="generateRandomId()" />
    </v-tab-item>
    <v-tab-item>
      <TimezoneTanentMapping :id="companyId" :key="generateRandomId()" />
    </v-tab-item>
    <v-tab-item>
      <TimezoneEmployeeMapping :id="companyId" :key="generateRandomId()" />
    </v-tab-item>
  </v-tabs>
</template>
<script>
export default {
  data: () => ({
    tab: 0,
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
