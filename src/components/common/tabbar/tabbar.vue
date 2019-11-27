<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  box-shadow: 0 -3px 10px rgba(20, 20, 20, 0.1);
  background-color: #fff;
  z-index: 10;
}
</style>