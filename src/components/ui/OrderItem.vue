<script>
export default {
    props: ['product', 'quantity']
}
</script>

<template>
    <div class="order-item">
        <p class="order-item__product">{{ product }}</p>
        <p class="order-item__quantity">{{ quantity }} pcs</p>
    </div>
</template>

<style scoped lang="scss">

.order-item {
    display: flex;
    font-size: 2.6rem;
}

.order-item__product {
    margin-right: 4.3rem;
}



</style>