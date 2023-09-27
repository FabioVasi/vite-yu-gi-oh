import {reactive} from 'vue';
import axios from 'axios';

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    archetypes_url : 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    monsters: null,
    monsterArchetype: '',
    archetype: '',
   
    fetchData(url) {
        console.log(this, this.base_url);
        console.log(this, this.archetypes_url);
        axios
        .get(url)
        .then(response => {
            console.log(response);
            this.monsters = response.data.data;
            this.monsterArchetype = response.data.archetypes;
        })
        .catch(error => {
            console.error(error);
        })
    }
})