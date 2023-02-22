<script>
    export default {
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
                error: null
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
            }
        },
        methods: {
            submitForm() {
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

                try {
                    this.$store.dispatch('cart/sendOrder', {
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
    <div v-if="isSent">
        <svg>
            <use></use>
        </svg>
        <base-heading>Congrats! We received your order</base-heading>
        <div>
            <p>Order content: {{ this.$store.getters['cart/getOrder'] }}</p>

        </div>
    </div>
    <div v-else>
        <base-heading>Shipping Info</base-heading>
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
            <base-button>Submit</base-button>
        </form>
    </div>
</section>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';
.cart-content {
    display: grid;
    justify-content: center;
    gap: 1.2rem;
    padding: 3rem 4.5rem;
}

.form-container__form {
    display: grid;
    row-gap: 1.8rem;
}

.form-container__input {
    display: inline-block;
    height: 6.1rem;
    width: 27.7rem;
    border-radius: 10px;
    border: none;
    background-color: $bgGrey;
    padding: 0 1rem;
    font-size: 1.6rem;
}

.form-container__textarea {
    display: inline-block;
    height: 8.8rem;
    width: 27.7rem;
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
</style>