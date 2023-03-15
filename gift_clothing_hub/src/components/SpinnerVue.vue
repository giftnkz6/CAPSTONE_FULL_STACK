<template>
    <div class="pos">
        <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "SpinnerVue"
}
</script>

<style>
    .spinner-grow{
        width: 10rem;
        height: 10rem;
        color: yellow;
    }
    .pos{
        margin: auto;
        text-align: center;
    }
</style>