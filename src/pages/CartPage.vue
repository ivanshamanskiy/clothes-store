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
        },
        isLoading() {
            return this.$store.getters['cart/isLoading']
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
        <base-spinner class="spinner" v-if="isLoading"></base-spinner>
        <div v-else>
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
        </div>
</section>


</template>

<style scoped lang="scss">

@import '../styles/variables.scss';

section {
    padding: 3rem 4.5rem;
    // height: calc(100vh - 12rem);
}

.spinner {
    // height: 100%;
}

.cart-content {
    display: grid;
    gap: 1.2rem;
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
    appearance: none;
    margin-right: 0.8rem;
    height: 2rem;
    width: 2rem;
    // border: 0.15rem solid #000;
    background-color: $bgGrey;

    display: grid;
    place-content: center;
}

input::before {
    content: "";
    width: 1.1rem;
    height: 1.1rem;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em $accent;
}

input:checked::before {
    transform: scale(1);
}

label {
    font-size: 1.6rem;
    color: #fff;
}

</style>