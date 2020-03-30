<template>
    <fragment>
        <v-btn v-if="liked" icon small @click="unlike">
            <v-icon color="red">favorite</v-icon>
        </v-btn>
        <v-btn v-if="!liked" icon small @click="like" :disabled="!userLoggedIn">
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
            liked: false,
            userLoggedIn: User.loggedIn()
        }
    },
    created(){
        if(this.reply.likes && this.reply.likes.length > 0){
           if(this.reply.likes.find(like=> like.user_id == User.getId())){
               this.liked = !this.liked;
           }
        }

        this.setupEchoListeners();
    },
    methods: {
        setupListeners(){
            EventBus.$on('logout', ()=> { 
                this.userLoggedIn = User.loggedIn();
            });

            EventBus.$on('login', ()=> { 
                this.userLoggedIn = User.loggedIn();
            });
        },

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
        },
        setupEchoListeners(){
            if(window.Echo){
                Echo.private('likeChannel').listen('.LikeEvent', (e) => {
                    if(this.reply.id == e.data.reply_id && e.type == 1){
                        this.reply.likes.push(e.data);
                    }
                    else if(this.reply.id == e.data.reply_id && e.type == 0){
                        const index = this.reply.likes.findIndex(like=> like.user_id == e.data.user_id);
                        this.reply.likes.splice(index, 1);
                    }
                });
            }
        }
    }
}
</script>