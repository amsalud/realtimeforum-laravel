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
    </v-app-bar>
</template>

<script>

import User from '../helpers/User'
import AppNotification from './AppNotification'
export default {
    name: "AppToolbar",
    components :{
      AppNotification
    },
    data(){
      return {
        items: this.initializeMenuItems()
      }
    },

    created(){
      EventBus.$on('logout', ()=> { 
        User.logout(this.$router);
        this.items = this.initializeMenuItems();
      });

      EventBus.$on('login', ()=> { 
        this.items = this.initializeMenuItems();
      });
    },
    methods: {
      initializeMenuItems:() => ([
          {title: 'Forum', to: '/forum', show: true},
          {title: 'Ask Question', to: '/question/ask', show: User.loggedIn()},
          {title: 'Category', to: '/category', show: User.loggedIn()},
          {title: 'Sign in', to: '/login', show: !User.loggedIn()},
          {title: 'Sign Out', to: '/logout', show: User.loggedIn()}
        ])
    }
}
</script>