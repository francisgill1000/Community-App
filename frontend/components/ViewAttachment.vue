<template>
  <v-dialog v-model="dialog" height="900" width="900">
    <template v-slot:activator="{ on, attrs }">
      <!-- <v-icon color="primary" v-bind="attrs" v-on="on">mdi-attachment</v-icon> -->
      <!-- <v-icon color="primary" v-bind="attrs" v-on="on"
        >mdi-file-multiple</v-icon
      > -->
      <!-- <v-icon color="primary" v-bind="attrs" v-on="on">mdi-file-pdf</v-icon>
      <v-icon color="primary" v-bind="attrs" v-on="on">mdi-paperclip</v-icon> -->

      <v-btn v-bind="attrs" v-on="on" outlined block color="primary"
        >{{ label }}
        <v-icon right dark>mdi-file</v-icon>
      </v-btn>
    </template>
    <div class="text-right white">
      <v-btn icon @click="dialog = false"
        ><v-icon color="primary">mdi-close-circle-outline</v-icon></v-btn
      >
    </div>
    <div v-if="src && src.includes(`.pdf`)">
      <iframe
        :src="src"
        frameborder="0"
        style="width: 100%; height: 600px"
      ></iframe>
      <!-- <pdf-viewer :src="src"></pdf-viewer> -->
    </div>
    <v-img v-else :src="src" :alt="altText"></v-img>
  </v-dialog>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Document",
    },
    src: {
      type: String,
      required: true,
      default: "",
    },
    altText: {
      type: String,
      default: "Image",
    },
  },
  data: () => ({
    dialog: false,
  }),
};
</script>
