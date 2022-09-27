import Vue from 'vue'
import App from './App.vue'
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'
import 'golden-layout/lib/jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import VueGoldenLayout from '@/components/VueGoldenLayout'
Vue.component('vue-golden-layout', VueGoldenLayout)

Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  render: h => h(App),
}).$mount('#app')
