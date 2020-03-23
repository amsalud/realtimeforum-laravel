import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login/Login'
import SignUp from '../components/signup/SignUp'

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: SignUp },
  ]
  
export default new VueRouter({ routes, mode: 'history'})