import Vue from 'vue'
import App from './App.vue'
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'
import 'golden-layout/lib/jquery'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
 
}).$mount('#app')
