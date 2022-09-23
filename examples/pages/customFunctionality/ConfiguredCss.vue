<template>
  <div>
    <vue-golden-layout
    :config="config"
    :css="css"
    >
    </vue-golden-layout>
  </div>
</template>
<script>
export default {
  name: 'ConfiguredCss',
  data() {
    return {
      css: true,
      config: {
        content: [
          {
            type: 'row',
            content: [
              {
                type: 'component',
                width: 25,
                componentName: 'testComponent1',
              },
              {
                type: 'component',
                cssClass: 'highlight',
                componentName: 'testComponent2',
              },
              {
                type: 'component',
                componentName: 'testComponent3',
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
  .highlight, .highlight *{
  background: orange;
}
</style>