<template>
    <v-container>
        <v-form @submit.prevent="true">
      <v-text-field
        v-model="form.email"
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
                category: null,
                body:null
            },
            categories: null
        }
    },
    created(){
        axios.get('/api/category')
        .then(res=> this.categories = res.data.data)
        .catch(err=>console.log(err));
    }
}
</script>
<style scoped>
    @import '~simplemde/dist/simplemde.min.css';
</style>