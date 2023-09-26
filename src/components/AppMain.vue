<script>
import axios from 'axios';

export default {
    name: 'AppMain',
    data() {
        return {
            base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
            monsters: null
        }
    },
    created() {
        axios
        .get(this.base_url)
        .then(response => {
            console.log(response);
            this.monsters = response.data.data
        })
        .catch(error => {
            console.error(error);
        })
    }
}
</script>

<template>

  <main id="main_yu_gi_oh" class="mt-4">

    <div class="container">
        <div class="row row-cols-1 row-cols-sm-3">
            <div class="col" v-for="monster in monsters">
                <div class="card">
                    <img :src="monster.card_images" alt="">
                    <div class="card-body">

                    </div>
                </div>
            </div>
        </div>
    </div>
  
</main>

</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;



</style>