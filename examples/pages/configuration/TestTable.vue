<template>
  <div id="test">
    <table ref="table">
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </div>
</template>

<script>import { conditionalExpression } from "@babel/types"

export default {
  name: 'TestTable',
  props: {},
  data() {
    return {
      tds: '',
      container: [],
      flag: [],
    }
  },
  mounted() {
    this.highLight()
    console.log(this)
  },
  methods: {
    handleClick() {
      console.log('handle')
    },
    highLight() {
      this.$bus.$on('transmit', (container, state) => {
        if (!this.$refs.table || state.node !== 'test-table') return
        let tableCopy = this.$refs.table.cloneNode(true)
        container.getElement().append(tableCopy)

        let doc = tableCopy.querySelectorAll('td')
        for (let i = 0; i < doc.length; i++) {
          doc[i].onclick = () => {
            doc[i].className = doc[i].className === 'active' ? '' : 'active'
          }
        }
      })
  
    }
  }
}
</script>

<style scoped>
table {
  width: 150px;
  height: 150px;
  border-collapse: collapse;
}
table td {
  border: 1px solid rgb(163, 161, 161);
  background: #222;
  cursor: pointer;
}

table td:hover {
  background: #444;
}

table td.active {
  background: orange;
}
</style>