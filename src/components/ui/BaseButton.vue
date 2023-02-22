<script></script>

<template>
    <button class="base-btn"><slot>Submit</slot></button>
</template>

<style scoped lang="scss">
@import '../../styles/variables.scss';
.base-btn {
    display: inline-block;
    border: none;
    height: 5rem;
    width: 35%;
    background-color: $accent;
    color: #fff;
    font-size: 1.8rem;
    text-transform: uppercase;
    border-radius: 10px;
    cursor: pointer;
}

@media screen and (min-width: 900px) {
    
    .base-btn {
        height: 5rem;
        width: 25%;
    }
}

</style>