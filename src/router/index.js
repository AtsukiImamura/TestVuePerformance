import Vue from 'vue'
import Router from 'vue-router'

// const Foo = () => import(/* webpackChunkName: "app" */'../components/Foo.vue')
// const Bar = () => import(/* webpackChunkName: "admin" */'../components/Bar.vue')
// const Baz = () => import(/* webpackChunkName: "admin" */'../components/Baz.vue')

import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'
import Baz from '../components/Baz.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar
    },
    {
      path: '/baz',
      component: Baz
    }
  ]
})

