import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login/Login'
import SignUp from '../components/signup/SignUp'
import Logout from '../components/logout/Logout'
import Forum from '../components/forum/Forum'
import Question from '../components/forum/Question'
import QuestionForm from '../components/forum/QuestionForm'

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: SignUp },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/logout', component: Logout, name: 'logout' },
    { path: '/question/ask', component: QuestionForm, name: 'askquestion'},
    { path: '/question/edit/:slug', component: QuestionForm, name: 'editquestion'},
    { path: '/question/:slug', component: Question, name: 'question' },
  ]
  
export default new VueRouter({ routes, mode: 'history'})