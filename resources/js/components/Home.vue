<template>
    <v-card>
        <app-toolbar></app-toolbar>
        <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" height="100vh">
            <v-container class="mt-10 mb-10 pa-5">
                <router-view></router-view>
            </v-container>
        </v-sheet>
        <app-footer></app-footer>
    </v-card>
</template>

<script>
import AppToolbar from './AppToolbar'
import AppFooter from './AppFooter'

export default {
    name: 'home',
    components : {
        AppToolbar,
        AppFooter
    }
}
</script>

<style scoped>

</style>