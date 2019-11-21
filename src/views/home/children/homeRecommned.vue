<template>
  <div class="recommend">
    <div class="item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: Array
  }
};
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  border-bottom: 10px solid #eee;
}
.item {
  flex: 1;
  padding: 15px;
}
.item img {
  margin-bottom: 10px;
}
</style>