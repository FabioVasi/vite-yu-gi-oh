<script>
import {state} from '../state.js';
import CardsList from './CardsList.vue';
import ArchetypeSelection from './ArchetypeSelection.vue';

export default {
    name: 'AppMain',
    components: {
        CardsList,
        ArchetypeSelection
    },
    data() {
        return {
            state
        }
    },
    methods: {
        selectArchetype() {
            console.log('searching...', state.monsterArchetype);
        }
    },
    created() {
        state.fetchData(state.base_url);
    }
}
</script>

<template>

    <main id="main_yu_gi_oh">

        

        

           
  
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