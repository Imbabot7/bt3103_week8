import Home from './PageContent.vue'
import Orders from './Orders.vue'
import Modify from './Modify.vue'
import Dashboard from './Dashboard.vue'

export default [
    { path: '/', component: Home },
    { path: '/orders', component: Orders },
    { path: '/Modify/:id', name: 'Modify', component: Modify, props: true},
    { path: '/dashboard', component: Dashboard }

]