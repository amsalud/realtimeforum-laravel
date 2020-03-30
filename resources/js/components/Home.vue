<template>
    <fragment>
        <app-toolbar></app-toolbar>
            <div class="main-container mt-10 mb-10 pt-5 pb-5 overflow-y-auto" id="scrolling-techniques-7">
                <router-view></router-view>
            </div>
        <app-footer></app-footer>
    </fragment>
</template>

<script>
import Fragment from 'vue-fragment'
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
    .main-container{
        height: 100vh;
    }
</style>