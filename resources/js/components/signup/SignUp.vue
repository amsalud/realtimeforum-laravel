<template>
    <v-container>
    <h1>Create a new account</h1>
    <v-form @submit.prevent="signUp">
      <v-text-field
        v-model="form.name"
        label="Name"
        type="text"
        :rules="inputRules.name"
        required
      ></v-text-field>
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
        <v-text-field
        v-model="form.password_confirmation"
        label="Confirm Password"
        type="password"
        :rules="inputRules.password_confirmation"
        required
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
    </v-container>
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
            inputRules:{
                name: [
                    v => !!v || 'Name is required',
                    v => v.length > 5 || 'Name must be greater than 5 characters'
                ],
                email: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                password: [
                    v => !!v || 'Password is required'
                ],
                password_confirmation: [
                    v => !!v || 'Password Confirmation is required',
                    v => v != this.form.password
                ]
            }
        }
    },
    methods: {
        signUp(){
            axios.post('/api/auth/signup', this.form)
            .then(res=> User.responseAfterLogin(res))
            .catch(err=> console.log(err.data));
        }
    }
}
</script>
