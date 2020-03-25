<template>
    <v-card class="mt-3">
        <v-toolbar>
            <v-toolbar-title>Categories</v-toolbar-title>
        </v-toolbar>
        <v-list>
            <v-list-item v-for="(item, index) in categories" :key="index">
                <v-list-item-content>
                    <v-list-item-title>{{item.name}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: "Sidebar",
    data(){
        return {
            categories:null
        }
    },
    created(){
        axios.get('/api/category')
        .then(res=>this.categories = res.data.data)
        .catch(err=>console.log(err));
    }
}
</script>