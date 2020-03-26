<template>
    <v-card class="ma-3">
        <v-card-title>
            <div class="headline">{{reply.user}}</div>
             <div class="ml-2">{{reply.created_at}}</div>
        </v-card-title>
    </v-card>
</template>

<script>
export default {
    name: "ReplyItem",
    props: ['reply']
}
</script>