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
            const url = this.state.base_url + `?archetypes={this.state.monsterArchetype}`
            console.log(url);
            this.state.fetchData(url)
            this.state.monsterArchetype = ''
        }
    },
    created() {
        state.fetchData(state.base_url);
    }
}
</script>

<template>

    <main id="main_yu_gi_oh">

        <ArchetypeSelection/>
        <CardsList  v-if="state.monsters"/>
        <div class="loading d-flex justify-content-center align-items-center" v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise icon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/></svg>
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