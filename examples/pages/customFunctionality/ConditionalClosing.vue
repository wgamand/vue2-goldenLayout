<template>
  <vue-golden-layout
    ref="vueGolden"
    :config="config"
    :close="close"
    @closeItem="getCloseItem"
  >
  </vue-golden-layout>
</template>

<script>
export default {
  name: "ConditionalClosing",
  data() {
    return {
      close: true,
      isClosable: true,
    };
  },
  methods: {
    getCloseItem(tab, layout) {
      let lastName;
      if (layout.config.content[0].content.length <= 1) {
        lastName = layout.config.content[0].content[0].componentName;
      } else {
        lastName = "";
      }

      if (lastName) {
        this.config.content[0].content.filter((item) => {
          if (item.componentName === lastName) {
            this.isClosable = false;
            this.$emit("lastI", tab);
          } else {
            this.isClosable = true;
          }
        });
      }
    },
  },
  computed: {
    config() {
      return {
        mainNode: "el-main",
        content: [
          {
            type: "row",
            content: [
              {
                type: "component",
                componentName: "testComponent1",
              },
              {
                type: "component",
                componentName: "testComponent2",
                componentState: { text: "测试关闭" },
              },
              {
                type: "component",
                componentName: "testComponent3",
                componentState: { text: "测试" },
                isClosable: this.isClosable,
              },
            ],
          },
        ],
      };
    },
  },
};
</script>

<style>
</style>