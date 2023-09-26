<script>
export default {
  data() {
    return {
      name: 'AppHeader'
    }
  }
}
</script>

<template>

  <header id="header_yu_gi_oh" class=" d-flex align-items-center">

    <div class="container d-flex justify-content-start align-items-center p-0">
      <img src="" alt="">
      <h1 class="m-0">Yu-Gi-Oh Api</h1>
    </div>
    
  </header>

</template>

<style lang="scss">
  @use '../assets/scss/partials/variables.scss' as *;

  #header_yu_gi_oh {
    height: 100px;
    background-color: #ffffff;
  }

</style>
