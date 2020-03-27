<template>
    <v-container fluid>
        <v-btn class="mb-3" depressed :to="'/forum'">Back</v-btn>
        <v-card>
            <v-card-title>
                <div>
                    <div class="headline">
                        {{question.title}}
                    </div>
                    <span class="grey--text">{{question.user}} said {{question.created_at}}</span>
                </div>
                <v-spacer></v-spacer>
                <v-card-actions v-if="own">
                    <v-btn icon small :to="`/question/edit/${question.slug}`">
                        <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn icon small @click="deleteQuestion" >
                        <v-icon>delete</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-btn outlined v-if="question.replies">{{question.replies.length}} Replies</v-btn>
            </v-card-title>
            <v-card-text v-html="question.body"></v-card-text>
        </v-card>
        <reply-form v-if="userLoggedIn" :slug="question.slug"></reply-form>
        <reply-list :replies="question.replies" :question_slug="question.slug"></reply-list>
    </v-container>
</template>

<script>
import md from 'marked'
import User from '../../helpers/User'
import ReplyList from '../reply/ReplyList'
import ReplyForm from '../reply/ReplyForm'
export default {
name: "Question",
    components: {
        ReplyList,
        ReplyForm
    },
    data(){
        return {
            question: {}
        }
    },
    created(){
        axios.get(`/api/question/${this.$route.params.slug}`)
        .then(res=>{
            this.question = res.data.data
            this.question.body = md.parse(this.question.body);
        })
        .catch(err=> console.log(err));
    },
    computed: {
        own(){
            return this.question ? User.own(this.question.user_id): null;
        },
        userLoggedIn(){
            return User.loggedIn()
        }
    },
    methods : {
        deleteQuestion(){
            axios.delete(`/api/question/${this.question.slug}`)
            .then(res=> this.$router.push('/forum'))
            .catch(err=> console.log(err));
        }
    }
}
</script>