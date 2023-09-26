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

        <section v-if="state.monsters">
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
                            <img :src="monster.card_images[0].image_url" alt="">
                            <div class="card-body rounded-0 border-0 text-center">
                                <h3 class="text-white">{{monster.name}}</h3>
                                <h5>{{monster.archetype}}</h5>
                            </div>
                        </div>
                    </div>
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
    .icon{
        height: 30px;
        width: 30px;
    }
    .load{
        display: inline-block;
    }
</style>