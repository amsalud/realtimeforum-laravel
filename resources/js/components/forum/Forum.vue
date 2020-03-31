<template>
    <v-container fluid grid-list-md>
        <v-layout>
            <v-flex xs8>
                <question-item v-for="(question, index) in questions" :key="index" :question="question"></question-item>
            </v-flex>
            <v-flex>
                <sidebar></sidebar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import QuestionItem from './QuestionItem'
import Sidebar from './Sidebar'
export default {
    name: "Forum",
    components:{
        QuestionItem,
        Sidebar
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

        this.setupEchoListeners();
    },
    methods: {
        setupEchoListeners(){
            if(window.Echo){
                Echo.private('questionChannel').listen('.QuestionEvent',(e)=>{
                    if(e.type == 'create'){
                        this.questions.unshift(e.data);
                    }
                    else if(e.type == 'delete'){
                        const index = this.questions.findIndex(question=> question.id == e.data.id);
                        this.questions.splice(index, 1);
              
                    }
                    else if(e.type == 'update'){
                        const index = this.questions.findIndex(question=> question.id == e.data.id);
                        this.$set(this.questions, index, e.data);
                    }
                });
            }
        }
    }
}
</script>