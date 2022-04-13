<template>
  <div ref="add" id="add" style="border: 1px solid #fafafa; width: 200px; text-align:center">
    <p>Add</p>
    <button id="btn" @click="handleClick">add</button>
    <p class="font" ref="font">To element</p>
  </div>
</template>

<script>
export default {
  name: 'add',
  data() {
    return {
    }
  },
  methods: {
    handleClick() {
      let node = document.getElementsByClassName('font')[0]
      node.style.display = 'block'
    }
  }
}
</script>

<style scoped>
.font {
  display: none;
}
</style>