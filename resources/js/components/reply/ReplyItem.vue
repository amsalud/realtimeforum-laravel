<template>
    <v-card class="ma-3">
        <v-card-title>
            <div class="headline">{{reply.user}}</div>
            <div class="grey--text ml-2"> said {{reply.created_at}}</div>
            <v-card-actions v-if="own" class="align-end ml-auto">
                <v-btn icon small >
                    <v-icon>edit</v-icon>
                </v-btn>
                <v-btn icon small>
                    <v-icon>delete</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card-title>
         
        <v-card-text v-html="reply.reply"></v-card-text>
    </v-card>
</template>

<script>
import User from '../../helpers/User'
export default {
    name: "ReplyItem",
    props: ['reply'],
    data(){
        return{
            own: User.own(this.reply.user_id)
        }
    }
}
</script>