<script>
import {state} from '../state.js';
import CardsList from './CardsList.vue';
import ArchetypeSelection from './ArchetypeSelection.vue';
import LoadingsApp from './LoadingsApp.vue';

export default {
    name: 'AppMain',
    components: {
        CardsList,
        ArchetypeSelection,
        LoadingsApp
    },
    data() {
        return {
            state
        }
    },
    methods: {
        selectArchetype() {
            console.log('searching...', state.monsterArchetype);
            const url = this.state.archetypes_url + `?archetypes={this.state.monsterArchetype}`
            console.log(url);
            this.state.fetchData(url)
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
        <LoadingsApp v-else/>

  
    </main>

</template>

<style lang="scss" scoped>

    @use '../assets/scss/partials/variables.scss' as *;
    
</style>