<script>

    import OrderItem from '../components/ui/OrderItem.vue';

    export default {
        components: { OrderItem },
        data() {
            return {
                name: {
                    val: '',
                    isValid: ''
                },
                contact: {
                    val: '',
                    isValid: ''
                },
                address: {
                    val: '',
                    isValid: ''
                },
                comments: {
                    val: '',
                    isValid: ''
                },
                formIsValid: true,
                isSent: false,
                error: null,
                isLoading: false
            }
        },
        computed: {
            token() {
                return this.$store.getters['auth/getToken']
            },
            userId() {
                return this.$store.getters['auth/getUserId']
            },
            cart() {
                return this.$store.getters['cart/getCart']
            },
            order() {
                return this.$store.getters['cart/getOrder']
            }
        },
        methods: {
            async submitForm() {
                this.validateForm();

                if (this.formIsValid = false) {
                    return
                }

                let curTime = new Date().toLocaleString();

                const details = {
                    name: this.name.val,
                    contact: this.contact.val,
                    address: this.address.val,
                    comments: this.comments.val,
                    date: curTime
                }

                this.isLoading = true;

                try {
                    await this.$store.dispatch('cart/sendOrder', {
                        token: this.token,
                        userId: this.userId,
                        cart: this.cart,
                        details: details
                    })
                    this.isSent = true
                    
                    // this.$store.dispatch('cart/clearCart');

                } catch(err) {
                    this.error = err.message;
                }

                this.isLoading = false;
            },
            validateForm() {
                this.formIsValid = true
                if (this.name.val === '') {
                    this.error = 'One of the required form fields is empty. Please fill in both fields'
                    this.name.isValid = false;
                    this.formIsValid = false;
                }
                if (this.contact.val === '') {
                    this.error = 'One of the required form fields is empty. Please fill in both fields'
                    this.password.isValid = false;
                    this.formIsValid = false;
                }
                if (this.address.val === '') {
                    this.error = 'One of the required form fields is empty. Please fill in both fields'
                    this.address.isValid = false;
                    this.formIsValid = false;
                }
            }
        }
    }
</script>

<template>
<section class="cart-content">
    <base-spinner v-if="isLoading"></base-spinner>
    <div class="success-container" v-else-if="isSent">
            <svg>
                <use href="../sprite.svg#tick"></use>
            </svg>
            <base-heading>Congrats! We've received your order</base-heading>
            <div class="success-container__content">
                <h4>Order content:</h4>
                <order-item v-for="item in order" 
                :key="item.product" 
                :product="item.product"
                :quantity="item.quantity"
                >
                </order-item>
            </div>
    </div>
        <div class="form-container" v-else>
            <base-heading class="heading-margin">Shipping Info</base-heading>
            <form class="form-container__form" @submit.prevent="submitForm">
                <input
                    id="name"
                    placeholder="Name"
                    v-model="name.val"
                    class="form-container__input" 
                />
                <input
                    id="contact"
                    placeholder="Contact"
                    v-model="contact.val"
                    class="form-container__input" 
                />
                <textarea
                    id="address"
                    placeholder="Address"
                    v-model="address.val"
                    class="form-container__textarea" 
                ></textarea>
                <textarea
                    id="comments"
                    placeholder="Comments"
                    v-model="comments.val"
                    class="form-container__textarea" 
                ></textarea>
                <form-error :error="this.error"></form-error>
                <base-button class="btn-margin">Submit</base-button>
            </form>
        </div>
</section>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';

// form
.cart-content {
    display: grid;
    place-items: center;
    gap: 1.2rem;
    padding: 3rem 4.5rem;
}

.form-container__form {
    display: grid;
    row-gap: 1.8rem;
    width: 100%;
}

.form-container__input {
    display: inline-block;
    height: 6.1rem;
    // width: 32.7rem;
    width: 95%;
    border-radius: 10px;
    border: none;
    background-color: $bgGrey;
    padding: 0 1rem;
    font-size: 1.6rem;
}

.form-container__textarea {
    display: inline-block;
    height: 8.8rem;
    width: 95%;
    border-radius: 10px;
    border: none;
    background-color: $bgGrey;
    padding: 1rem 1rem;
    font-family: $Inter, sans-serif;
    font-size: 1.6rem;
}

.form-container__input:focus,
.form-container__textarea:focus {
    outline: 2px solid $accent;
}

.form-container__input:focus {
    outline: 2px solid $accent;
}

.heading-margin {
    margin-bottom: 2rem;
}

.btn-margin {
    margin-top: 1rem;
}

// success

.success-container {
    display: grid;
    gap: 2rem;
    align-items: center;
    color: #fff;
}

.success-container__content {
    display: grid;
    gap: 1.2rem;
}

.success-container__content > h4 {
    font-size: 3rem;
    font-weight: 400;
}

svg {
    height: 12.2rem;
    width: 12.2rem;

    stroke-width: 0.5px;
}

@media screen and (min-width: 750px) {
    .form-container {
        display: grid;
        grid-template-columns: 4fr 6fr;
        column-gap: 1.8rem;
    }

    .heading-margin {
        margin-bottom: 0;
    }
}

</style>