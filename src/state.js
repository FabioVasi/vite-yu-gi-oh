import {reactive} from 'vue';
import axios from 'axios';

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    monsters: null,
    monsterArchetype: '',
   
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
    }
})