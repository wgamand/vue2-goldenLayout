<template>
  <div>
    <vue-golden-layout
    :config="config"
    :synced="synced"
    >
    <div v-for="item in items" :key="item.id">
      <test-table></test-table>
    </div>
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
      items: [{id:1}, {id:2}, {id:3}, {id:4}],
      config: {
        content: [{
          type: 'row',
          content: [{
            type: 'stack',
            width: 50,
            content: [{
              type: 'component',
              componentName: 'example1',
              componentState: { key: 1},
              title: 'Component 1'
            },
            {
              type: 'component',
              componentName: 'example2',
              componentState: { key: 2 },
              title: 'Component 2'
            }]
          },
          {
            type: 'column',
            content: [{
              type: 'component',
              componentName: 'testComponent1',
              componentState: { key: 3}
            },
            {
              type: 'component',
              componentName: 'testComponent2',
              componentState: { key: 4}
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