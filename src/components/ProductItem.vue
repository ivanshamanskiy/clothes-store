<script>
export default {
    props: ['imgPath', 'id'],
    data() {
        return {
            selectedItem: null,
            error: null
        }
    },
    computed: {
        userId() {
            return this.$store.getters['auth/getUserId'];
        },
        token() {
            return this.$store.getters['auth/getToken'];
        }
    },
    methods: {
        async addToCart() {
            try {
                await this.$store.dispatch('cart/addToCart', {
                userId: this.userId,
                token: this.token,
                product: this.selectedItem.id,
                quantity: 1
                })
            } catch(err) {
                this.error = err.message
                console.log(this.error)
            }
        },
        closeDialog() {
            this.error = null
        }
    },
    created() {
        this.selectedItem = this.$store.getters['items/items'].find(i => i.id === this.id);
    }
}
</script>

<template>
    <base-dialog :show="error" :error="this.error" @closeDialog="closeDialog"></base-dialog>
    <div class="product-item">
        <img :src="imgPath" />
        <div class="on-hover">
            <button class="on-hover__btn" @click="addToCart">Buy</button>
        </div>
    </div>
</template>

<style scoped lang="scss">

@mixin darken {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
}

@import '../styles/variables.scss';
.product-item {
    height: 21.7rem;
    width: 25.3rem;
    border-radius: 21px;
    background-color: $bgGrey;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    overflow: hidden;
}
img {
    width: 17.8rem;
}

.on-hover__btn {
    display: none;
}
.on-hover__btn {
    font-size: 4rem;
    border: none;
    color: #fff;
    line-height: 4.8rem;
    text-transform: uppercase;
    background-color: $accent;
    padding: 2rem 4.2rem;
    border-radius: 15px;
    display: none;
}
.product-item:hover > .on-hover  {
    display: flex;
    align-items: center;
    justify-content: center;
    @include darken;
}

.product-item:hover > .on-hover > .on-hover__btn {
    display: block;
}
</style>