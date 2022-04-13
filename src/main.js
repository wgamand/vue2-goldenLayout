import Vue from 'vue'
import App from './App.vue'
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'
import 'golden-layout/lib/jquery'
import VueGoldenLayout from '@/components/VueGoldenLayout'

Vue.component('vue-golden-layout', VueGoldenLayout)
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
}).$mount('#app')
