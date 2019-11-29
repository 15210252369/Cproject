<template>
  <div class="goodsitem">
    <img :src="list.show.img" alt @load='loadImg'/>
    <div class="info">
      <p>{{list.title}}</p>
      <span class="price">{{list.price}}</span>
      <span class="collect">{{list.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    loadImg(){
    this.$bus.$emit('itemLoadImg')
    }
  }
};
</script>

<style>
.goodsitem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goodsitem img {
  width: 100%;
  border-radius: 5px;
}
.info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
  padding-top: 5px;
}
.collect {
  position: relative;
}
.info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>