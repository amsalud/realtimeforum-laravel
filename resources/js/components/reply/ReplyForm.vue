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
            form: {
                body: ''
            }
        }
    },
    methods: {
        handleSubmit(){
            this.postReply();
        },
        postReply(){
            if(this.body && this.body.length){
                axios.post(`/api/question/${this.slug}/reply`, this.form)
                .then(res=>{
                    this.form.body = '';
                    EventBus.$emit('reply-created', res.data.reply);
                })
                .catch(err=> console.log(err));
            }
        }
    }
}
</script>
<style scoped>
    @import '~simplemde/dist/simplemde.min.css';
</style>