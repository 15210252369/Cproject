<template>
  <tabbar>
    <tabitem link="/home">
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt />
      <img src="~assets/img/tabbar/home_active.svg" alt />
      <div slot="text">主页</div>
    </tabitem>
    <tabitem link="/category">
      <img slot="icon" src="~assets/img/tabbar/category.svg" alt />
      <img src="~assets/img/tabbar/category_active.svg" alt />
      <div slot="text">分类</div>
    </tabitem>
    <tabitem link="/shopcar">
      <img slot="icon" src="~assets/img/tabbar/shopcart.svg" alt />
      <img src="~assets/img/tabbar/shopcart_active.svg" alt />
      <div slot="text">购物</div>
    </tabitem>
    <tabitem link="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.svg" alt />
      <img src="~assets/img/tabbar/profile_active.svg" alt />
      <div slot="text">我的</div>
    </tabitem>
  </tabbar>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar";
import tabitem from "components/common/tabbar/tabitem";
export default {
  components: {
    tabbar,
    tabitem
  }
};

</script>

<style>
</style>