<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods" :key="index" :list="item"></goods-item>
  </div>
</template>

<script>
import goodsItem from "./goodsitem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    goodsItem
  }
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>