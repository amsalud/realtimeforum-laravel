import User from './User'

class Exception {
    handle(err){
        this.isExpired(err.response.data.error);
    }

    isExpired(err){
        var error_messages =[
            'Token is expired',
            'Token is invalid',
            'Token can not be used, get a new one'
        ];

        if(error_messages.find( error_message => error_message == err)){
            User.logout();
        }
    }
}

export default new Exception();