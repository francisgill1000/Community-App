<template>
  <v-app>
    <v-navigation-drawer
      expand-on-hover
      rail
      v-model="drawer"
      dark
      :clipped="clipped"
      fixed
      app
      :color="sideBarcolor"
      :width="150"
    >
      <br />
      <v-list
        v-for="(i, idx) in items"
        :key="idx"
        style="padding: 5px 0 0 0px"
        :title="i.title"
      >
        <v-list-item
          :to="i.module != 'dashboard' ? i.to : ''"
          @click="getTopMenuItems(i)"
          router
          v-if="!i.hasChildren"
          :class="!miniVariant || 'pl-2'"
          vertical
          style="display: inline-block"
          :title="i.title"
        >
          <v-list-item-icon class="ma-2" :title="i.title">
            <v-img
              class="mx-auto"
              v-if="i.image"
              width="24px"
              height="24px"
              :src="i.image"
            ></v-img>
            <v-icon v-else>{{ i.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="text-center p-2">
            {{ i.title }}&nbsp;
          </v-list-item-title>
        </v-list-item>
        <v-list-item
          v-else
          :class="!miniVariant || 'pl-2'"
          @click="i.open_menu = !i.open_menu"
        >
          <v-list-item-icon class="mx-2">
            <v-icon>{{ i.icon }}</v-icon>
            <v-icon v-if="miniVariant" small
              >{{ !i.open_menu ? "mdi-chevron-down" : "mdi-chevron-up" }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-title>{{ i.title }} </v-list-item-title>
          <v-icon small
            >{{ !i.open_menu ? "mdi-chevron-down" : "mdi-chevron-up" }}
          </v-icon>
        </v-list-item>
        <div v-if="i.open_menu">
          <div v-for="(j, jdx) in i.hasChildren" :key="jdx">
            <v-tooltip
              style="margin-left: 25px"
              v-if="miniVariant"
              right
              color="primary"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-list-item
                  v-bind="attrs"
                  v-on="on"
                  style="min-height: 0"
                  :to="j.to"
                  class="submenutitle"
                >
                  <v-list-item-title class="my-2">
                    {{ j.title }}
                  </v-list-item-title>
                  <div>ddddd{{ j.image }}</div>

                  <v-list-item-icon
                    :style="miniVariant ? 'margin-left: -54px;' : ''"
                  >
                    <!-- <v-icon
                      v-else
                      :to="j.to"
                      :style="miniVariant ? 'margin-left: 12px;' : ''"
                    >
                      {{ j.icon }}
                    </v-icon> -->
                  </v-list-item-icon>
                </v-list-item>
              </template>
              <span>{{ j.title }}</span>
            </v-tooltip>

            <v-list-item
              v-else
              style="min-height: 0; margin-left: 50px"
              :to="j.to"
              class="submenutitle"
            >
              <v-list-item-title v-if="can(j.menu)" class="my-2">
                {{ j.title }}
              </v-list-item-title>
            </v-list-item>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :color="changeColor"
      dark
      :clipped-left="clipped"
      fixed
      app
      :style="$nuxt.$route.name == 'index' ? 'z-index: 100000' : ''"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <span
        class="text-overflow"
        style="cursor: pointer"
        @click="gotoHomePage()"
      >
        <img title="My Time Cloud " :src="logo_src" style="width: 150px" />
      </span>
      <v-spacer></v-spacer>

      <span style="100%">
        <template>
          <v-row align="center" justify="space-around" class="">
            <v-col v-for="(items, index) in company_top_menu" :key="index">
              <v-btn
                small
                text
                class="btn-text-size"
                :elevation="0"
                :color="
                  menuProperties[items.menu] &&
                  menuProperties[items.menu].selected
                "
                fill
                @click="setSubLeftMenuItems(items.menu, items.to)"
              >
                <span>{{ items.title }}</span>
              </v-btn>
            </v-col>

            <v-col>
              <div class="text-center">
                <v-dialog persistent v-model="isClicked" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="OpenDialogForRFID"
                      small
                      text
                      :class="setColorClass"
                      class="btn-text-size"
                      :elevation="0"
                      fill
                    >
                      <span>RFID</span>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-toolbar dense flat color="primary" dark>
                      <v-card-title style="color: white !important"
                        >Find User By Access Card</v-card-title
                      >
                      <v-spacer></v-spacer>
                      <v-icon
                        style="color: white !important"
                        @click="closeRFIDCard"
                        >mdi-close</v-icon
                      >
                    </v-toolbar>

                    <v-card-text class="mt-3">
                      <v-row no-gutters>
                        <v-col cols="8">
                          <v-text-field
                            v-model="RFID"
                            label="Access Card"
                            dense
                            class="text-center"
                            outlined
                            hide-details
                            append-icon="mdi-credit-card-scan-outline"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="1"></v-col>
                        <v-col cols="3">
                          <v-btn
                            :loading="userLoading"
                            color="primary"
                            @click="searchUserByRFID(RFID)"
                          >
                            <v-icon>mdi-magnify</v-icon> Search
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card-text>

                    <CommunityNotFoundCard
                      v-if="item && item.notFoundCard"
                      :key="generateRandomId()"
                      @close="closeRFIDCard"
                    />

                    <TanentRFIDCard
                      v-else-if="item && item.tanent"
                      :key="generateRandomId() + 1"
                      :item="item.tanent"
                      @close="closeRFIDCard"
                    />

                    <CommunityVisitorRFIDCard
                      :key="generateRandomId() + 2"
                      v-else-if="item && item.visitor"
                      :visitor_type="item.visitor.visitor_type"
                      :item="item.visitor"
                      :label="item.visitor.label"
                      @close="closeRFIDCard"
                    />

                    <EmployeeRFIDCard
                      v-else-if="item && item.employee"
                      :key="generateRandomId() + 3"
                      :employeeId="item.employee.id"
                      @close="closeRFIDCard"
                    />
                  </v-card>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
        </template>
      </span>

      <v-spacer></v-spacer>

      <v-menu
        nudge-bottom="50"
        transition="scale-transition"
        origin="center center"
        bottom
        left
        min-width="200"
        nudge-left="20"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="red" v-bind="attrs" v-on="on">
            <v-avatar size="35" style="border: 1px solid #6946dd">
              <v-img class="company_logo" :src="getLogo"></v-img>
            </v-avatar>
          </v-btn>
        </template>

        <v-list light nav dense>
          <v-list-item-group color="primary">
            <v-list-item
              v-if="this.$auth && this.$auth.user.user_type == 'company'"
              @click="goToCompany()"
            >
              <v-list-item-icon>
                <v-icon>mdi-account-multiple-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="black--text"
                  >Profile</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="black--text"
                  >Logout</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <!-- <v-btn icon plan @click="toggleTheme">
        <v-icon
          >mdi-{{
            $vuetify.theme.dark ? "white-balance-sunny" : "moon-waning-crescent"
          }}</v-icon
        >
      </v-btn> -->

      <v-btn icon plan @click="goToSettings()" class="mr-3"
        ><v-icon class="violet--text" style="text-align: center"
          >mdi-settings</v-icon
        ></v-btn
      >

      <v-menu
        bottom
        origin="center center"
        offset-y
        transition="scale-transition"
      >
        <!-- <template v-slot:activator="{ on, attrs }">
          <v-btn icon dark v-bind="attrs" v-on="on">
            <v-badge
              :color="pendingNotificationsCount > 0 ? 'red' : 'green'"
              :content="
                pendingNotificationsCount == ''
                  ? '0'
                  : pendingNotificationsCount
              "
              style="top: 10px; left: -19px"
            >
              <v-icon style="top: -10px; left: 10px" class="violet--text"
                >mdi mdi-bell-ring</v-icon
              >
            </v-badge>
          </v-btn>
        </template> -->
        <v-list>
          <v-list-item
            style="height: 30px"
            @click="goToPage(item.click)"
            v-for="(item, index) in notificationsMenuItems"
            :key="index"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="black--text">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-snackbar
        top="top"
        v-model="snackNotification"
        location="right"
        :timeout="5000"
        :color="snackNotificationColor"
      >
        {{ snackNotificationText }}

        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" text @click="snackNotification = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <v-dialog
        persistent
        v-model="alarmNotificationStatus"
        transition="dialog-top-transition"
        max-width="800"
      >
        <!-- <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on">From the top</v-btn>
        </template> -->
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="error"
              style="
                text-align: center;
                padding-left: 35%;
                color: #fff !important;
              "
              >Attention :Fire Alarm Notification
            </v-toolbar>
            <v-card-text>
              <v-row
                v-for="(device, index) in notificationAlarmDevices"
                :key="index"
              >
                <v-col cols="2"
                  ><img src="../static/fire2.png" width="50px"
                /></v-col>
                <v-col cols="10" class="pl-0">
                  <div class="pa-3" style="font-size: 20px; font-weight: bold">
                    Fire Alarm Triggered at :
                    {{ $dateFormat.format5(device.alarm_start_datetime) }}
                  </div>

                  <v-row>
                    <v-col cols="8"
                      ><div class="bold pa-1">
                        Device Name :{{ device.name }}
                      </div>
                      <!-- <div class="bold pa-1">
                    Branch Name :{{ device.branch.branch_name }}
                  </div> -->
                      <div class="bold pa-1">
                        Device Location :{{ device.location }}
                      </div></v-col
                    >
                    <v-col cols="4" class="text-center align-center"
                      ><v-icon
                        size="50"
                        class="alarm"
                        @click="UpdateAlarmStatus(device, 0)"
                        title="Click to Turn OFF Alarm "
                        >mdi mdi-alarm-light</v-icon
                      >
                      <v-btn
                        color="red"
                        fill
                        small
                        dark
                        @click="UpdateAlarmStatus(device, 0)"
                      >
                        Turn OFF Alarm
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

              <div></div>
              <div>
                <div style="color: green">
                  <strong>Note: </strong>All Doors are Opened
                </div>
                <br />
                Check Devices list and Turn off Alarm to Close this popup.

                <v-btn
                  color="error"
                  @click="
                    goToPage('/device');
                    alarmNotificationStatus = false;
                  "
                  >View Devices</v-btn
                >
              </div>
            </v-card-text>
            <!-- <v-card-actions class="justify-end">
              <v-btn text @click="alarmNotificationStatus = false">Close</v-btn>
            </v-card-actions> -->
          </v-card>
        </template>
      </v-dialog>
    </v-app-bar>

    <v-main
      class="main_bg"
      :style="miniVariant ? 'padding-left: 60px;' : 'padding-left: 140px;'"
    >
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      userLoading: false,
      RFID: 0,
      item: {
        tanent: null,
      },
      compName: null,
      isClicked: false,
      menuProperties: require("../menus/menuProperties.json"),
      company_menus: require("../menus/company.json"),
      company_top_menu: require("../menus/company_modules_top.json"),

      notificationsMenuItems: [
        {
          title: "Visitors Pending (0)",
          click: "/visitor/requests",
          icon: "mdi-transit-transfer",
          key: "visitors",
        },
      ],
      notificationAlarmDevices: {},

      topMenu_Selected: "dashboard",
      pendingNotificationsCount: 0,
      snackNotificationText: "",
      snackNotification: false,
      snackNotificationColor: "black",

      right: true,
      color: "",
      sideBarcolor: "background",
      year: new Date().getFullYear(),
      dropdown_menus: [{ title: "setting" }, { title: "logout" }],

      clipped: false,
      open_menu: [],
      drawer: true,
      fixed: false,
      logo_src: "",
      items: [],
      modules: {
        module_ids: [],
        module_names: [],
      },
      clipped: true,

      miniVariant: true,
      title: "MyHouse2Cloud",
      socket: null,
      logout_btn: {
        icon: "mdi-logout",
        label: "Logout",
      },
      inactivityTimeout: null,
      alarmNotificationStatus: false,
      audio: null,
    };
  },
  created() {
    this.getCompanyDetails();
    this.setSubLeftMenuItems("dashboard", "/dashboard", false);
    this.logo_src = require("@/static/logo22.png");
    this.pendingNotificationsCount = 0;
    this.loadNotificationMenu();

    this.updateTopmenu();
  },

  mounted() {
    //this.company_menus = [];
    setTimeout(() => {
      this.audio = new Audio(
        process.env.BACKEND_URL.replace("api", "") +
          "alarm_sounds/alarm-sound1.mp3"
      );
    }, 2000);
    setInterval(() => {
      if (this.$route.name != "login") {
        this.resetTimer();
        this.verifyAlarmStatus();
      }
    }, 1000 * 10 * 1);

    let menu_name = this.$route.name;
    let bgColor = "violet";
    let loadSelectedMenu = "";

    menu_name = menu_name.replaceAll("-", "/");

    //-------------------
    loadSelectedMenu = this.company_menus.filter(
      (item) => item.to === "/" + menu_name && item.submenu == null
    );

    if (loadSelectedMenu[0]) {
      menu_name = loadSelectedMenu[0].module;

      if (this.menuProperties.hasOwnProperty(menu_name)) {
        for (const key in this.menuProperties) {
          this.menuProperties[key].elevation = 0;
          this.menuProperties[key].selected = "";
        }

        this.menuProperties[menu_name].elevation = 0;
        this.menuProperties[menu_name].selected = bgColor;
      }
      //Color is changed and Now display sub menu - click - load left sub menu items

      this.items = this.company_menus.filter(
        (item) => item.module === loadSelectedMenu[0].module
      );
    }
  },
  watch: {},
  computed: {
    changeColor() {
      return "#ecf0f4"; //this.$store.state.color;
    },

    setColorClass() {
      return this.isClicked ? "violet--text" : "";
    },

    getLogo() {
      let logosrc = "/no-image.PNG";

      if (this.$auth.user && this.$auth.user.company.logo) {
        logosrc = this.$auth.user.company.logo ?? "/no-image.PNG";
      }

      return logosrc;
    },
  },
  methods: {
    palysound() {
      this.playAudioOnUserInteraction();
    },
    playAudioOnUserInteraction() {
      if (!this.audio) {
        this.audio = new Audio(
          process.env.BACKEND_URL.replace("api", "") +
            "alarm_sounds/alarm-sound1.mp3"
        );
      }
      this.audio.play();
    },
    stopsound() {
      if (!this.audio) {
        this.audio = new Audio(
          process.env.BACKEND_URL.replace("api", "") +
            "alarm_sounds/alarm-sound1.mp3"
        );
      }
      this.audio.pause();
    },
    UpdateAlarmStatus(item, status) {
      if (status == 0) {
        if (confirm("Are you sure you want to TURN OFF the Alarm")) {
          let options = {
            params: {
              company_id: this.$auth.user.company_id,
              serial_number: item.serial_number,
              status: status,
            },
          };
          this.loading = true;
          this.$axios
            .post(`/update-device-alarm-status`, options.params)
            .then(({ data }) => {
              if (!data.status) {
                if (data.message == "undefined") {
                  this.response = "Try again. No connection available";
                } else this.response = "Try again. " + data.message;
                this.snackbar = true;

                return;
              } else {
                setTimeout(() => {
                  this.loading = false;
                  this.response = data.message;
                  this.snackbar = true;
                }, 2000);

                return;
              }
            })
            .catch((e) => console.log(e));
        }
      }
    },
    closeRFIDCard() {
      this.isClicked = false;
      this.item = { tanent: null };
    },
    searchUserByRFID(RFID) {
      this.userLoading = true;
      this.$axios
        .get(`search-user-by-rfid/${RFID}`)
        .then(({ data }) => {
          this.userLoading = false;

          if (!this.userLoading) {
            this.item = data;
            this.isClicked = false;
          }
        })
        .catch((e) => {
          this.userLoading = false;
        });
    },
    generateRandomId() {
      return `id-${Math.random().toString(36).substr(2, 9)}`;
    },
    OpenDialogForRFID() {
      this.setSubLeftMenuItems("dashboard", "/dashboard", false);
      this.isClicked = true;
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;

      if (!this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.light = {
          primary: "#6946dd", //violoet
          accent: "#d8363a",
          secondary: "#242424",
          background: "#34444c",
          main_bg: "#ECF0F4",
          violet: "#6946dd",
          popup_background: "#ecf0f4",
        };
      }
    },
    verifyAlarmStatus() {
      //if (this.apiCalNotificationInitiated == false)
      {
        this.apiCalNotificationInitiated = true;
        let company_id = this.$auth.user?.company?.id || 0;
        if (company_id == 0) {
          return false;
        }
        let options = {
          params: {
            company_id: company_id,
          },
        };
        //this.pendingNotificationsCount = 0;
        let pendingcount = 0;
        this.$axios.get(`get_notifications_alarm`, options).then(({ data }) => {
          this.apiCalNotificationInitiated = false;
          if (data.length > 0) {
            this.notificationAlarmDevices = data;
            this.palysound();
            this.alarmNotificationStatus = true;
          } else {
            this.alarmNotificationStatus = false;
            this.stopsound();
          }
        });
      }
    },
    updateTopmenu() {
      let { permissions, is_master } = this.$auth.user;

      if (is_master) return;

      let menus = this.company_top_menu;

      this.company_top_menu = menus.filter((e) =>
        permissions.includes(e.permission)
      );
    },
    handleActivity() {
      this.resetTimer();
    },
    resetTimer() {
      // Time in milliseconds after which the user is considered inactive
      const INACTIVITY_TIME = 1000 * 60 * 30; // 5 minutes
      clearTimeout(this.inactivityTimeout);
      this.inactivityTimeout = setTimeout(
        this.handleInactivity,
        INACTIVITY_TIME
      );
    },
    setupInactivityDetection() {
      // Handle inactivity
      this.handleInactivity = () => {
        // Perform actions when the user is inactive
        this.$router.push(`/dashboard`);
        // For example, you could redirect the user, show a message, etc.
      };

      // Attach event listeners
      window.addEventListener("mousemove", this.handleActivity);
      window.addEventListener("mousedown", this.handleActivity);
      window.addEventListener("keypress", this.handleActivity);
      window.addEventListener("touchmove", this.handleActivity);

      // Initialize the timer
      this.resetTimer();
    },
    gotoHomePage() {
      //location.href = process.env.APP_URL + "/dashboard2";
      location.href = location.href; // process.env.APP_URL + "/dashboard2";
    },
    loadNotificationMenu() {
      let company_id = this.$auth.user?.company?.id || 0;
      //console.log("company_id", company_id);
      if (company_id == 0) {
        return false;
      }
      let options = {
        params: {
          company_id: company_id,
        },
      };
      //this.pendingNotificationsCount = 0;
      let pendingcount = 0;
      this.$axios.get(`get-notifications-count`, options).then(({ data }) => {
        this.notificationsMenuItems = [
          {
            title: "Visitors Pending (0)",
            click: "/visitor/requests",
            icon: "mdi-transit-transfer",
            key: "visitors",
          },
        ];
        pendingcount = 0;

        if (data.employee_leaves_pending_count) {
          pendingcount += data.employee_leaves_pending_count;
          let leaves = this.notificationsMenuItems.find(
            (e) => e.key == "leaves"
          );
          leaves.title =
            "Leaves Pending (" + data.employee_leaves_pending_count + ")";
        }
        if (data.visitor_request_pending_count) {
          pendingcount += data.visitor_request_pending_count;
          let leaves = this.notificationsMenuItems.find(
            (e) => e.key == "visitors"
          );
          leaves.title =
            "Visitors Pending (" + data.visitor_request_pending_count + ")";
        }

        this.pendingNotificationsCount = pendingcount;
      });
    },
    getTopMenuItems(i) {
      if (i.module == "dashboard") {
        this.setSubLeftMenuItems(i.submenu, i.to);
      }
    },
    goToPage(page) {
      this.$router.push(page);
    },
    goToSettings() {
      this.setSubLeftMenuItems("settings", "/community/contractors");
    },
    setSubLeftMenuItems(menu_name, page, redirect = true) {
      this.topMenu_Selected = menu_name;
      this.isClicked = false;
      let bgColor = "violet";
      this.setMenus();

      // Check if menu_name exists in menuProperties
      if (this.menuProperties.hasOwnProperty(menu_name)) {
        for (const key in this.menuProperties) {
          this.menuProperties[key].elevation = 0;
          this.menuProperties[key].selected = "";
        }

        this.menuProperties[menu_name].elevation = 0;
        this.menuProperties[menu_name].selected = bgColor;
      }
      if (redirect) this.$router.push(page);
    },

    setMenus() {
      this.items = this.company_menus.filter(
        (item) => item.module === this.topMenu_Selected
      );
    },
    collapseSubItems() {
      this.company_menus.map((item) => (item.active = false));
    },
    changeTopBarColor(color) {
      this.color = color;
      this.$store.commit("change_color", color);
    },

    caps(str) {
      return str.replace(/\b\w/g, (c) => c.toUpperCase());
    },
    goToCompany() {
      this.$router.push(`/companies/${this.$auth.user?.company_id}`);
    },
    getCompanyDetails() {
      this.$axios
        .get(`company/${this.$auth.user?.company_id}`)
        .then(({ data }) => {
          let { modules } = data.record;

          if (modules !== null) {
            this.modules = {
              module_ids: modules.module_ids || [],
              module_names: modules.module_names.map((e) => ({
                icon: "mdi-chart-bubble",
                title: this.caps(e),
                to: "/" + e + "_modules",
                permission: true,
              })),
            };
          }
        });
    },
    can(per) {
      return this.$pagePermission.can(per, this);
    },

    logout() {
      this.$axios.get(`/logout`).then(({ res }) => {
        this.$auth.logout();
      });
    },
  },
  beforeDestroy() {
    // Cleanup: Remove event listeners
    window.removeEventListener("mousemove", this.handleActivity);
    window.removeEventListener("mousedown", this.handleActivity);
    window.removeEventListener("keypress", this.handleActivity);
    window.removeEventListener("touchmove", this.handleActivity);
    clearTimeout(this.inactivityTimeout);
  },
};
</script>
<style scoped>
.btn-text-size {
  font-size: 15px !important;
}
.leftMenuWidth {
  width: 140px !important;
}
.main_bg {
  padding-left: 140px;
}
.v-list-item {
  text-align: center;
  width: 100%;
}
</style>
<!-- Extra overriting classes-->
<style scoped>
.violet {
  background-color: #6946dd;
}
.bold {
  color: bold;
}
.text--violet {
  color: #6946dd;
}
.v-list-item--active i {
  color: #6946dd;
}

.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #9aa9b9;
}
.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled)
  i {
  color: #9aa9b9;
}

header,
header button,
header a,
header i {
  color: black !important;
}

.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active) {
  color: black !important;
}
.theme--dark.v-bottom-navigation .v-btn--active {
  background: rgb(105, 70, 221);
  color: #fff !important;
}
</style>

<style>
.violet {
  background-color: #6946dd;
}
.bold {
  font-weight: bold;
}
.text--violet {
  color: #6946dd;
}
.view-profile-table-lineheight {
  line-height: 40px;
  width: 100%;
}
.view-profile-table-lineheight tr {
  border-bottom: 1px solid #ddd;
}
.view-profile-table-lineheight td {
  padding-right: 5px;
  padding-left: 5px;
}

.whitebackground--text {
  background-color: #ecf0f4;
}
/* New Theme  popup_background*/
.v-application .popup_background {
  background-color: #ecf0f4 !important;
}
.popup_background {
  background-color: #ecf0f4 !important;
  color: black !important;
  font-weight: 400 !important;

  font-size: 1.25rem !important;
}
.popup_title,
.v-dialog > .v-card > .v-card__title {
  color: black !important;
  font-weight: 400 !important;

  font-size: 1.25rem !important;
}
.popup_background i {
  color: black !important;
}
.popup_background button {
  color: black !important;
}

.popup_background .v-tabs-bar {
  background-color: #ecf0f4 !important;
  color: black;
  font-weight: 400;

  font-size: 1.25rem;
}
.popup_background .v-tabs-bar i {
  color: black !important;
}
.popup_background .v-toolbar__title {
  color: black !important;
}
.popup_background .v-icon {
  color: black !important;
}

/* .theme--dark.v-toolbar.v-sheet {
  background-color: #cfd8dc !important;
} */
/* .v-card {
  background-color: #cfd8dc;
}
.v-card header {
  background-color: #cfd8dc;
}
.v-card .v-card__title {
  color: black;
}
.v-card i {
  color: black;
}

.v-card .v-toolbar__title {
  color: black;
} */

.input-small-fieldset fieldset {
  height: 30px;
}
.input-small-fieldset input {
  margin-top: -15px;
}
.input-small-fieldset .v-input__append-inner {
  margin-top: -2px;
}
.black--text {
  color: black;
}
.black {
  color: black;
}

.iconsize {
  width: 20px;
}

.secondary-value {
  font-size: 10px;
}

.form-control:focus {
  box-shadow: none !important;

  /* height: 32px !important; */
}

.iconsize30 {
  width: 30px;
  height: auto;
}

.basic-table-design {
  tr {
    width: 100%;
    border-bottom: 1px solid #ddd;
  }
}
/* .v-application .primary--text {
  color: #6946dd !important;
  caret-color: #6946dd !important;
} */

.slidegroup1 .v-slide-group {
  height: 34px !important;
}
</style>

<style>
/*! CSS Used from: https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.css */
*,
:after,
:before {
  box-sizing: border-box;
}
button {
  border-radius: 0;
}
button:focus:not(:focus-visible) {
  outline: 0;
}
button {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button {
  text-transform: none;
}
[type="button"],
button {
  -webkit-appearance: button;
}
[type="button"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}
.btn {
  display: inline-block;
  color: #4f4f4f;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 0.125rem solid transparent;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #4f4f4f;
}
.btn:disabled {
  pointer-events: none;
  opacity: 0.65;
}
button:focus {
  outline: 0;
}
.btn {
  text-transform: uppercase;
  vertical-align: bottom;
  border: 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  font-weight: 500;
  padding: 0.625rem 1.5rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1.5;
}
.btn:active,
.btn:active:focus,
.btn:focus,
.btn:hover {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.1);
}
.btn:disabled {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
}
.btn:focus {
  outline: 0;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.1);
}
.btn-block {
  display: block;
  width: 100%;
}
.btn-block + .btn-block {
  margin-top: 0.5rem;
}
/*! CSS Used from: https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.4.95/css/materialdesignicons.min.css */
.mdi:before {
  display: inline-block;
  font: normal normal normal 24px/1 "Material Design Icons";
  font-size: inherit;
  text-rendering: auto;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mdi-chevron-right::before {
  content: "\F142";
}
/*! CSS Used from: https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css */
.mdi:before {
  display: inline-block;
  font: normal normal normal 24px/1 "Material Design Icons";
  font-size: inherit;
  text-rendering: auto;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mdi-chevron-right::before {
  content: "\F0142";
}
/*! CSS Used from: Embedded */
*,
:after,
:before {
  background-repeat: no-repeat;
  box-sizing: inherit;
}
:after,
:before {
  text-decoration: inherit;
  vertical-align: inherit;
}
* {
  margin: 0;
  padding: 0;
}
button {
  font: inherit;
}
button {
  overflow: visible;
}
button {
  text-transform: none;
}
[type="button"],
button {
  color: inherit;
  cursor: pointer;
}
button,
html [type="button"] {
  -webkit-appearance: button;
}
button {
  background-color: transparent;
  border-style: none;
}
.v-icon.v-icon {
  font-feature-settings: "liga";
  align-items: center;
  display: inline-flex;
  font-size: 24px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  vertical-align: middle;
}
.v-icon.v-icon:after {
  background-color: currentColor;
  border-radius: 50%;
  content: "";
  display: inline-block;
  height: 100%;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transform: scale(1.3);
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  width: 100%;
}

.apexcharts-menu-icon {
  padding-top: 10px;
}
</style>
<style>
.v-application .error--text {
  color: red;
}
.error--text,
.text-danger {
  font-size: 13px;
  color: red !important;
}
.v-messages {
  min-height: 0px !important;
}

.text-break-dot {
  text-overflow: ellipsis;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  height: 25px;
}
.breakthewords {
  display: -webkit-box;
  font-size: 12px !important;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.branchlogo {
  width: 50px;
}

.table_active {
  background: #e1e1e1;
  border-left: 1px solid green;
  font-weight: bold;
}
.annnouncment_table .text-left {
  padding: 0px !important;
}
.announ_priority {
  color: rgb(63, 81, 181);
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 19px;
}
.slidegroup1 .v-slide-group {
  height: 34px !important;
}

.icon-blue {
  color: #755fc9 !important;
}

.company_logo .v-image__image--cover {
  background-size: contain;
}

.no-border > .v-input__control > .v-input__slot:before {
  border-color: #fff !important;
}

/* .no-border:before {
  border-color: #fff !important;
} */

.logtable .v-data-table__wrapper {
  height: 670px;
  overflow-y: scroll;
}
.logtable-comm .v-data-table__wrapper {
  height: 830px;
  overflow-y: scroll;
}

.alarm {
  animation: changeBackgroundColor 1s infinite;
}

@keyframes changeBackgroundColor {
  0% {
    color: #000000;
  }
  10% {
    color: #f73030;
  }
  20% {
    color: #000000;
  }

  40% {
    color: #f73030;
  }
  60% {
    color: #000000;
  }
  80% {
    color: #fc0000;
  }
  90% {
    color: #000000;
  }
  100% {
    color: #fc0000;
  }
}
</style>
<!-- <style>
body {
  min-width: 1600px;
}
</style> -->

<style>
.apexcharts-canvas {
  width: 100%;
}
</style>
<style>
.v-data-table-header tr > th {
  font-weight: bold;
  color: black !important;
  font-size: 12px;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  font-weight: bold;
  color: black !important;
  font-size: 13px;
}
</style>

<!-- <link rel="stylesheet" href="../static/css/textbox-label-style.css" /> -->
