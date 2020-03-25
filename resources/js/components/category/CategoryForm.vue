<template>
    <div> 
        <h1 v-if="this.mode == 'create'">Create a Category</h1>
        <h1 v-if="this.mode == 'edit'">Edit a Category</h1>
        <v-form @submit.prevent="handleSubmit">
            <v-text-field
            label="Name"
            v-model="form.name"
            >
            </v-text-field>
            <v-btn type="submit" color="success">Submit</v-btn>
            <v-btn @click="resetForm" :disabled="!form.name">Clear</v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "CategoryForm",
    data(){
        return {
            form: {},
            mode: 'create'
        }
    },
    created(){
        this.setupListeners();
    },
    methods: {
        setupListeners(){
            EventBus.$on('edit-category',(category)=>{
                this.form = category;
                this.mode = 'edit';
            });
        },
        handleSubmit(){
            switch(this.mode){
                case 'create':
                    this.createCategory();
                    break;
                case 'edit':
                    this.editCategory();
                    break;
            }
        },
        createCategory(){
            axios.post('/api/category', this.form)
            .then(res=> {
                EventBus.$emit('category-created', res.data);
                this.resetForm();
            })
            .catch(err=> console.log(err));
        },
        editCategory(){
            axios.put(`/api/category/${this.form.slug}`, this.form)
            .then(res=>{ 
                EventBus.$emit('category-edited', res.data);
                this.resetForm();
            })
            .catch(err=> console.log(err));
        },
        resetForm(){
            this.form = {};
            this.mode = 'create';
        }
    }
}
</script>