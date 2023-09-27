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
        <select class="border-0 rounded-2" name="archetypes" @change="$emit('performSearc')" id="archetypes" v-model="state.monsterArchetype">
            <option value="" disabled>Select Archetype</option>
            <option value="archetypes"></option>
        </select>
    </div>
</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;
    select{
        width: 150px;
        height: 30px;
    }
</style>