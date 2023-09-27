<script>

    
</script>
<template>
    <div class="col" v-for="monster in state.monsters">
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

<style lang="scss" scoped>

</style>