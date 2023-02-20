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
    }
})

export default store;