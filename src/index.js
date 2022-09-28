
import VueGoldenLayout from './components/VueGoldenLayout.vue'
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'

export default {
  install (Vue) {
    Vue.component(VueGoldenLayout.name, VueGoldenLayout)
  }
}