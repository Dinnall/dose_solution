import Vue from 'vue'
import App from './App.vue'

require("./mainApp.js");

new Vue({
  el: '#app',
  render: h => h(App)
})