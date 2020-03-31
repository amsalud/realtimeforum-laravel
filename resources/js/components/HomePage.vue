<template>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-layout column align-center justify-center height="100%">
            <h1 class="white--text display-4">Laravel Forum</h1>
            <h4>Try it now!</h4>
        </v-layout>
    </v-parallax>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style>
    .v-parallax{
        height: calc(100vh - 108px) !important;
    }

    .v-parallax__image{
        bottom:19% !important;
    }
</style>