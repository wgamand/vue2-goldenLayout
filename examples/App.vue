<template>
  <div id="app">
    <el-container>
      <el-aside width="300px">
        <v-sider></v-sider>
      </el-aside>
      <el-main id="layoutA">
        <router-view></router-view>
      </el-main>

      <div
        id="layoutB"
        style="display:none; width: 40%; margin-top: 60px; border-left: 5px solid rgb(248, 248, 248)"
      ></div>
    </el-container>
  </div>
</template>

<script>
import VSider from "./components/VSider.vue";
export default {
  name: "App",
  components: {
    VSider,
  },
  data() {
    return {};
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background: #000;
}

.el-container {
  height: 100vh;
}

.el-container .el-main {
  padding: 0;
  margin-top: 60px;
}

.el-container .el-menu {
  border: none;
}
div {
  color: #fff;
}
</style>