<template>
  <div id="app v-cloak">
    <maintab></maintab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import maintab from "./components/content/main";
export default {
  name: "app",
  components: {
    maintab
  }
};
</script>

<style>
@import "assets/css/base.css";
[v-cloak] {
  display: none !important;
}
</style>
