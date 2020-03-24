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

      <v-btn
        color="success"
        class="mr-4"
        type="submit"     
      >Ask</v-btn>
    </v-form>
    </v-container>
</template>

<script>
export default {
    name: "CreateQuestion",
    data(){
        return {
            form: {
                title: null,
                category: null
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