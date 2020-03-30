<template>
    <fragment>
        <app-toolbar></app-toolbar>
        <div class="main-container mt-10 mb-10 pt-5 pb-5 overflow-y-auto" id="scrolling-techniques-7">
            <router-view></router-view>
            <app-drawer></app-drawer>
            <app-footer></app-footer> 
        </div>
    </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import AppToolbar from './AppToolbar'
import AppFooter from './AppFooter'
import AppDrawer from './AppDrawer'

export default {
    name: 'Home',
    components : {
        AppToolbar,
        AppFooter,
        AppDrawer,
        Fragment
    }
}
</script>

<style scoped>
    .main-container{
        height: calc(100vh - 20px);
    }
</style>