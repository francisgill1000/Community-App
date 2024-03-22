<template>
  <div>
    <v-dialog persistent v-model="dialog" width="80%">
      <template v-slot:activator="{ on, attrs }">
        <span style="cursor: pointer" v-bind="attrs" v-on="on">
          <v-icon color="secondary" small> mdi-eye </v-icon>
          View
        </span>
      </template>
      <v-card>
        <v-card-title
          >View Timezone <v-spacer></v-spacer>
          <v-icon color="primary" @click="dialog = false"
            >mdi-close</v-icon
          ></v-card-title
        >
        <v-card-text>
          <v-row>
            <v-col cols="4">
              <v-text-field
                dense
                :label="`Timezone Name`"
                v-model="editedItem.timezone_name"
                :hide-details="!errors.timezone_name"
                :error-messages="
                  errors && errors.timezone_name && errors.timezone_name[0]
                "
                outlined
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                dense
                :label="`Description`"
                v-model="editedItem.description"
                :hide-details="!errors.description"
                :error-messages="
                  errors && errors.description && errors.description[0]
                "
                outlined
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <span
                class="error--text"
                v-if="errors && errors.timezone_id && errors.timezone_id[0]"
              >
                {{ errors.timezone_id[0] }}
              </span>
            </v-col>
          </v-row>

          <table style="width: 100%">
            <thead>
              <tr>
                <th></th>
                <th
                  v-for="(item, index) in customSlots"
                  :key="index"
                  class="settings-time"
                >
                  {{ item.time }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(day, dayIndex) in dayWiseSlots" :key="day.id">
                <td style="width: 5%">{{ day.shortName }}</td>
                <td
                  class="tdcell"
                  :class="slot.class"
                  v-for="slot in day.timeSlots"
                  :key="slot.id"
                  @click="
                    () => {
                      toggleChecked(day.id, slot.id), saveSlotTemp();
                    }
                  "
                ></td>
                <td @click="setHourRange(dayIndex)">
                  <img
                    title="Manual Input"
                    src="/../../icons/always_open.png"
                    style="width: 33px; pointer: cursor"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </v-card-text>
        <v-row no-gutters class="px-5 pb-2">
          <v-col class="text-right">
            <v-btn small color="primary" title="Add Timezone" @click="submit">
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <v-dialog persistent v-model="hourRangeDialog" width="500px">
      <v-card>
        <v-toolbar flat dense v-if="dayWiseSlots[dayIndex]">
          <div>
            Select the hour range for day ({{
              dayWiseSlots[dayIndex].shortName || ""
            }})
          </div>
          <v-spacer></v-spacer>
          <v-icon color="primary" @click="hourRangeDialog = false"
            >mdi-close</v-icon
          >
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col md="6">
                <v-select
                  hide-details
                  outlined
                  v-model="dialog_time_start[dayIndex]"
                  dense
                  :items="seasons"
                  item-text="time"
                  item-value="id"
                ></v-select>
              </v-col>
              <v-col md="6">
                <v-select
                  hide-details
                  outlined
                  v-model="dialog_time_end[dayIndex]"
                  dense
                  :items="seasons"
                  item-text="time"
                  item-value="id"
                ></v-select>
              </v-col>
              <v-col class="text-right">
                <v-btn
                  small
                  color="grey"
                  dark
                  title="Add Timezone"
                  @click="updateSlotsByDay(dayIndex, 1, 1)"
                >
                  Reset
                </v-btn>
                <v-btn
                  small
                  color="primary"
                  title="Add Timezone"
                  @click="
                    updateSlotsByDay(
                      dayIndex,
                      dialog_time_start[dayIndex],
                      dialog_time_end[dayIndex]
                    )
                  "
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
let customSlots = () => {
  return [
    {
      id: 1,
      time: "00:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 2,
      time: "00:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 3,
      time: "01:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 4,
      time: "01:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 5,
      time: "02:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 6,
      time: "02:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 7,
      time: "03:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 8,
      time: "03:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 9,
      time: "04:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 10,
      time: "04:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 11,
      time: "05:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 12,
      time: "05:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 13,
      time: "06:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 14,
      time: "06:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 15,
      time: "07:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 16,
      time: "07:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 17,
      time: "08:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 18,
      time: "08:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 19,
      time: "09:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 20,
      time: "09:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 21,
      time: "10:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 22,
      time: "10:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 23,
      time: "11:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 24,
      time: "11:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 25,
      time: "12:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 26,
      time: "12:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 27,
      time: "13:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 28,
      time: "13:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 29,
      time: "14:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 30,
      time: "14:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 31,
      time: "15:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 32,
      time: "15:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 33,
      time: "16:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 34,
      time: "16:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 35,
      time: "17:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 36,
      time: "17:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 37,
      time: "18:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 38,
      time: "18:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 39,
      time: "19:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 40,
      time: "19:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 41,
      time: "20:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 42,
      time: "20:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 43,
      time: "21:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 44,
      time: "21:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 45,
      time: "22:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 46,
      time: "22:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
    {
      id: 47,
      time: "23:00",
      checked: false,
      class: "un-selected",
      blockType: "odd",
    },
    {
      id: 48,
      time: "23:30",
      checked: false,
      class: "un-selected",
      blockType: "even",
    },
  ];
};
export default {
  props: ["item"],
  data() {
    return {
      dayIndex: "-1",
      endpoint: "timezone",
      errors: [],
      dialog: false,
      editedItem: {},
      dialog_time_start: {},
      dialog_time_end: {},
      customSlots: customSlots(),
      dayWiseSlots: [
        {
          id: 0,
          shortName: "Mon",
          timeSlots: customSlots(),
        },
        {
          id: 1,
          shortName: "Tue",
          timeSlots: customSlots(),
        },
        {
          id: 2,
          shortName: "Wed",
          timeSlots: customSlots(),
        },
        {
          id: 3,
          shortName: "Thu",
          timeSlots: customSlots(),
        },
        {
          id: 4,
          shortName: "Fri",
          timeSlots: customSlots(),
        },
        {
          id: 5,
          shortName: "Sat",
          timeSlots: customSlots(),
        },
        {
          id: 6,
          shortName: "Sun",
          timeSlots: customSlots(),
        },
      ],
      seasons: [
        { id: 1, time: "00:00" },
        { id: 3, time: "01:00" },
        { id: 5, time: "02:00" },
        { id: 7, time: "03:00" },
        { id: 9, time: "04:00" },
        { id: 11, time: "05:00" },
        { id: 13, time: "06:00" },
        { id: 15, time: "07:00" },
        { id: 17, time: "08:00" },
        { id: 19, time: "09:00" },
        { id: 21, time: "10:00" },
        { id: 23, time: "11:00" },
        { id: 25, time: "12:00" },
        { id: 27, time: "13:00" },
        { id: 29, time: "14:00" },
        { id: 31, time: "15:00" },
        { id: 33, time: "16:00" },
        { id: 35, time: "17:00" },
        { id: 37, time: "18:00" },
        { id: 39, time: "19:00" },
        { id: 41, time: "20:00" },
        { id: 43, time: "21:00" },
        { id: 45, time: "22:00" },
        { id: 47, time: "23:00" },
        { id: 49, time: "24:00" },
      ],

      bookedSlots: [],
      hourRangeDialog: false,
    };
  },
  async created() {
    this.setExistingSlots();
  },
  methods: {
    setExistingSlots() {
      let existingSlots = JSON.parse(this.item.json);
      existingSlots.forEach((existingDay) => {
        let slots = existingDay.timeSlots;

        

        if (slots.length > 2) {
          return;
        }

        this.updateSlotsByDay(existingDay.id, slots[0].id, slots[1].id + 1);

        // this.updateSlotsByDay(existingDay.id, slots[0].id, slots[1].id + 1);

        // console.log(slots);
        // for (let i = 0; i < slots.length - 1; i += 2) {
        //     console.log(existingDay.id, slots[i].id, slots[i + 1].id);
        // }
      });
    },
    setHourRange(dayIndex) {
      this.hourRangeDialog = true;
      this.dayIndex = dayIndex;

      this.dialog_time_start[dayIndex] = 1;
      this.dialog_time_end[dayIndex] = 1;
    },
    toggleChecked(dayId, slotId) {
      const day = this.dayWiseSlots.find((d) => d.id === dayId);
      if (day) {
        const slot = day.timeSlots.find((s) => s.id === slotId);
        if (slot) {
          slot.checked = !slot.checked;

          slot.class = slot.checked ? "tdcell selected" : "tdcell un-selected";
        }
      }
    },
    updateSlotsByDay(dayIndex, dialog_time_start, dialog_time_end) {
      let dayDisplayTable = this.dayWiseSlots.find((d) => d.id === dayIndex);
      let foundSlots = [];
      if (dayDisplayTable) {
        dayDisplayTable.timeSlots.forEach((slot) => {
          if (slot.id >= dialog_time_start && slot.id <= dialog_time_end - 1) {
            foundSlots.push(slot);
            slot.checked = true;
            slot.class = "tdcell selected";
          } else {
            slot.checked = false;
            slot.class = "tdcell un-selected";
          }
        });

        this.modifyJsonForSDK(foundSlots, dayIndex, dayDisplayTable);
      }
    },

    modifyJsonForSDK(foundSlots, dayIndex, dayDisplayTable) {
      if (!this.bookedSlots[dayIndex]) {
        this.bookedSlots.push({
          id: dayIndex,
          shortName: dayDisplayTable.shortName,
          timeSlots: [foundSlots[0], foundSlots[foundSlots.length - 1]],
        });
      } else {
        Object.assign(this.bookedSlots[dayIndex], {
          id: dayIndex,
          shortName: dayDisplayTable.shortName,
          timeSlots: [foundSlots[0], foundSlots[foundSlots.length - 1]],
        });
      }

      this.hourRangeDialog = false;
    },

    saveSlotTemp() {
      this.bookedSlots = this.dayWiseSlots
        .map((day) => ({
          ...day,
          timeSlots: day.timeSlots.filter((slot) => slot.checked),
        }))
        .filter((day) => day.timeSlots.length > 0);
    },
    submit() {
      this.editedItem = {
        timezone_id: this.editedItem.timezone_id,
        timezone_name: this.editedItem.timezone_name,
        description: this.editedItem.description,
        company_id: this.$auth.user.company_id,
        json: this.bookedSlots,
      };

      this.$axios
        .post(`/${this.endpoint}`, this.editedItem)
        .then(({ data }) => {
          if (!data.status) {
            this.errors = data.errors;
            return;
          }
          this.$emit("success", data.message);

          setTimeout(() => {
            this.dialog = false;
          }, 3000);
        })
        .catch((err) => {});
    },
  },
};
</script>
<style scoped>
@import url("@/assets/timezoneTableStyle.css");
</style>
