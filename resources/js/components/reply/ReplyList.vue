<template>
    <v-container>
        <reply-item v-for="(item) in replies" :key="item.id" :reply="item" :question_slug="question_slug"></reply-item>
    </v-container>
</template>

<script>
import ReplyItem from './ReplyItem'
export default {
    name: "ReplyList",
    components: {
        ReplyItem
    }, 
    props: ['replies', 'question_slug'],
    created(){
        this.setupListeners();
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
    }
}
</script>