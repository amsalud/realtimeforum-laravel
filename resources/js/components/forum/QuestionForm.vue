<template>
    <v-container>
    <v-btn v-if="editMode" class="mb-3" depressed :to="`/question/${this.$route.params.slug}`">Back</v-btn>    
    <h1 v-if="!editMode">Ask a question</h1>    
    <h1 v-if="editMode">Edit a question</h1>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="form.title"
        label="Title"
        type="text"
      ></v-text-field>

    <v-autocomplete
        v-model="form.category_id"
        :items="categories"
        item-text="name"
        item-value="id"
        label="Category"
        placeholder="Select a Category"
      ></v-autocomplete>
     <vue-simplemde v-model="form.body" ref="markdownEditor" />

      <v-btn
        color="success"
        class="mr-4"
        type="submit"     
      >Submit</v-btn>
    </v-form>
    </v-container>
</template>

<script>
import VueSimplemde from 'vue-simplemde'

export default {
    name: "QuestionForm",
    components : {
        VueSimplemde
    },
    data(){
        return {
            form: {
                title: null,
                category_id: null,
                body:null
            },
            categories: null,
            errors: null,
            editMode:false
        }
    },
    created(){
        if(this.$route.params.slug){
            this.editMode = true;
            axios.get(`/api/question/${this.$route.params.slug}`)
            .then(res=> {
                const { title, body, category_id } = res.data.data;
                this.form = {
                    title, 
                    category_id, 
                    body
                };
            })
            .catch(err=>console.log(err));
        }

        axios.get('/api/category')
        .then(res=> this.categories = res.data.data)
        .catch(err=>console.log(err));
    },
    methods:{
        handleSubmit(){
            if(this.editMode){
                this.editQuestion();
            }
            else{
                this.createQuestion();
            }
        },
        createQuestion(){
            axios.post('/api/question', this.form)
            .then(res=>this.$router.push(`/question/${res.data.slug}`))
            .catch(err=>this.errors = err.response.data.error);
        },
        editQuestion(){
            axios.put(`/api/question/${this.$route.params.slug}`, this.form)
            .then(res=> this.$router.push(`/question/${res.data.slug}`))
            .catch(err=> console.log(err));
        }
    }
}
</script>
<style scoped>
    @import '~simplemde/dist/simplemde.min.css';
</style>