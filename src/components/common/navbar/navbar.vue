<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center">购物街</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  display: flex;
  height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  overflow: hidden;
}
.right,
.left {
  width: 44px;
}
.center {
  flex: 1;
  line-height: 44px;
  text-align: center;
}

</style>