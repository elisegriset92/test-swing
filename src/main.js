import Vue from 'vue'
import App from './App.vue'
import VueSwing from 'vue-swing'

Vue.component('vue-swing', VueSwing)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
