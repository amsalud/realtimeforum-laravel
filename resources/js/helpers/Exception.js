import User from './User'

class Exception {
    handle(err){
        this.isExpired(err.response.data);
    }

    isExpired(err){
        if(err ==  'Token is expired'){
            User.logout();
        }
    }
}

export default new Exception();