<template></template>

<script>
import GoldenLayout from "golden-layout";
export default {
  name: 'test',
  data() {
    return {
      config : {
        settings: {
          selectionEnabled: true,
          popoutWholeStack: true,
        },
      content: [{
        type: 'row',
        content: [
          {
            type: 'component',
            componentName: 'example',
            componentState: { text: 'Component 1' }
          },
          {
            type: 'component',
            componentName: 'example',
            componentState: { text: 'Component 2' }
          },
          {
            type: 'component',
            componentName: 'example',
            componentState: { text: 'Component 3' }
          }
        ]
      }]
    }
    }
  },

 mounted() {
    var myLayout = new GoldenLayout(this.config, document.getElementsByClassName('el-main'));

    myLayout.registerComponent('example', function (container, state) {
      container.getElement().html('<h2>' + state.text + '</h2>');
    });

    myLayout.init();
  }
  }

</script>

<style>
</style>