<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: 'AppMain'
    }
  },
  created() {
    axios
    .get(this.base_url)
    .then(response => {
        console.log(response);
    })
  }
}
</script>

<template>

  <main id="main_yu_gi_oh" class="mt-4">

    <section class="monsters">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-3">
                <div class="col">
                    <div class="card">
                        <img src="" alt="">
                        <div class="card-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
</main>

</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;



</style>