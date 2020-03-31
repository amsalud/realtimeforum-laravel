<template>
    <v-container fluid grid-list-md>
        <v-layout>
            <v-flex xs8>
                <question-item v-for="(question, index) in questions" :key="index" :question="question"></question-item>
                <div class="text-center">
                    <v-pagination v-model="pagination.current_page" :length="pagination.last_page" circle @input="fetchData"></v-pagination>
                </div>
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
            questions: null,
            pagination: {
                current_page:1
            }
        }
    },
    created(){
        this.fetchData();
        this.setupEchoListeners();
    },
    methods: {
        fetchData(){
            axios.get(`/api/question?page=${this.pagination.current_page}`)
            .then(res=>{
                this.questions = res.data.data;
                this.pagination = res.data.meta;
            })
            .catch(err=>console.log(err));
        },
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