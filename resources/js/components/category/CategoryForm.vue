<template>
    <v-container>
        <h1>Create a Category</h1>
        <v-form @submit.prevent="handleSubmit">
            <v-text-field
            label="Name"
            v-model="form.name"
            >
        </v-text-field>
        <v-btn type="submit" color="success">Submit</v-btn>
    </v-form>
    </v-container>
    
</template>

<script>
export default {
    name: "CategoryForm",
    data(){
        return {
            form: {}
        }
    },
    methods: {
        handleSubmit(){
            this.createCategory();
        },
        createCategory(){
            axios.post('/api/category', this.form)
            .then(res=> this.$router.push('/forum'))
            .catch(err=> console.log(err));
        }
    }
}
</script>