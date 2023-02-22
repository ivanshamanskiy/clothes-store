import { createStore } from 'vuex';

// importing modules
import itemsModule from './modules/items/index.js';
import authModule from './modules/auth/index.js';
import cartModule from './modules/cart/index.js';

const store = createStore({
    modules: {
        items: itemsModule,
        auth: authModule,
        cart: cartModule
    },
    // state() {
    //     isLoading: false;
    // },
    // mutations: {
    //     setIsLoading(state) {
    //         state.isLoading = !state.isLoading;
    //     },
    // },
    // getters: {
    //     isLoading(state) {
    //         return state.isLoading;
    //     }
    // }
})

export default store;