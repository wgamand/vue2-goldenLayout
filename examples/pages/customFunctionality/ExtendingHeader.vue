<template>
  <vue-golden-layout
  :config="config"
  :spread="spread"
  :showTop="true"
  >
  </vue-golden-layout>
</template>

<script>
export default {
  name: 'ExtendingHeader',
  data() {
    return {
      spread: true,
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