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
            console.log(state.monsterArchetypes);
            const url = this.state.base_url + `&archetype=${this.state.findArchetypes}`
            console.log(url);
            this.state.fetchData(url)
        }
    },
    created() {
        state.fetchData(state.base_url);
        state.fetchArch(state.archetype_url);
    }
}
</script>

<template>

    <main id="main_yu_gi_oh">

        <ArchetypeSelection @perform-search="selectArchetype"/>
        <CardsList v-if="state.monsters"/>
        <LoadingsApp v-else/>

    </main>

</template>

<style lang="scss" scoped>
    @use '../assets/scss/partials/variables.scss' as *;
</style>