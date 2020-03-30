import Token from './Token'
import AppStorage from './AppStorage'
import router from '../router'
import Echo from 'laravel-echo';

class User {
    login(formData) {
        axios.post('/api/auth/login', formData)
        .then(res=> {
            this.responseAfterLogin(res.data);
            this.initializeEcho();
        })
        .catch(error=> console.log(error));
    }

    responseAfterLogin(data){
        const {user, access_token } = data;
        if(Token.isValid(access_token)){
            this.setAuthorizationHeaders(access_token);
            AppStorage.store(user, access_token);
            router.push({name: 'forum'});
            EventBus.$emit('login');
        }
    }

    hasToken(){
        const storedToken = AppStorage.getToken();
        if(storedToken){
            this.setAuthorizationHeaders(storedToken);
            return Token.isValid(storedToken) ?  true : this.logout();
        }
        return false;
    }

    loggedIn(){
        return this.hasToken();
    }

    logout(){
        delete window.axios.defaults.headers.common['Authorization']; 
        delete window.Echo;
        AppStorage.clear();

        if(window.location.pathname != '/forum'){
            router.push('forum');
        }
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

    setAuthorizationHeaders(token){
        const auth_token = `Bearer ${token}`;
        window.axios.defaults.headers.common['Authorization'] = auth_token; 
    }

    initializeEcho(){
        console.log('InitializeEcho');
        if(AppStorage.getToken()){
            const auth_token = `Bearer ${AppStorage.getToken()}`;
            window.Echo = new Echo({
                broadcaster: 'pusher',
                key: '862039a80fa1951152ee',
                cluster: 'us2',
                encrypted: true,
                auth:{
                    headers: {
                        Authorization: auth_token
                }
            }
            });
        }
    }
}

export default new User();