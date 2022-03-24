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

<script>
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
  },
  methods: {
    highLight() {
      this.$bus.$on('transmit', (container, state) => {
        if(!this.$refs.table || state.text !== 'test-table') return
        this.container = container
        let table = this.$refs.table
        let tableClone = table.cloneNode(true)
        let tr = tableClone.children
        for (let i = 0; i < tr.length; i++) {
          let td = tr[i].children
          for (let j = 0; j < td.length; j++) {
            td[j].onclick = () => {
              td[j].classList.add('active')
            }
          }
        }
        container.getElement().append(tableClone)
      })
    },
    _hight(e) {
      e.target.classList.toggle('active')
      this._serialize()
    },
    _serialize() {
      let state = ''
      for (let i = 0; i < this.tds.length; i++) {
        state += this.tds[i].classList.contains('active') ? '1' : '0'
      }
      this.container.extendState({ tiles: state })
    },
    _applyState(state) {
      for (let i = 0; i < this.tds.length; i++) {
        if (state[i] === '1') {
          this.tds[i].classList.add('active')
        }
      }
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