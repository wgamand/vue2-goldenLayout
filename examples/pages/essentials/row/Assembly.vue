<template>
  <div ref="assembly" class="content">
    <h2>测试文字</h2>
    <div>
      A content item (or tree of content items) or an
      ItemConfiguration to create the item from
    </div>
  </div>
</template>
<script>
export default {
  name: 'assembly',
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
        if (!this.$refs.assembly || state.text !== 'Assembly') return

        let copyAssembly = this.$refs.assembly.cloneNode(true)
        container.getElement().append(copyAssembly)
      })
    }
  }
}
</script>
<style>
.content {
  width: 180px;
  height: 180px;
  background: rgb(69, 70, 70);
  text-align: center;
  margin: 0 auto;
}
</style>