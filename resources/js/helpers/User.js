import Token from './Token'
import AppStorage from './AppStorage'

class User {
    login(formData) {
        axios.post('/api/auth/login', formData)
        .then(res=> {
            this.responseAfterLogin(res.data);
        })
        .catch(error=> console.log(error.response.data));
    }

    responseAfterLogin(data){
        const {user, access_token } = data;
        if(Token.isValid(access_token)){
            AppStorage.store(user, access_token)
        }
    }
    
    hasToken(){
        const storedToken = AppStorage.getToken();
        if(storedToken){
            return Token.isValid(storedToken) ?  true : false;
        }
        return false;
    }

    loggedIn(){
        return this.hasToken();
    }

    logout(){
        AppStorage.clear();
    }
}

export default new User();