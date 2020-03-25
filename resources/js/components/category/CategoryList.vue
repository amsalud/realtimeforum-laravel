<template>
    <v-card class="mt-3">
        <v-toolbar>
            <v-toolbar-title>Categories</v-toolbar-title>
        </v-toolbar>
        <v-list>
            <v-list-item v-for="(category, index) in categories" :key="index">
                <v-list-item-content>
                    <v-list-item-title>{{category.name}}</v-list-item-title>
                </v-list-item-content>
                <v-card-actions v-if="allowEditing">
                    <v-btn icon small @click="editCategory(category)">
                        <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn icon small >
                        <v-icon>delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: "CategoryList",
    props: ['allowEditing'],
    data(){
        return {
            categories:null
        }
    },
    created(){
        axios.get('/api/category')
        .then(res=>this.categories = res.data.data)
        .catch(err=>console.log(err));

        this.setupListeners();
    },
    methods : {
        setupListeners(){
            EventBus.$on('category-created', (category)=> { 
                this.categories.unshift(category);
            });

            EventBus.$on('category-edited', (category)=> { 
                const index = this.categories.findIndex(item => item.id == category.id);
                this.$set(this.categories,index, category);
            });
        },
        editCategory(category){
            EventBus.$emit('edit-category', {...category});
        }
    }
}
</script>