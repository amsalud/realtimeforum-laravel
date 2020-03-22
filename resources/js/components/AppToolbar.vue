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
        <router-link to="/forum">
          <v-btn text medium>Forum</v-btn>
        </router-link>
        <router-link to="/question">
          <v-btn text medium>Ask Question</v-btn>
        </router-link>
        <router-link to="/category">
          <v-btn text medium>Category</v-btn>
        </router-link>
        <router-link to="/login">
          <v-btn text medium>Sign In</v-btn>
        </router-link>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
    name: "AppToolbar"
}
</script>