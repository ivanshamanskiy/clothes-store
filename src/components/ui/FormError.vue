<script>
export default {
        props: ['error']
    }
</script>

<template>

<transition name="error">
<div class="error-container" v-show="error">
    <p class="error">{{ error }}</p>
</div>
</transition>

</template>

<style scoped lang="scss">

@import '../../styles/variables.scss';
.error-container {
    display: inline-block;
    width: 27.7rem;
    padding: 0 1rem;

    margin-left: auto;
    margin-right: auto;
}

.error {
    font-size: 1.2rem;
    color: $error;
}

.error-enter-from,
.error-leave-to {
  opacity: 0;
}

.error-enter-active {
  transition: all 0.3s ease-in;
}

.error-leave-active {
  transition: all 0.3s ease-out;
}

.error-enter-to,
.error-leave-from {
  opacity: 1;
}

</style>