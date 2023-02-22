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
    max-width: 60%;
    font-weight: 600;
    color: #fff;

    margin-left: 0;
    margin-right: 0;
}

@media screen and (min-width: 900px) {
    .cart-heading {
        font-size: 5rem;
    }
}

</style>