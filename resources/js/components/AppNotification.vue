<template>
    <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
         <v-btn icon>
            <v-icon v-on="on">notifications</v-icon>
            {{unreadCount ? unreadCount : ''}}
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="item in unread" :key="item.id">
        <router-link text :to="`/question/${item.data.slug}`" tag="v-list-item-title">
           {{item.data.question}}
        </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
import User from '../helpers/User';
export default {
    name: "AppNotification",
    data(){
        return{
            read: [],
            unread: [],
            unreadCount: 0
        }
    },
    created(){
        if(User.loggedIn()){
            this.getNotifications();
        }
    },
    methods: {
        getNotifications(){
            axios.post('/api/notifications')
            .then(res=>{
                this.read = res.data.read;
                this.unread = res.data.unread;
                this.unreadCount = res.data.unread.length;
            })
        }
    }
}
</script>
<style  scoped>
    .v-list-item{
        cursor:pointer;
    }
</style>