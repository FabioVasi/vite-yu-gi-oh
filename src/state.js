import {reactive} from 'vue';
import axios from 'axios';

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    archetype_url: '',
    monsters: null,
    monsterArchetypes: null,
    findArchetypes: '',
   
    fetchData(url) {
        console.log(this, this.base_url);
        axios
        .get(url)
        .then(response => {
            console.log(response);
            this.monsters = response.data.data;
        })
        .catch(error => {
            console.error(error);
        })
    },
    fetchArch() {
        this.archetype_url = 'https://db.ygoprodeck.com/api/v7/archetypes.php';
        axios(this.archetype_url)
        .then(response => {
            this.monsterArchetypes = response.data;
        })
    }
})