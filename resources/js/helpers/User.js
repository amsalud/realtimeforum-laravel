class User {
    login(formData) {
        axios.post('/api/auth/login', formData)
        .then(res=> console.log(res.data))
        .catch(error=> console.log(error.response.data));
    }
}

export default new User();