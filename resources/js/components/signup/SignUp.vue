<template>
  <div class="signup-container">
    <h1>Create a new account</h1>
    <v-form @submit.prevent="signUp">
      <v-text-field
        v-model="form.name"
        label="Name"
        type="text"
        :error-messages="errors.name"
      ></v-text-field>
      <v-text-field
        v-model="form.email"
        label="Email"
        type="email"
        :error-messages="errors.email"
      ></v-text-field>

      <v-text-field
        v-model="form.password"
        label="Password"
        type="password"
        :error-messages="errors.password"
      ></v-text-field>
        <v-text-field
        v-model="form.password_confirmation"
        label="Confirm Password"
        type="password"
        :error-messages="errors.password"
      ></v-text-field>
      <v-btn
        color="success"
        class="mr-4"
        type="submit"     
      >Register</v-btn>
       <v-btn
        class="mr-4"
        to="/login"   
      >Sign In</v-btn>
    </v-form>
    </div>
</template>

<script>
import User from '../../helpers/User'

export default {
    name: "SignUp",
    data(){
        return {
            form: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },
            errors: {
              name: '',
              email: '',
              password: ''
            }
        }
    },
    created(){
      if(User.loggedIn()){
        this.$router.push({name: 'forum'});
      }
    },
    methods: {
        signUp(){
            axios.post('/api/auth/signup', this.form)
            .then(res=> User.responseAfterLogin(res.data, this.$router))
            .catch(err=> {
              if(err.response){
                this.errors = err.response.data.errors;
                setTimeout(()=> this.errors = { name: '', email: '', password: ''}, 5000);
              }
            });
        }
    }
}
</script>

<style scoped>
  .signup-container{
    width: 350px;
    margin: 40px auto 0;
    height: calc(100vh - 150px);
  }
</style>
