<template>
    <v-container>
        <category-form></category-form>
        <category-list :allowEditing="true"></category-list>
    </v-container>
    
</template>

<script>
import CategoryList from './CategoryList'
import CategoryForm from './CategoryForm'
export default {
    name: "Category",
    components:{
        CategoryList,
        CategoryForm
    }
}
</script>