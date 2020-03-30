import User from './User'

class Exception {
    handle(err, router){
        this.isExpired(err.response.data.error, router);
    }

    isExpired(err, router){
        if(err ==  'Token is expired' || err == 'Token is not provided'){
            User.logout();
        }
    }
}

export default new Exception();