<template>
  <div class="tabitem" @click="toogle">
    <slot v-if="!isActive" name="icon"></slot>
    <slot v-else></slot>
    <div :style="isStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    isColor: {
      type: String,
      default: "hotpink"
    }
  },
  methods: {
    toogle() {
      this.$router.replace(this.link);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    isStyle() {
      return this.isActive ? { color: this.isColor } : "";
    }
  }
};
</script>

<style>
.tabitem {
  flex: 1;
  text-align: center;
}
.tabitem img {
  width: 24px;
  height: 24px;
}
</style>