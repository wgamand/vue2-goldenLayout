<template >
  <div ref="other" id="other">
    <h2>测试内容</h2>
    <table id="table">
      <tr id="tr">
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
      </tr>
      <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
      </tr>
    </table>
    <button id="btn" ref="btn" @click="handleClick">@click</button>
    <button onclick="alert('onclick')" style="marginLeft: 15px">onclick</button>  </div>
</template>
<script>
export default {
  name: 'other',
  mounted() {
    this.transmit()
    let node = this.$refs.other.cloneNode(true)
  },
  methods: {
    handleClick() {
      console.log('button')
    },

    transmit() {
      this.$bus.$on('transmit', (container, state) => {
        if (!this.$refs.other || state.event !== 'other') return
        let otherCopy = this.$refs.other.cloneNode(true)
        container.getElement().append(otherCopy)
      })


    },
  }
}
</script>
<style>
table {
  width: 200px;
  text-align: center;
}


table td {
  border: powderblue 1px solid;
}
</style>