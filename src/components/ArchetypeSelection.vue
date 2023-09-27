<script>
import { state } from '../state.js';

export default {
    name: 'ArchetypeSelection',

}
</script>
<template>
    <div class="container pt-5 pb-5 selectbox">
        <select class="border-0 rounded-2" name="archetype" id="archetype">
            <option value="archetypes">Alien</option>
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