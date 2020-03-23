<template>
<v-container>
    <v-form v-model="valid">
      <v-text-field
        v-model="form.email"
        label="Email"
        type="email"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.pasword"
        label="password"
        type="password"
        required
      ></v-text-field>

      <v-btn
        color="success"
        class="mr-4"
        type="submit"     
      >Sign In</v-btn>
    </v-form>
    </v-container>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            form:{
                email:null,
                password:null
            }
        }
    }
}
</script>

<style scoped>

</style>