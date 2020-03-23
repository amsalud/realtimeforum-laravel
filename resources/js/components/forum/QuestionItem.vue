<template>
    <v-card class="mx-auto mt-3 mb-3">
        <v-card-title>{{question.title}}</v-card-title>
        <v-card-subtitle class="pb-0 grey--text">{{question.user}} said {{question.created_at}}</v-card-subtitle>
        <v-card-text class="text--primary">
            <div>{{question.body}}</div>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: "QuestionItem",
    props: ['question']
}
</script>