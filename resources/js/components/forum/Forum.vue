<template>
    <v-container fluid grid-list-md>
        <v-layout>
            <v-flex xs8>
                <question></question>
            </v-flex>
            <v-flex>
                Sidebar
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Question from './Question'
export default {
    name: "Forum",
    components:{
        Question
    }
}
</script>