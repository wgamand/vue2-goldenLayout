<template>
  <vue-golden-layout
    :config="config"
    :showTop="true"
  ></vue-golden-layout>
</template>

<script>
export default {
  name: 'column',
  data() {
    return {
      config: {
        mainNode: 'el-main',
        content : [
          {
            type: 'column',
            content: [
              {
                type: 'component',
                componentName: 'ComponentA',
                componentState: { text: 'Component A'}
              },
              {
                type: 'component',
                componentName: 'ComponentB',
                componentState: { text: 'Component B'}
              },
              {
                type: 'component',
                componentName: 'ComponentC',
                componentState: { text: 'Component C'}
              },
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