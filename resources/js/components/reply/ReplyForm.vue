<template>
    <v-container>
        <h1 class="mb-3">Post a reply</h1>
        <v-form @submit.prevent="handleSubmit">
            <vue-simplemde v-model="form.body" ref="markdownEditor" />
            <v-btn class="success" type="submit">Submit</v-btn>
        </v-form>

    </v-container>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
    name: 'ReplyForm',
    components: {
        VueSimplemde
    },
    props: ['slug'],
    data(){
        return{
            form: {}
        }
    },
    methods: {
        handleSubmit(){
            this.postReply();
        },
        postReply(){
            axios.post(`/api/question/${this.slug}/reply`, this.form)
            .then(res=> console.log(res.data))
            .catch(err=> console.log(err));
        }
    }
}
</script>
<style scoped>
    @import '~simplemde/dist/simplemde.min.css';
</style>