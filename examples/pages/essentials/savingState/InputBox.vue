<template>
  <div ref="box" id="box"> 
    <input id="input" type="text" :value="message" @change="handleChange" />
    <p id="p">输出: {{ message }}</p>
    <button id="btn" v-on:click="handleClick">click</button>
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
    transmit() {
      this.$bus.$on('transmit', (container, state) => {
        if (!this.$refs.box || state.text !== 'input-box') return
        let inputCopy = this.$refs.box.cloneNode(true)
        container.getElement().append(inputCopy)

        let a = inputCopy.children
        for (let i = 0; i < inputCopy.children.length; i++) {
          if (inputCopy.children[i].id === 'btn') {
            inputCopy.children[i].onclick = this.handleClick
          }
          else if (inputCopy.children[i].id === 'input') {
            inputCopy.children[i].addEventListener("change", (e) => {
              this.message = e.target.value
              console.log(this.message)
            })

          }
        }
    
      })

    },
  },
  mounted() {
    this.transmit()
  }
}
</script>

<style>
</style>