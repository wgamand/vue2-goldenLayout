<template>
  <vue-golden-layout
  :config="config"
  :extend="extend"
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