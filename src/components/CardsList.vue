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
    <section v-if="state.monsters">
            
        <div class="lamincards container p-5">

            <div class="found container d-flex align-items-center">
                <h4 class="text-white">Found {{state.base_url.length}} cards</h4>
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
                
                <CardsItem></CardsItem>

            </div>
        </div>
    </section>

    <div class="loading d-flex justify-content-center align-items-center" v-else>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise icon" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
        </svg>
        <span class="fs-2 fw-bold load">Loading</span>
    </div> 
</template>



<style lang="scss">

</style>