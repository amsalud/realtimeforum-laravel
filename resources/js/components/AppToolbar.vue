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
        <v-btn text medium>Forum</v-btn>
        <v-btn text medium>Ask Question</v-btn>
        <v-btn text medium>Category</v-btn>
        <v-btn text medium>Sign In</v-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
    name: "AppToolbar"
}
</script>