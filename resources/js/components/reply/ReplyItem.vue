<template>
    <v-card class="ma-3">
        <v-card-title>
            <div class="headline">{{reply.user}}</div>
            <div class="grey--text ml-2"> said {{reply.created_at}}</div>
            <v-card-actions v-if="own" class="align-end ml-auto">
                <reply-like :reply="reply"></reply-like>
                <v-btn icon small :to="`/question/${question_slug}/reply/${reply.id}/edit`">
                    <v-icon>edit</v-icon>
                </v-btn>
                <v-btn icon small @click="deleteReply">
                    <v-icon>delete</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card-title>
         
        <v-card-text v-html="bodyContent"></v-card-text>
    </v-card>
</template>

<script>
import md from 'marked'
import User from '../../helpers/User'
import ReplyLike from './ReplyLike'

export default {
    name: "ReplyItem",
    props: ['reply', 'question_slug'],
    components:{
        ReplyLike
    },
    data(){
        return{
            own: User.own(this.reply.user_id),
        }
    },
    computed: {
        bodyContent(){
            return this.reply ? md.parse(this.reply.reply) : '';
        }
    },
    methods: {
        deleteReply(){
            axios.delete(`/api/question/${this.question_slug}/reply/${this.reply.id}`)
            .then((res)=>EventBus.$emit('reply-deleted', this.reply))
            .catch(err=>console.log(err));
        }
    }
}
</script>