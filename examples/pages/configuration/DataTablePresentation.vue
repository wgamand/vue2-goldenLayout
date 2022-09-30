<template>
  <div class="main">
    <div style="margin-left: 15px;">
      <p class="tip">点击表格中数据，下方弹出相应内容的页面:</p>
      <el-table :data="tableData" border size="mini" @cell-click="cellClick" style="width: 50%; margin: 5px 0">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </div>
    <vue-golden-layout ref="vueGolden" @closeItem="getCloseItem" close="true" mainNode="main">
      <div v-for="item in allItems" :key="item.id">
        <div>
           <p>姓名：{{item.name}}</p>
           <p>地址：{{item.address}}</p>
        </div>
        
      </div>
    </vue-golden-layout>
  </div>
</template>
<script>
export default {
  name: 'DataTablePresentation',
  data() {
    return {
      allItems: [],
      tableData: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2017-05-04',
        name: '张三',
        address: '广州市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2018-05-01',
        name: '李四',
        address: '青海市普陀区金沙江路 1519 弄'
      }, {
        id: 4,
        date: '2019-05-03',
        name: '王五',
        address: '长沙市普陀区金沙江路 1516 弄'
      }],
      noData: false,
    }
  },
  methods: {
    getCloseItem(tab, layout) {
      let closeName = tab.contentItem.componentName
      for (let i = 0; i < this.allItems.length; i++) {
        if (this.allItems[i].date === closeName) {
          this.allItems.splice(i, 1)
        }
      }
    },
    cellClick(e) {
      this.allItems.filter((item) => {
        if (item.date === e.date) {
          this.$refs.vueGolden.changeSelectedName(e.date)
        }
      })
      let isSame = this.allItems.some((item) => {
        return item.date === e.date
      })

      if (!isSame) {
        this.newItemComponent(e)
      }
    },
    newItemComponent(res) {
      this.allItems.push({
        id: res.id,
        date: res.date,
        name: res.name,
        address: res.address
      })
      this.$nextTick(() => {
        let newItem = {
          type: 'component',
          componentName: res.date,
          componentState: { key: res.id },
        }
        this.$refs.vueGolden.add(newItem)
      })
    },
  },
  computed: {
  }
}
</script>
<style scoped>

.main {
  position: relative;
  height: calc(100% - 10px);
}
.main>>>.el-table div {
  color: #000;
}

.noData {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.noData p {
  width: 300px;
  text-align: center;
  border: 2px solid #0000FF;
}


.tip {
  padding: 0;
  margin: 0;
}
</style>