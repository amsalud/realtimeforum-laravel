<template>
    <v-container>
        <reply-item v-for="(item, index) in replies" :key="index" :reply="item"></reply-item>
    </v-container>
</template>

<script>
import ReplyItem from './ReplyItem'
export default {
    name: "ReplyList",
    components: {
        ReplyItem
    }, 
    props: ['replies']
}
</script>