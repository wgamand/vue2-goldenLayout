<template>
  <vue-golden-layout
  :config="config"
  :close="close"
  ></vue-golden-layout>
</template>

<script>
export default {
  name: 'ConditionalClosing',
  data() {
    return {
      close: true,
      config: {
        content: [{
          type: 'row',
          content: [{
            type: 'component',
            componentName: 'testComponent1'
          },{
            type: 'component',
            componentName: 'testComponent2'
          }]
        }]
      }
    }
  }
}
</script>

<style>

</style>