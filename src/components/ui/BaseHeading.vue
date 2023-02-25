<script></script>

<template>
    <h2 class="base-heading">
        <slot></slot>
    </h2>
</template>

<style scoped lang="scss">
.base-heading {
    font-size: 4.3rem;
    line-height: 5.2rem;
    width: 75%;
    max-width: 50rem;
    text-align: left;
    font-weight: 600;
    color: #fff;
}

@media screen and (max-width: 360px) {
    .base-heading {
        font-size: 4rem;
    }
}

@media screen and (min-width: 750px) {
    .base-heading {
        font-size: 5rem;
    }
}

</style>