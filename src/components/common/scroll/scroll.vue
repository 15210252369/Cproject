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
      click: true,
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
      this.scroll.scrollTo(0, 0, 500);
    },
    scrollFinish() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : null;
    }
  }
};
</script>

<style scope>
</style>