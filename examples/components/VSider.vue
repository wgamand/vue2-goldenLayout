<template>
  <el-menu
    :default-openeds="['1']"
    class="el-menu-vertical-demo"
    background-color="#000"
    @select="handleSelect"
  >
    <el-submenu index="1">
      <el-menu-item-group>
        <template slot="title">ESSENTIALS</template>
        <el-menu-item index="row">row</el-menu-item>
        <el-menu-item index="column">column</el-menu-item>
        <el-menu-item index="saving-state">saving-state</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="CONFIGURATION">
        <el-menu-item index="synced-layouts">Synced-layouts</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="ADDING ITEMS">
        <el-menu-item index="to-element">To-element</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="CUSTOM FUNCTIONALITY">
        <el-menu-item index="panel-scrolling">Panel-Scrolling</el-menu-item>
        <el-menu-item index="configured-css">Configured-Css</el-menu-item>
        <el-menu-item index="programmatic-reorder">Programmatic-Reorder</el-menu-item>
        <el-menu-item index="extending-header">Extending-Header</el-menu-item>
        <el-menu-item index="conditional-closing">Conditional-Closing</el-menu-item>
        <!-- <el-menu-item index="test">test</el-menu-item> -->
    

      </el-menu-item-group>
    </el-submenu> 
  </el-menu>
</template>

<script>
export default {
  name: "VSider",
  methods: {
    handleSelect(key, keyPath) {
      this.$router.replace("/" + key);
     
    },
  },
};
</script>

<style>
  body .el-menu-item  {
   
    color: #fff;
  }
</style>
