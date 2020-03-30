<template>
    <v-container>
        <reply-item v-for="(item) in replies" :key="item.id" :reply="item" :question_slug="question_slug"></reply-item>
    </v-container>
</template>

<script>
import ReplyItem from './ReplyItem'
import User from '../../helpers/User'
export default {
    name: "ReplyList",
    components: {
        ReplyItem
    }, 
    props: ['replies', 'question_slug'],
    created(){
        this.setupListeners();
        this.setupEchoListeners();
    },
    methods: {
        setupListeners(){
            EventBus.$on('reply-created', (reply)=>{
                this.replies.unshift(reply);
            });
            EventBus.$on('reply-deleted', (reply)=>{
                const index = this.replies.findIndex((item)=> item.id == reply.id );
                this.replies.splice(index, 1);
            });
        },
        setupEchoListeners(){
            if(window.Echo){
                Echo.private('App.User.' + User.getId()).notification((notification) => {
                    this.replies.unshift(notification.reply);
                    EventBus.$emit('new-notification', notification);
                });
            }
        }
    }
}
</script>