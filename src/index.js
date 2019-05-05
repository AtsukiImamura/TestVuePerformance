
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Foo from './components/Foo.vue'
import router from './router/index.js'
import Vue from 'vue'

Vue.use(BootstrapVue)
new Vue({
  el: '#app',
  router,
  components: { Foo },
})
