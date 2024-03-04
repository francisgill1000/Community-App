<template>
  <div>
    <v-img
      class="ma-2"
      width="24px"
      height="24px"
      v-for="(img, index) in images"
      :key="index"
      :src="img"
    ></v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/tanent-icon-black.jfif",
        "/tanent-icon-white.jfif",
        "/visitor-icon.png",
        "/delivery-man-black.png",
        "/delivery-man-black-2.png",
        "/contractor-icon.jpg",
        "/maid-icon.jfif",
        "/contractor-icon.jpg",
      ],
    };
  },
};
</script>
