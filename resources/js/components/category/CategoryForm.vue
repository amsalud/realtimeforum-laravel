<template>
    <v-container>
        <h1>Create a Category</h1>
        <v-form>
            <v-text-field
            label="Name"
            v-model="form.category"
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
    }
}
</script>