<template>
  <v-tabs v-if="tab !== null" color="deep-purple accent-4" right v-model="tab">
    <v-tab>Timezone</v-tab>
    <v-tab>Tenant Mapping</v-tab>
    <v-tab>Employee Mapping</v-tab>

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
    tab: null, // Initialize tab as null
    companyId: 0,
  }),
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // Update the tab value based on the route parameter
      vm.tab = parseInt(to.params.id) - 1 || 0;
    });
  },
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
