<template>
  <vue-golden-layout
  :config="config"
  :scroll="scroll"
  > 
  <div v-for="item in items" :key="item.id">
    <another></another>
  </div>
  </vue-golden-layout>
</template>

<script>
import Another from "../../components/ItemVue/Another";
export default {
  name: "PanelScrolling",
  components: { Another },
  data() {
    return {
      scroll: true,
      items: [{id: 1}, {id: 2}]
    };
  },
  computed: {
    config() {
      return {
        content: [
          {
            type: "row",
            content: [
              {
                type: "component",
                componentName: "ComponentA",
                componentState: { key: 1 },
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
                    componentState: { key: 2 },
                  },
                ],
              },
            ],
          },
        ],
      }
    }
  }


};
</script>

<style>
</style>