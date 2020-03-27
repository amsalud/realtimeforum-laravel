<template>
    <fragment>
        <v-btn v-if="liked" icon small @click="unlike">
            <v-icon color="red">favorite</v-icon>
        </v-btn>
        <v-btn v-if="!liked" icon small @click="like">
            <v-icon>favorite</v-icon>
        </v-btn>    
        {{this.reply.likes.length ? this.reply.likes.length : ''}}
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
        if(this.reply.likes && this.reply.likes.length > 0){
           if(this.reply.likes.find(like=> like.user_id == User.getId())){
               this.liked = !this.liked;
           }
        }
    },
    methods: {
        like(){
            axios.post(`/api/like/${this.reply.id}`)
            .then(res=> {
                this.liked = !this.liked
                this.reply.likes.push(res.data);
            })
            .catch(err=> console.log(err));
        },
        unlike(){
             axios.delete(`/api/like/${this.reply.id}`)
            .then(res=>{ 
                this.liked = !this.liked
                const index = this.reply.likes.findIndex(like=> like.user_id == User.getId());
                this.reply.likes.splice(index, 1);

            })
            .catch(err=> console.log(err));
        }
    }
}
</script>