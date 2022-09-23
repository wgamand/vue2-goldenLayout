<template>
  <div id="golden">
    <div class="btnorp" style="position: absolute; top: 10px; left: 678px; line-height: 30px;">
      <button @click="add()">add Item</button>
    </div>
    <vue-golden-layout ref="vueGolden" :config="config">
      <div v-for="item in other" :key="item.id">
        <other></other>
      </div>
      <div v-for="item in assem" :key="item.id">
        <assembly></assembly>
      </div>
    </vue-golden-layout>
  </div>
</template>

<script>
import Other from '../../components/ItemVue/Other'
import Assembly from '../../components/ItemVue/Assembly'
export default {
  name: "ToElement",
  components: { Other, Assembly },
  data() {
    return {
      other: [{ id: 2 }],
      assem: [{id: 1}, {id: 3}],
      num: 3,
      config: {
        settings: {
          selectionEnabled: true,
          popoutWholeStack: true,
        },
        content: [{
          type: 'row',
          isClosable: false,
          content: [{
            type: 'stack',
            content: [{
              type: 'component',
              componentName: 'testComponent1',
              componentState: { key: 2 }
            }]
          }, {
            type: 'column',
            content: [{
              type: 'component',
              componentName: 'testComponent2',
              componentState: { key: 1 }
            }, {
              type: 'component',
              componentName: 'testComponent3',
            }]
          }]
        }]
      },
    };
  },
  mounted() {},
  methods: {
    add() {
      this.$refs.vueGolden.add(this.newItem)
      this.num++
      this.assem.push({id: this.num})
    }
  },
  computed: {
    newItem() {
      let config = {
        type: 'component',
        componentName: `Newcomponent${this.num}`,
        componentState: { key: this.num }
      }
      return config
    }
  }
}
</script>

<style>
</style>
