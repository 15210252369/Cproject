<template>
  <mt-swipe :auto="2000">
    <mt-swipe-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link" rel="external nofollow">
        <img :src="item.image" class="img" @load="imageLoad" />
      </a>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import "mint-ui/lib/style.css";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("imageLoad");
        this.isLoad = true;
      }
    }
  },
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem
  }
};
</script>

<style>
img {
  width: 100%;
}

.mint-swipe {
  height: 218px;
  margin-top: 44px;
}
.mint-swipe-indicator.is-active {
  background-color: #ffffff !important;
  opacity: 1;
}
</style>