import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import navbar from './navbar.vue'
import form from './form-input.vue'


// CSS

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
	el : "#navbar",
	render: h => h(navbar)
})

new Vue({
	el : "#form",
	render : h => h(form)
})

