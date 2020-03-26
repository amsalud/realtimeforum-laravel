<template>
    <v-container>
        <h1 v-if="mode == 'create'" class="mb-3">Post a reply</h1>
        <h1 v-if="mode == 'edit'" class="mb-3">Edit a reply</h1>
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
            },
            mode: 'create'
        }
    },
    created(){
        if(this.$route.params && this.$route.params.slug && this.$route.params.reply_id){
            this.mode = 'edit';
            const {slug, reply_id} = this.$route.params;
            axios.get(`/api/question/${slug}/reply/${reply_id}`)
            .then((res)=> this.form.body = res.data.data.reply)
            .catch(err=>console.log(err));
        }
    },
    methods: {
        handleSubmit(){
            switch(this.mode){
                case 'create':
                    this.postReply();
                    break;
                case 'edit':
                    this.editReply();
                    break;
            }
        },
        postReply(){
            if(this.form.body && this.form.body.length){
                axios.post(`/api/question/${this.slug}/reply`, this.form)
                .then(res=>{
                    this.form.body = '';
                    EventBus.$emit('reply-created', res.data.reply);
                })
                .catch(err=> console.log(err));
            }
        },
        editReply(){
            const {slug, reply_id} = this.$route.params;

            if(this.form.body && this.form.body.length){
                axios.put(`/api/question/${slug}/reply/${reply_id}`, this.form)
                .then((res)=>this.$router.push(`/question/${slug}`))
                .catch(err=>console.log(err));
            }
        }
    }
}
</script>
<style scoped>
    @import '~simplemde/dist/simplemde.min.css';
</style>