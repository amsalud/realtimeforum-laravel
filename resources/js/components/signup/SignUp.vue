<template>
    <v-container>
    <h1>Create a new account</h1>
    <v-form @submit.prevent="signUp">
      <v-text-field
        v-model="form.name"
        label="Name"
        type="text"
        required
      ></v-text-field>
      <v-text-field
        v-model="form.email"
        label="Email"
        type="email"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.password"
        label="Password"
        type="password"
        required
      ></v-text-field>
        <v-text-field
        v-model="form.password_confirmation"
        label="Confirm Password"
        type="password"
        required
      ></v-text-field>
      <v-btn
        color="success"
        class="mr-4"
        type="submit"     
      >Sign Up</v-btn>
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
