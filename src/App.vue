<template>
  <div id="app">
    <maintab></maintab>
    <router-view></router-view>
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
</style>
