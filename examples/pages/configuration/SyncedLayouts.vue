<template>
  <div>
    <vue-golden-layout
    :config="config"
    :synced="synced"
    :showTop="true"

    >
    <test-table></test-table>
    </vue-golden-layout>
  </div>
</template>

<script>
import TestTable from './TestTable'
export default {
  name: 'SyncedLayouts',
  components: { TestTable },
  data() {
    return {
      synced: true,
      wrapp: '',
      config: {
        mainNode: 'el-main',
        content: [{
          type: 'row',
          content: [{
            type: 'stack',
            width: 50,
            content: [{
              type: 'component',
              componentName: 'example1',
              componentState: { text: 'test-table'},
              title: 'Component 1'
            },
            {
              type: 'component',
              componentName: 'example2',
              componentState: { text: 'test-table'},
              title: 'Component 2'
            }]
          },
          {
            type: 'column',
            content: [{
              type: 'component',
              componentName: 'testComponent1',
              componentState: { text: 'test-table'}
            },
            {
              type: 'component',
              componentName: 'testComponent2',
              componentState: { text: 'test-table'}
            }]
          }
          ]
        }]
      }
    }
  },

}
</script>

<style>

</style>