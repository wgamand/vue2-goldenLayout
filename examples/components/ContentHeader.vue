<template>
    <p class="top">ESSENTIALS&nbsp;::&nbsp;&nbsp;{{ essentials }}</p>
</template>
<script>
export default {
  name: 'ContentHeader',
  data() {
    return {
      essentials: ""
    }
  },
  watch: {
    $route(newValue) {
      this.essentials = newValue.path.substring(1)
    }
  }
}
</script>
<style>

.top {
  position: absolute;
  top: 0;
  left: 310px;
}
</style>