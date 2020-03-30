<template>
    <div class="text-center">
    <v-menu offset-y v-if="userLoggedIn">
      <template v-slot:activator="{ on }">
         <v-btn icon>
            <v-icon v-on="on">notifications</v-icon>
            {{unreadCount ? unreadCount : ''}}
        </v-btn>
      </template>
      <v-list v-if="unread.length">
        <v-list-item v-for="item in unread" :key="item.id">
            <v-list-item-title @click="readNotification(item)">
                {{`${item.replied_by} replied in ${item.question}`}}
            </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
import User from '../helpers/User';
import Exception from '../helpers/Exception'

export default {
    name: "AppNotification",
    data(){
        return{
            read: [],
            unread: [],
            unreadCount: 0,
            userLoggedIn: User.loggedIn()
        }
    },
    created(){
        this.setupListeners();
        if(User.loggedIn()){
            this.getNotifications();
        }
    },
    methods: {
        setupListeners(){
            EventBus.$on('logout', ()=> { 
                this.userLoggedIn = User.loggedIn();
            });

            EventBus.$on('login', ()=> { 
                this.userLoggedIn = User.loggedIn();
                this.getNotifications();
            });

            EventBus.$on('new-notification', (data)=>{
                this.unread.push(data);
                this.unreadCount = this.unread.length;
            })
        },
        getNotifications(){
            axios.get('/api/notifications')
            .then(res=>{
                this.read = res.data.read;
                this.unread = res.data.unread;
                this.unreadCount = res.data.unread.length;
            })
            .catch(err=>Exception.handle(err, this.$router));
        },
        readNotification(notification){
            const payload = {
                id: notification.id
            };

            axios.post('/api/notification/markAsRead', payload)
            .then(res=> {
                this.unread.splice(notification, 1);
                this.read.push(notification);
                this.unreadCount -=1;
                this.$router.push(`/question/${notification.slug}`);
            })
            .catch(err=>console.log(err));
        }
    }
}
</script>
<style  scoped>
    .v-list-item{
        cursor:pointer;
    }
</style>