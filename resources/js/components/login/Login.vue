<template>
<v-container>
    <h1>Sign in to continue</h1>
    <v-form @submit.prevent="login">
      <v-text-field
        v-model="form.email"
        label="Email"
        type="email"
        :rules="inputRules.email"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.password"
        label="Password"
        type="password"
        :rules="inputRules.password"
        required
      ></v-text-field>

      <v-btn
        color="success"
        class="mr-4"
        type="submit"     
      >Sign In</v-btn>
     
     <v-btn
        class="mr-4"
        type="submit"  
        to="/register"   
      >Create an account</v-btn>
    </v-form>
    </v-container>
</template>

<script>

import User from '../../helpers/User'

export default {
    name: 'Login',
    data(){
        return {
            form:{
                email:null,
                password:null
            },
            inputRules:{
                email: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                password: [
                    v => !!v || 'Password is required'
                ]
            }
        }
    },
    created(){
        if(User.loggedIn()){
            this.$router.push({name: 'forum'});
        }
    },
    methods: {
        login(){
            User.login(this.form, this.$router);
        }
    }
}
</script>

<style scoped>

</style>