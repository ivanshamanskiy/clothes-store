<script>
export default {
    props: ['title', 'qty'],
    data() {
        return {
            
        }
    },
    methods: {
        // больше не нужны
        increment() {
            if (this.qty < 99) this.qty++;
        },
        decrement() {
            if (this.qty > 0) this.qty--;
        },
    }
}
</script>

<template>
<div class="cart-item" >
    <h3 class="cart-item__heading">{{ title }}</h3>
    <div class="cart-item__qty-container">
        <button class="cart-item__icon" @click="this.$store.dispatch('cart/decrement', {title: title, qty: qty, userId: this.$store.getters['auth/getUserId'], token: this.$store.getters['auth/getToken']})">
            <svg>
                <use href="../sprite.svg#minus"></use>
            </svg>
        </button>
        <span class="cart-item__qty">{{ qty }}</span>
        <button class="cart-item__icon" @click="this.$store.dispatch('cart/increment', {title: title, qty: qty, userId: this.$store.getters['auth/getUserId'], token: this.$store.getters['auth/getToken']})">
            <svg>
                <use href="../sprite.svg#plus"></use>
            </svg>
        </button>
    </div>
</div>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';
.cart-item {
    width: 70%;
    height: 5.1rem;
    border-radius: 5px;
    background-color: $bgGrey;

    display: flex;
    align-items: center;
    padding: 1.5rem 1.2rem;
}

.cart-item__heading {
    margin-right: auto;
    font-size: 1.8rem;
    line-height: 2.2rem;
    font-weight: 400;
}

.cart-item__qty-container {
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

.cart-item__qty {
    font-size: 1.8rem;
    line-height: 2.2rem;
    font-weight: 400;
}

.cart-item__icon {
    border: none;
    background: none;
}

svg {
    height: 2.4rem;
    width: 2.4rem;

    background-color: #fff;
    border-radius: 50px;
}

@media screen and (min-width: 900px) {

    .cart-item {
        height: 6.1rem;
    }

    .cart-item__heading,
    .cart-item__qty {
        font-size: 2rem;
    }

    svg {
        height: 2.8rem;
        width: 2.8rem;
    }
}

</style>