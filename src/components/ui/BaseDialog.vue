<script>
export default {
    props: ['show', 'error'],
    methods: {
        closeDialog() {
            this.$emit('closeDialog')
        }
    }
}
</script>

<template>
<teleport to="body">
    <div v-if="show" class="backdrop"></div>
    <transition name="dialog">
    <dialog open v-if="show">
        <p>{{ error }}</p>
        <button @click="closeDialog">OK</button>
    </dialog>
    </transition>
</teleport>
</template>

<style scoped lang="scss">

@import '../../styles/variables.scss';
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
}

dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 21.9rem;
    width: 70%;
    z-index: 100;
    background-color: $bgGrey;
    border-radius: 14px;
    padding: 2rem 4rem;

}

p {
    font-size: 2.3rem;
    line-height: 2.8rem;
}

button {
    font-size: 3rem;
    border: none;
    color: #fff;
    background-color: $accent;
    padding: 0.7rem 2.7rem;
    border-radius: 14px;

    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}

.dialog-enter-active {
  transition: all 0.3s ease-in;
}

.dialog-leave-active {
  transition: all 0.3s ease-out;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
}

@media screen and (min-width: 900px) {
    dialog {
        width: 30%;
    }
}

</style>