<template>
    <fragment>
        <v-btn v-if="liked" icon small>
            <v-icon color="red">favorite</v-icon>
        </v-btn>
        <v-btn v-if="!liked" icon small>
            <v-icon>favorite</v-icon>
        </v-btn>    
    </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import User from '../../helpers/User'
export default {
    name: "ReplyLike",
    props: ['reply'],
    components : {
        Fragment
    },
    data(){
        return {
            liked: false
        }
    },
    created(){
        const userId = User.getId();
        if(this.reply.likes && this.reply.likes.length > 0){

        }
    },
    methods: {
        like(){

        },
        unlike(){

        }
    }
}
</script>