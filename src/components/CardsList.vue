<script>
import { state } from '../state.js';
import CardsItem from './CardsItem.vue';

export default {
    name: 'CardsList',
    components: {
        CardsItem
    }
}
</script>
<template>

    <section>
            
        <div class="lamincards container p-5">

            <div class="found container d-flex align-items-center">
                <h4 class="text-white">Found {{state.base_url.length}} cards</h4>
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
                
                <CardsItem></CardsItem>

            </div>
        </div>

    </section>

</template>

<style lang="scss">

</style>