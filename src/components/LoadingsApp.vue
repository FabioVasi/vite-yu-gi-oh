<script>
    export default {
        name: 'LoadingsApp'
    }
</script>

<template>

    <div class="loading d-flex justify-content-center align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise icon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/></svg>
        <span class="fs-2 fw-bold load">Loading</span>
    </div>

</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;
    .icon{
        height: 30px;
        width: 30px;
    }
    .load{
        display: inline-block;
    }
</style>