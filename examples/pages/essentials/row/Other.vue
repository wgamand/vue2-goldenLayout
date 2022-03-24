<template >
  <div ref="other" id="other">
    <h2>测试内容</h2>
    <table id="table">
      <tr>
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
    <button id="btn" @click="handleClick" >@click</button>
    <button onclick="alert('onclick')" style="marginLeft: 15px">onclick</button>
    <button onclick="this.handleClick" style="marginLeft: 15px">onclick</button>
    
  </div>
  
</template>
<script>

export default {
  name: 'other',
  mounted() {
    this.transmit()
  },
  methods: {
    handleClick() {
      console.log('button-按钮');
    },
    transmit() {
      this.$bus.$on('transmit', (container, state) => {
        if (!this.$refs.other || state.text !== 'Other') return
        let otherCopy = this.$refs.other.cloneNode(true)
        container.getElement().append(otherCopy)

        let child = otherCopy.childNodes
        for (let i = 0; i < child.length; i++) {
          if (child[i].id === 'btn') {
            child[i].onclick = this.handleClick
          }
        }
      })
    }
  },
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