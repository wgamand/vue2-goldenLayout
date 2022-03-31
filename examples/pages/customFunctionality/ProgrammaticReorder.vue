<template>
  <vue-golden-layout
  :config="config"
  :reorder="reorder"
  :showTop="true"
  :newElement="newElement">
  </vue-golden-layout>
</template>

<script>
export default {
  name: 'ProgrammaticReorder',
  data() {
    return {
      reorder: 'true',
      config: {
        mainNode: 'el-main',
        type: 'column',
        content: [{
          type: 'column',
          content: [
            {
              type:'component',
              componentName: 'example1',
              componentState: { text: 'Component 1' }
            },
            {
              type:'component',
              componentName: 'example2',
              componentState: { text: 'Component 2' }
            },
            {
              type:'component',
              componentName: 'example3',
              componentState: { text: 'Component 3' }
            },{
              type:'component',
              componentName: 'example4',
              componentState: { text: 'Component 4' }
            }
          ]
        }]
      },
      newElement: {
        type: 'column', 
        content: [{
          type: 'row',
          content: []
        },{
          type: 'row',
          content: []
        }]
      }
    }
  }
}
</script>

<style>

</style>