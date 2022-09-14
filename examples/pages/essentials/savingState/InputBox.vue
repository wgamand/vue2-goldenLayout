<template>
  <div ref="box" id="box"> 
    <input  type="text" :value="message" @change="handleChange" />
    <p id="p">输出: {{ message }}</p>
    <button id="btn" @click="handleClick">click</button>
  </div>
</template>

<script>

export default {
  name: 'InputBox',
  data() {
    return {
      message: 'ffafafa'
    }
  },
  methods: {
    handleClick() {
      console.log(1231)
    },
    handleChange(e) {
      this.message = e.target.value
      console.log(e.target.value)
    },
  }
}
</script>

<style>
</style>