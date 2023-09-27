<script>
import { state } from '../state.js';

export default {
    name: 'ArchetypeSelection',
    emits: ['performSearch'],
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div class="container pt-5 pb-5 selectbox">
        <select class="border-0 rounded-2" name="archetypes" @change="$emit('performSearch')" id="archetypes" v-model="state.findArchetypes">
            <option value="" disabled>Archetypes</option>
            <option v-for="monsterArchetype in monsterArchetypes" :value="monsterArchetype.archetype_name">{{monsterArchetype.archetype_name}}</option>
        </select>
    </div>
</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;
    select{
        width: 200px;
        height: 30px;
    }
</style>