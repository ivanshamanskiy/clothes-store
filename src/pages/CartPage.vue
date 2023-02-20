<script>

import CartItem from '../components/CartItem.vue';
import BaseHeading from '../components/ui/BaseHeading.vue';

export default {
    components: { CartItem, BaseHeading },
    computed: {
        cart() {
            return this.$store.getters['cart/getCart'];
        }
    }
}
</script>

<template>
<section>
    <base-heading v-if="cart.length === 0">Your cart is empty</base-heading>
    <div v-else class="cart-content">
        <base-heading class="cart-heading cart-heading_margin">Your cart</base-heading>
        <cart-item v-for="item in cart" 
        :key="item.product" 
        :title="item.product"
        :qty="item.quantity">
        </cart-item>
    </div>
</section>
</template>

<style scoped lang="scss">

.cart-content {
    display: grid;
    gap: 1.2rem;
    padding: 3rem 4.5rem;
}

.cart-heading {
    font-size: 5rem;
}

.cart-heading_margin {
    margin-bottom: 2rem;
}

</style>