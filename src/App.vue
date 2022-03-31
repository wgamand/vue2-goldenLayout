<template>
  <div id="app">
  <vue-golden-layout :config="config" :scroll="scroll">
    <another></another>
  </vue-golden-layout>
   
  </div>
</template>

<script>
import Another from '../examples/pages/essentials/row/Another'
export default {
  name: 'App',
  components: { Another },
  data() {
    return {
      scroll: true,
      config: {
        content: [
          {
            type: "row",
            content: [
              {
                type: "component",
                componentName: "ComponentA",
                componentState: { text: "Another" },
              },
              {
                type: "column",
                content: [
                  {
                    type: "component",
                    componentName: "ComponentB",
                  },
                  {
                    type: "component",
                    componentName: "ComponentC",
                  },
                ],
              },
            ],
          },
        ],
      },
    }
  },
  mounted() {
    let lm = document.getElementsByClassName('lm_content')
    console.log(lm)
  }
}
</script>

<style>

</style>
