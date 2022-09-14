<template>
  <div>
    <div style="position: absolute; top: 15px; left: 685px;">
      <button id="reorder" :disabled="toggle" @click="handleChange('toggle')"
        style="margin-right: 10px">toggleButton</button>
      <button id="restore" :disabled="restore" @click="handleChange('restore')">restore</button>
    </div>
    <vue-golden-layout :config="config" :reorder="reorder" :newElement="newElement">
    </vue-golden-layout>
  </div>
</template>

<script>
export default {
  name: 'ProgrammaticReorder',
  data() {
    return {
      reorder: true,
      toggle: false,
      restore: true,
      config: {
        mainNode: 'el-main',
        type: 'column',
        content: [{
          type: 'column',
          content: [
            {
              type: 'component',
              componentName: 'example1',
              componentState: { text: 'Component 1' }
            },
            {
              type: 'component',
              componentName: 'example2',
              componentState: { text: 'Component 2' }
            },
            {
              type: 'component',
              componentName: 'example3',
              componentState: { text: 'Component 3' }
            }, {
              type: 'component',
              componentName: 'example4',
              componentState: { text: 'Component 4' }
            }
          ]
        }]
      },
      newElement: {
        type: 'column',
        content: [{
          type: 'row',
          content: []
        }, {
          type: 'row',
          content: []
        }]
      }
    }
  },
  methods: {
    handleChange(type) {
      if (type === 'toggle') {
        this.toggle = true;
        this.restore = false;
      }else {
        this.restore = true;
        this.toggle = false;
      }
      this.$bus.$emit('proReorder', type)
    }
  }
}

</script>

<style>
</style>