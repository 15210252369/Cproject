<template>
  <div class="tabControl">
    <div
      class="tabitem"
      v-for="(item,index) in title"
      :key="index"
      :class="{active:currentIndex===index}"
      @click="toggle(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    toggle(index) {
      this.currentIndex = index;
      this.$emit('tabControl',index)
    }
  }
};
</script>

<style>
.tabControl {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  font-size: 15px;
}
.tabitem {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
  padding: 5px;
}
</style>