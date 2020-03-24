<template>
    <v-container>
        <v-form @submit.prevent="create">
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
    name: "CreateQuestion",
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
            errors: null
        }
    },
    created(){
        axios.get('/api/category')
        .then(res=> this.categories = res.data.data)
        .catch(err=>console.log(err));
    },
    methods:{
        create(){
            axios.post('/api/question', this.form)
            .then(res=>console.log(res.data))
            .catch(err=>this.errors = err.response.data.error);
        }
    }
}
</script>
<style scoped>
    @import '~simplemde/dist/simplemde.min.css';
</style>