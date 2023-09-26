<script>
import {state} from '../state.js';

export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    created() {
        state.fetchData();
    }
}
</script>

<template>

  <main id="main_yu_gi_oh">

    <section>
        <div class="container pt-5 pb-5">
            <select class="border-0 rounded-2" name="archetype">
                <option>Alien</option>
            </select>
        </div>
        
        <div class="lamincards container p-5">

            <div class="found container d-flex align-items-center">
                <h4 class="text-white">Found {{state.base_url.length}} cards</h4>
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
                <div class="col" v-for="monster in state.monsters">
                    <div class="card rounded-0 border-0 h-100">
                        <img class="w-100" :src="monster.card_images[0].image_url" alt="">
                        <div class="card-body rounded-0 border-0 text-center">
                            <h3 class="text-white">{{monster.name}}</h3>
                            <h5>{{monster.archetype}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  
</main>

</template>

<style lang="scss" scoped>
    @use '../assets/scss/partials/variables.scss' as *;
    select{
        width: 150px;
        height: 30px;
    }
    .found{
        background-color: $bg_card_finder;
        height: 3rem;
    }
    .lamincards{
        background-color: white;
    }
    .card{
        background-color: $bg_body;
    }

</style>