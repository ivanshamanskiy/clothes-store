export default {
    addToCart(state, payload) {

        let present;
        let qty;
            
        if (state.cart.length === 0) {
            return state.cart.push({
                    product: payload.product,
                    quantity: 1
            })
        } else {
            for (const el of state.cart) {
                if (el.product === payload.product) {
                    el.quantity++;
                    present = true;
                }
            }
        }

        if (!present) {
            state.cart.push({
                product: payload.product,
                quantity: 1
            })
        }

    },
    setCart(state, payload) {
        const cart = [];

        for (let el of payload.cart) {
            
            if (cart.length === 0) {
                cart.push({
                        product: el.product,
                        quantity: el.quantity
                })
            } else {
                let present;
                for (let [_,value] of Object.entries(cart)) {
                    if (value.product === el.product) {
                        value.quantity++
                        present = true;
                    }
                }
                if (!present) {
                    cart.push({
                        product: el.product,
                        quantity: el.quantity
                    })
                }
            }
        }

        state.cart = cart;
    },
    increment(state, payload) {
        for(let el of state.cart) {
            if (el.product === payload.product) {
                el.quantity++;
                console.log('added to state')
            }
        }
    },
    decrement(state, payload) {
        
        state.cart.forEach((val, i) => {
            if (val.product === payload.product) {
                val.quantity--;
                if (val.quantity === 0) {
                    state.cart.splice(i, 1);
                }
            }
        })
    },
    setOrder(state, payload) {
        state.order = payload.cart;
    },
    clearCart(state) {
        state.cart = [];
    }
}