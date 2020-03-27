<template>
    <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
         <v-btn icon>
            <v-icon v-on="on">notifications</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>Notification</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
    name: "AppNotification"
}
</script>