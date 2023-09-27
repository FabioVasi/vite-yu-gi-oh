<script>
import { state } from '../state.js';

export default {
    name: 'CardsItem',
    props: {
        monster: Object
    }
}
    
</script>
<template>

    <div class="col">
        <div class="card rounded-0 border-0 h-100">
            <img :src="monster.card_images[0].image_url" alt="">
            <div class="card-body rounded-0 border-0 text-center">
                <h3 class="text-white">{{monster.name}}</h3>
                <h5>{{monster.archetype}}</h5>
                <p>card market price: {{monster.card_prices[0].cardmarket_price}} €</p>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;
    .card{
        background-color: $bg_body;
    }
</style>