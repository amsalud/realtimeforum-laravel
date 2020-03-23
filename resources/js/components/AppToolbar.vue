<template>

    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-toolbar-title>Laravel Forum</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn  v-for="(item, index) in items" :key="index" :to="item.to" text medium v-show="item.show">{{item.title}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>

import User from '../helpers/User'
export default {
    name: "AppToolbar",
    data(){
      return {
        items: [
          {title: 'Forum', to: '/forum', show: true},
          {title: 'Ask Question', to: '/question', show: User.loggedIn()},
          {title: 'Category', to: '/category', show: User.loggedIn()},
          {title: 'Sign in', to: '/login', show: !User.loggedIn()},
          {title: 'Sign Out', to: '/logout', show: User.loggedIn()}
        ]
      }
    }
}
</script>