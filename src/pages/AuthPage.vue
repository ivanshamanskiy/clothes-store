<script>
import BaseButton from '../components/ui/BaseButton.vue'
import FormError from '../components/ui/FormError.vue'
export default {
  components: { BaseButton, FormError },
  data() {
    return {
        login: {
            val: '',
            isValid: true
        },
        password: {
            val: '',
            isValid: true
        },
        formIsValid: true,
        stateLogIn: true,
        error: null,
        isLoading: false
    }
  },
  methods: {
    toggleAuthMode() {
        this.stateLogIn = !this.stateLogIn
    },
    async submitForm() {
        this.validateForm();

        if (!this.formIsValid) return

        try {
            this.isLoading = true;
            if (!this.stateLogIn) {

                await this.$store.dispatch('auth/signUp', {
                    login: this.login.val,
                    password: this.password.val,
                })
            } else {
                await this.$store.dispatch('auth/logIn', {
                    login: this.login.val,
                    password: this.password.val
                })
            }
            this.isLoading = false;
            this.login = '';
            this.password = '';
            this.$router.replace('/')
        } catch(err) {
            this.isLoading = false;
            this.error = err.message;
        }
    },
    validateForm() {
        this.formIsValid = true
        if (this.login.val === '') {
            this.error = 'One of the form fields is empty. Please fill in both fields'
            this.login.isValid = false;
            this.formIsValid = false;
        }
        if (this.password.val === '') {
            this.error = 'One of the form fields is empty. Please fill in both fields'
            this.password.isValid = false;
            this.formIsValid = false;
        }
    },
    logOut() {
        this.$store.dispatch('auth/logOut')
    }

  }
}
</script>

<template>
    
    <section>
        <base-spinner v-if="isLoading"></base-spinner>
        <div v-else>
        <div class="success-block" v-if="!stateLogIn && this.$store.getters['auth/getToken'] !== null">
            <base-heading class="success-block__heading">You are successfully signed up</base-heading>
            <base-button class="base-button_margin" @click="logOut">Log out</base-button>
        </div>
        <div class="success-block" v-else-if="stateLogIn && this.$store.getters['auth/getToken'] !== null">
            <base-heading class="success-block__heading">You are successfully logged in</base-heading>
            <base-button class="base-button_margin" @click="logOut">Log out</base-button>
        </div>
        <div v-else class="section-content">
            <div class="form-container">
                <base-heading class="heading heading_margin">Welcome to the store</base-heading>
                    <form class="form-container__form " @submit.prevent="submitForm">
                        <input
                            id="email"
                            placeholder="Email"
                            @focus="this.error = null"
                            v-model="login.val"
                            class="form-container__input"  
                        />
                        <input 
                            id="password" 
                            placeholder="Password"
                            @focus="this.error = null"
                            v-model="password.val" 
                            class="form-container__input" 
                        />
                        <form-error :error="this.error"></form-error>
                        <base-button class="base-button_margin">{{ this.stateLogIn ? 'Log in' : 'Sign up' }}</base-button>
                    </form>
            </div>
            <p class="sign-up sign-up_margin">or <span @click="toggleAuthMode">{{!this.stateLogIn ? 'log in' : 'sign up'}}</span></p>
        </div>
        </div>
    </section>

</template>

<style scoped lang="scss">

@import '../styles/variables.scss';

@mixin centered {
    margin-left: auto;
    margin-right: auto;
}

section {
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 3rem 4.5rem;
}

.section-content {
    display: grid;
    justify-content: center;
}

.heading {
    position: relative;
    top: -20%;
    left: 0;
}

.form-container {
    position: relative;
    display: grid;
    justify-content: center;
    row-gap: 2rem;
    margin-top: 3rem;
}


.heading_margin {
    @include centered;
}

.form-container__form {
    display: inline-grid;
    // margin-left: auto;
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

    @include centered;
}

.form-container__input:focus {
    outline: 2px solid $accent;
}

.form-container__btn {
    display: inline-block;
    border: none;
    height: 4.1rem;
    width: 12.3rem;
    background-color: $accent;
    color: #fff;
    font-size: 1.8rem;
    text-transform: uppercase;
    border-radius: 10px;

    @include centered;
}
.base-button_margin {
    margin-top: 1.2rem;
    transition: all 0.3 ease;

    margin-left:auto;
    margin-right: auto;
}

.sign-up {
    display: inline-block;
    @include centered;

    font-size: 1.8rem;
    line-height: 2.2rem;
    color: #fff;
    width: 13.2rem;
    text-align: center;
}

.sign-up > span {
    text-decoration: underline;
    text-underline-offset: 2px;
    cursor: pointer;
}

.sign-up_margin {
    margin-top: 2.8rem;
}

.success-block__heading {
    margin-bottom: 2rem;
}


@media screen and (min-width: 750px) {

    // section {
    //     padding: 6rem 4.5rem;
    //     display: grid;
    //     justify-content: center;
    // }

    // .heading_margin {
    //     // transform: translateX(10%);
    // }
    // .form-container__input {
    //     width: 60%;
    // }

    // .form-container__form {
    //     row-gap: 2.2rem;
    // }

    // .sign-up {
    //     width: 16.2rem;
    //     font-size: 2.4rem;
    // }
}

</style>