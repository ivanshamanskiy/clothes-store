import { createRouter, createWebHistory } from 'vue-router';
import store from './store/index.js'

import MainPage from './pages/MainPage.vue';
import AuthPage from './pages/AuthPage.vue';
import CartPage from './pages/CartPage.vue';
import ShippingPage from './pages/ShippingPage.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/auth', component: AuthPage },
    { path: '/cart', component: CartPage, meta: { authRequired: true} },
    { path: '/cart/shipping', component: ShippingPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(function(to, _, next) {
    if(to.meta.authRequired && !store.getters['auth/isAuthenticated']) {
        next('/auth')
    } else {
        next()
    }
})

export default router;