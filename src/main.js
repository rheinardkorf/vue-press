import posts from './TempData'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'
import Views from './ViewController'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Views('Home') },
        { path: '/about', component: Views('About') },
        { path: '/blog', component: Views('Blog') },
        { path: '/contact', component: Views('Contact') },
        { path: '*', component: Views('Hello') }
    ]
})

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
