<template>
    <v-container fluid grid-list-md>
        <v-layout>
            <v-flex xs8>
                <question v-for="(question, index) in questions" :key="index" :question="question"></question>
            </v-flex>
            <v-flex>
                Sidebar
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Question from './Question'
export default {
    name: "Forum",
    components:{
        Question
    },
    data(){
        return {
            questions: null
        }
    },
    created(){
        axios.get('/api/question')
        .then(res=>this.questions = res.data.data)
        .catch(err=>console.log(err));
    }
}
</script>