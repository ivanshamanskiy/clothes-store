<script>
import ProductItem from '../components/ProductItem.vue';

export default {
    components: { ProductItem },
    computed: {
        tshirts() {
            return this.$store.getters['items/items'].filter(i => i.category === 't-shirts');
        },
        hoodies() {
            return this.$store.getters['items/items'].filter(i => i.category === 'hoodies');
        },
        tshirtsOn() {
            return this.$store.getters['items/tshirtsOn'];
        },
        hoodiesOn() {
            return this.$store.getters['items/hoodiesOn'];
        }
    }
}
</script>

<template>
    <section class="main-page main-page_content-centered">
            
                <div class="main-page__items-container" v-show="tshirtsOn" v-motion-fadee>
                    <product-item v-for="tshirt in tshirts"
                    :key="tshirt.id"
                    :id="tshirt.id"
                    :imgPath="tshirt.imgPath"></product-item>
                </div>
            
            
                <div class="main-page__items-container" v-show="hoodiesOn" v-motion-fade>
                    <product-item v-for="hoodie in hoodies"
                    :key="hoodie.id"
                    :id="hoodie.id"
                    :imgPath="hoodie.imgPath"></product-item>
                </div>               
            
    </section>
</template>

<style scoped lang="scss">

@import '../styles/variables.scss';

.main-page_content-centered {
    display: flex;
    justify-content: center;

    padding: 3rem 4.5rem;
}
.main-page__items-container {
    display: grid;
    width: 100%;
    row-gap: 2.2rem;
}

@media screen and (min-width: 600px) {
    .main-page__items-container {
        grid-template-columns: 1fr 1fr;
        column-gap: 2.8rem;
    }
}

</style>