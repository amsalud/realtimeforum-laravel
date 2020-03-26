<template>
    <v-card class="ma-3">
        <v-card-title>
            <div class="headline">{{reply.user}}</div>
             <div class="ml-2">said {{reply.created_at}}</div>
        </v-card-title>
        <v-card-text v-html="reply.reply"></v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "ReplyItem",
    props: ['reply']
}
</script>