<template>
    <v-container>
        <reply-item v-for="(item, index) in replies" :key="index" :reply="item" :question_slug="question_slug"></reply-item>
    </v-container>
</template>

<script>
import ReplyItem from './ReplyItem'
export default {
    name: "ReplyList",
    components: {
        ReplyItem
    }, 
    props: ['replies', 'question_slug']
}
</script>