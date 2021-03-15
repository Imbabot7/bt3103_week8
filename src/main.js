import Vue from 'vue'
import App from './App.vue'
import QuantityCounter from './QuantityCounter.vue'
import PageContent from './PageContent.vue'
import Routes from './routes.js'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.component('qtyCounter',QuantityCounter)
Vue.component('pgCont',PageContent)
Vue.use(VueRouter)

const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')
