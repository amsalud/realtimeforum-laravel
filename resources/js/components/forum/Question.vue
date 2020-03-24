<template>
    <v-card>
        <v-container fluid>
            <v-card-title>
                <div>
                    <div class="headline">
                        {{question.title}}
                    </div>
                    <span class="grey--text">{{question.user}} said {{question.created_at}}</span>
                </div>
                <v-spacer></v-spacer>
                <v-card-actions>
                    <v-btn icon small>
                        <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn icon small>
                        <v-icon>delete</v-icon>
                    </v-btn>
                    <v-btn outlined>5 Replies</v-btn>
                </v-card-actions>
                
            </v-card-title>
            <v-card-text v-html="question.body"></v-card-text>
        </v-container>
    </v-card>
</template>

<script>
import md from 'marked'
export default {
    name: "Question",
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
    }
}
</script>