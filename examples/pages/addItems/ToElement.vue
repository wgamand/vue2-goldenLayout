<template>
  <div id="golden">
    <vue-golden-layout
      :config="config"
      :newItemConfig="newItemConfig"
      :addItem="addItem"
      :showTop="true"
    >
      <add></add>
      <other></other>
    </vue-golden-layout>
  </div>
</template>

<script>
import add from "./add";
import Other from '../essentials/row/Other'
export default {
  name: "ToElement",
  components: { add, Other },
  data() {
    return {
      addItem: true,
      config: {
        mainNode: 'el-main',
        settings: {
          selectionEnabled: true,
          popoutWholeStack: true,
        },
        content: [
          {
            type: "row",
            content: [
              {
                type: "component",
                componentName: "Component1",
              },
              {
                type: "column",
                content: [
                  {
                    type: "component",
                    componentName: "Component2",
                    componentState: { node: 'add' }
                  },
                  {
                    type: "component",
                    componentName: "Component3",
                    componentState: { node: 'other' }
                  },
                ],
              },
            ],
          },
        ],
      },
      newItemConfig: {
        type: "component",
        componentName: "NewComponent",
        componentState: { node: 'add' }
      },
    };
  },
};
</script>

<style>
</style>
