<template>
  <vue-golden-layout
  :config="config"
  :extend="extend"
  :showTop="true"
  >
  </vue-golden-layout>
</template>

<script>
export default {
  name: 'ExtendingHeader',
  data() {
    return {
      extend: true,
      config: {
        mainNode: 'el-main',
        content: [{
          type: 'row',
          content: [{
            type: 'component',
            componentName: 'testComponent1',
            componentState: { color: '#1D84BD'}
          }
          ]
        }]
      }
    }
  }
}
</script>

<style>

</style>