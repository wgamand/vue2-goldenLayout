<template>
  <div>
    <div class="chooseColor">
      <div id="selectedColor"
        style="display: none; width: 10px; height: 10px; background: pink; float: left; margin: 5px 5px 0 0 "></div>
      <ul id="chooseUl">
        <li style="background: #014FA1"></li>
        <li style="background: #1D84BD"></li>
        <li style="background: #EEEEEE"></li>
        <li style="background: #dba37c"></li>
        <li style="background: #cf4d84"></li>
      </ul>
    </div>
    <vue-golden-layout :config="config" :spread="spread">
    </vue-golden-layout>
  </div>
</template>

<script>
export default {
  name: 'ExtendingHeader',
  data() {
    return {
      spread: true,
      config: {
        settings: {},
        mainNode: 'el-main',
        content: [{
          type: 'row',
          content: [{
            type: 'component',
            componentName: 'testComponent1',
            componentState: { color: '#1D84BD' }
          }
          ]
        }]
      }
    }
  },
  methods: {},
}
</script>

<style>
.chooseColor {
  position: absolute;
  top: 10px;
  left: 678px;
  line-height: 30px;
}

.chooseColor {
  width: 100px;
  padding-top: 10px;
  cursor: pointer;
}

.chooseColor .selectedColor {
  width: 20px;
  height: 20px;
}

.chooseColor ul {
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
  display: flex;
}

.chooseColor ul,
.chooseColor ul li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.chooseColor ul li {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.chooseColor ul li:hover {
  border: 1px solid orange;
  width: 18px;
  height: 18px;
}
</style>