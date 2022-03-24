<template>
  <div ref="add" id="add" style="border: 1px solid #fafafa; width: 200px; text-align:center">
    <p>Add</p>
    <button id="btn">add</button>
    <p class="font">To element</p>
  </div>
</template>

<script>
export default {
  name: 'add',
  data() {
    return {
    }
  },
  mounted() {
    this.transmit()
  },
  methods: {
    transmit() {
      this.$bus.$on('transmit', (container, state) => {
        if (!this.$refs.add || state.text !== "Add") return

        let addCopy = this.$refs.add.cloneNode(true)
        container.getElement().append(addCopy)
        let child = addCopy.childNodes
        child[1].onclick = () => {
          child[2].style.display = 'block'
        }
      })
    }
  },
}
</script>

<style scoped>
.font {
  display: none;
}
</style>