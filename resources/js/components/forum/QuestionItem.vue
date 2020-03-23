<template>
    <v-card class="mx-auto mt-3 mb-3">
        <router-link text :to="`/question/${question.slug}`" tag="v-card-title">
           {{question.title}}
        </router-link>
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

<style scoped>
    .v-card__title {
        cursor:pointer !important;
    }
</style>