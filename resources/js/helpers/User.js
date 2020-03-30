import Token from './Token'
import AppStorage from './AppStorage'
import router from '../router'

class User {
    login(formData) {
        axios.post('/api/auth/login', formData)
        .then(res=> {
            this.responseAfterLogin(res.data, router);
        })
        .catch(error=> console.log(error.response.data));
    }

    responseAfterLogin(data){
        const {user, access_token } = data;
        if(Token.isValid(access_token)){
            this.setAuthorizationHeader(access_token);
            AppStorage.store(user, access_token);
            router.push({name: 'forum'});
            EventBus.$emit('login');
        }
    }

    hasToken(){
        const storedToken = AppStorage.getToken();
        if(storedToken){
            this.setAuthorizationHeader(storedToken);
            return Token.isValid(storedToken) ?  true : this.logout();
        }
        return false;
    }

    loggedIn(){
        return this.hasToken();
    }

    logout(){
        delete window.axios.defaults.headers.common['Authorization']; 
        AppStorage.clear();
        router.push('forum');
    }

    getName(){
        if(this.loggedIn()){
            return AppStorage.getUser();
        }
    }

    getId(){
        if(this.loggedIn()){
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }

    own(id){
        return this.getId() == id;
    }

    setAuthorizationHeader(token){
        const auth_token = `Bearer ${token}`;
        window.axios.defaults.headers.common['Authorization'] = auth_token;
    }
}

export default new User();