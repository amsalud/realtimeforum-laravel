import Token from './Token'

class User {
    login(formData) {
        axios.post('/api/auth/login', formData)
        .then(res=> {
            Token.payload(res.data.access_token);
        })
        .catch(error=> console.log(error.response.data));
    }
}

export default new User();