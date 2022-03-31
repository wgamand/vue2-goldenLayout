<template>
  <vue-golden-layout
  :config="config"
  :saving="saving"
  :showTop="true"
  >
  <input-box></input-box>
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
      config: {
        mainNode: 'el-main',
        content: [
          {
            type: 'row',
            content: [
              {
                type: 'component',
                componentName: 'ComponentA',
                componentState: { text: 'input-box'}
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
                    componentState: { text: 'input-box'}
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
}
</script>

<style>

</style>