import Vue from 'vue'
import App from './App.vue'
import ZkButton from './components/button.vue'
Vue.config.productionTip = false
Vue.component(ZkButton.name, ZkButton)
new Vue({
  render: h => h(App)
}).$mount('#app')
