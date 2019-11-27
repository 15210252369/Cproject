<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true
    });
    this.scroll.on("scroll", position => {
      this.$emit("scrollTop", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("loadMore");
    });
  },
  methods: {
    scrollTop() {
      this.scroll.scrollTo(0, 0, 400);
    },
    scrollFinish() {
      this.scroll.finishPullUp();
    }
  }
};
</script>

<style scope>
</style>