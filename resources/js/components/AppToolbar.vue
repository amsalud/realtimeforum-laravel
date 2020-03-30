<template>

    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <router-link to="/" tag="v-toolbar-title">
        Laravel Forum
      </router-link>
      <v-spacer></v-spacer>
      <app-notification></app-notification>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn  v-for="(item, index) in items" :key="index" :to="item.to" text medium v-show="item.show">{{item.title}}</v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon @click="openDrawer" class="d-lg-none d-md-none"></v-app-bar-nav-icon>
     
    </v-app-bar>
</template>

<script>

import User from '../helpers/User'
import AppNotification from './AppNotification'
import MenuItems from '../helpers/MenuItems'

export default {
    name: "AppToolbar",
    components :{
      AppNotification
    },
    data(){
      return {
        items: MenuItems.initialize(),
      }
    },

    created(){
      EventBus.$on('logout', ()=> { 
        User.logout();
        this.items = MenuItems.initialize();
      });

      EventBus.$on('login', ()=> { 
        this.items = MenuItems.initialize();
      });
    },
    methods: {
      openDrawer(){
        EventBus.$emit('drawer-toggle', true);
      }
    }
}
</script>

<style scoped>
  .v-toolbar__title{
    cursor:pointer;
  }
</style>