<template>
  <v-row>
    <v-col v-for="(item, index) in members" :key="index" cols="4">
      <v-card elevation="0" outlined>
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center">
              <v-avatar size="100" style="border: 1px solid #dddddd">
                <v-img v-if="item.profile_picture" :src="item.profile_picture"></v-img>
                <v-img v-else src="/no-profile-image.jpg"></v-img>
              </v-avatar>
              <div class="mt-1" style="font-size: 14px;height: 10px">{{ item.member_type }}</div>
            </v-col>
            <v-col cols="12">
              <v-row no-gutters>
                <v-col cols="6">
                  <small style="font-size: 11px">ID</small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small style="font-size: 11px"> {{ item.system_user_id }} </small>
                </v-col>
                <v-col cols="6">
                  <small style="font-size: 11px">Full Name</small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small style="font-size: 11px"> {{ item.full_name }} </small>
                </v-col>
                <v-col cols="6">
                  <small style="font-size: 11px">Phone Number</small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small style="font-size: 11px"> {{ item.phone_number }} </small>
                </v-col>
                <v-col cols="6">
                  <small style="font-size: 11px">Age</small>
                </v-col>
                <v-col cols="6" class="text-right">
                  <small style="font-size: 11px">
                    {{ item.age }} years old
                  </small>
                </v-col>
                <v-col cols="4">
                  <small style="font-size: 11px">Nationality</small>
                </v-col>
                <v-col cols="8" class="text-right">
                  <small style="font-size: 11px"> {{item.nationality}} </small>
                </v-col>
                <v-col cols="3">
                  <small style="font-size: 11px">Gender</small>
                </v-col>
                <v-col cols="9" class="text-right">
                  <small style="font-size: 11px"> {{item.gender}} </small>
                </v-col>
                <v-col cols="3">
                  <small style="font-size: 11px">RFID</small>
                </v-col>
                <v-col cols="9" class="text-right">
                  <small style="font-size: 11px"> {{item.rfid}} </small>
                </v-col>
                <v-col cols="3">
                  <small style="font-size: 11px">Pin</small>
                </v-col>
                <v-col cols="9" class="text-right">
                  <small style="font-size: 11px"> {{item.pin}} </small>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: ["members"],
};
</script>