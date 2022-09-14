<template>
  <div id="wrapper">
    <div style="position: absolute; top: 15px; left: 685px;">
      <button @click="change">切换组件</button>
    </div>
    <vue-golden-layout ref="vueGolden" :config="config">
      <!-- 插槽 -->
      <div v-for="item in items" :key="item.id">
        <div>组件：{{ `Component${item.name} ` }}</div>
        <p>内容: {{ item.name }}</p>
        <button @click="change(item.name)">测试</button>
      </div>
    </vue-golden-layout>
  </div>
</template>
<script>

export default {
  name: "Row",
  data() {
    return {
      items: [],
      activeName: '',
      // 配置
      config: {
        mainNode: "el-main",
        settings: {
          selectionEnabled: true,
          popoutWholeStack: true,
          showCloseIcon: false,
        },
        content: [
          {
            type: "stack",
            width: 50,
            activeItemIndex: 0,
            content: [
              {
                type: "component",
                componentName: this.getForList(),
                componentState: { key: 1 },
              },
              {
                type: "component",
                componentName: 'ComponentTwo',
                componentState: { key: 2 },
              },
              {
                type: "component",
                componentName: 'com3',
                componentState: {},
              },
            ],
          },
        ],
      },
    };
  },
  created() {
    this.getForList()
  },
  methods: {
    change() {
      this.activeName = 'ComponentTwo'
      this.$refs.vueGolden.changeSelectedName(this.activeName)
    },
    getForList() {
      this.items = [{
        id: 1,
        name: '1'
      }, {
        id: 2,
        name: '2'
      }]
      return 'ComponentOne'
    },
  }
};
</script>

<style scoped>
body,
html {
  width: 100%;
}


.text {
  font-size: 14px;
  color: black
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>
