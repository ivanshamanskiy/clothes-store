<script>

import CartItem from '../components/CartItem.vue';
import BaseHeading from '../components/ui/BaseHeading.vue';

export default {
    components: { CartItem, BaseHeading },
    data() {
        return {
            buttonIsActive: false,
        }
    },
    computed: {
        cart() {
            return this.$store.getters['cart/getCart'];
        },
        cartLength() {
            return this.$store.getters['cart/getCartLength'];
        }
    },
    methods: {
        submitForm() {
            if (!this.buttonIsActive) {
                return
            } else {
                this.$router.push('/cart/shipping')
            }
        },
        checkInput() {
            this.buttonIsActive = !this.buttonIsActive
        }
    }
}
</script>

<template>

<section>

        <base-heading v-if="cartLength === 0">Your cart is empty</base-heading>
        <div v-else class="cart-content">
            <base-heading class="cart-heading cart-heading_margin">Your cart</base-heading>
            <cart-item v-for="item in cart" 
            :key="item.product" 
            :title="item.product"
            :qty="item.quantity">
            </cart-item>
            <base-button class="btn-margin" :class="{disabled: !this.buttonIsActive}" @click="submitForm">Confirm</base-button>
            <form>
                <input id="checkbox" type="checkbox" @change="checkInput">
                <label for="checkbox">I agree with terms and conditions</label>
            </form>
        </div>
    
</section>


</template>

<style scoped lang="scss">

@import '../styles/variables.scss';
.cart-content {
    display: grid;
    gap: 1.2rem;
    padding: 3rem 4.5rem;
}

.disabled {
    background-color: $bgGrey;
}

.cart-heading_margin {
    margin-bottom: 2rem;
}

.btn-margin {
    margin-top: 2rem;
}

form {
    display: flex;
}

input {
    margin-right: 0.8rem;
}

label {
    font-size: 1.2rem;
    color: #fff;
}

</style>