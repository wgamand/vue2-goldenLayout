<template>
  <div id="wrapper">
    <vue-golden-layout :config="config" :showTop="true">
      <!-- 插槽 -->
      <other ref="other"></other>
      <assembly></assembly>
      <another></another>
    </vue-golden-layout>
  </div>
</template>
<script>
import Other from "./Other";
import Assembly from './Assembly';
import Another from './Another'

export default {
  components: { Other, Assembly, Another },
  name: "Row",
  data() {
    return {
      // 配置
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
                type: "stack",
                width: 50,
                activeItemIndex: 0,
                content: [
                  {
                    type: "component",
                    componentName: "ComponentA",
                    componentState: { text: 'Other' }
                  },
                  {
                    type: "component",
                    componentName: "ComponentB",
                    componentState: { text: 'Another' }
                  },
                ],
              },
              {
                type: "column",
                content: [
                  {
                    type: "component",
                    componentName: "ComponentC",
                    componentState: { text: 'Assembly' }
                  },
                  {
                    type: "component",
                    componentName: "ComponentD",
                    componentState: { text: 'Other' }
                  },
                ],
              },

            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
body,
html {
  width: 100%;
}
</style>
