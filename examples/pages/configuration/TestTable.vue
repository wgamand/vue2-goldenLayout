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
        let doc = document.querySelectorAll('td')
        for (let i = 0; i < doc.length; i++) {
          doc[i].onclick = () => {
            doc[i].className = doc[i].className === 'active' ? '' : 'active'
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