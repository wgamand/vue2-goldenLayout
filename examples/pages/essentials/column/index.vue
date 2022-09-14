<template>
  <vue-golden-layout :config="config"></vue-golden-layout>
</template>

<script>
export default {
  name: "column",
  data() {
    return {
      config: {
        mainNode: "el-main",
        content: [
          {
            type: "column",
            content: [
              {
                type: "component",
                title: 'example1',
                componentName: "example",
                componentState: { text: "Component 1" },
              },
              {
                type: "component",
                title: 'example2',
                componentName: "example",
                componentState: { text: "Component 2" },
              },
              {
                type: "component",
                title: 'example3',
                componentName: "example",
                componentState: { text: "Component 3" },
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    handleClick() {},
  },
};
</script>

<style>
</style>