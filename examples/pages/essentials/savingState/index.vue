<template>
  <vue-golden-layout
  :config="config"
  :saving="saving"
  >
  <div v-for="item in items" :key="item.id">
    <input-box></input-box>
  </div>
  </vue-golden-layout>
</template>

<script>
import InputBox from './InputBox'
export default {
  name: 'savingState',
  components: { InputBox },
  data() {
    return {
      saving: true,
      items: [{id:1}, {id:3}],
      config: {
        content: [
          {
            type: 'row',
            content: [
              {
                type: 'component',
                componentName: 'ComponentA',
                componentState: { key: 1 }
              },
              {
                type: 'column',
                content: [
                  {
                    type: 'component',
                    componentName: 'ComponentB',
                  },
                  {
                    type: 'component',
                    componentName: 'ComponentC',
                    componentState: { key: 3 }
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>