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
}

export default new User();