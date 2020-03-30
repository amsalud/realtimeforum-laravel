<template>
    <fragment>
        <app-toolbar></app-toolbar>
            <div class="main-container mt-10 mb-10 pt-5 pb-5 overflow-y-auto" id="scrolling-techniques-7">
                <router-view></router-view>
                      <app-footer></app-footer>
            </div>
  
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
        height: calc(100vh - 20px);
    }
</style>