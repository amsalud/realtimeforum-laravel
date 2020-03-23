class Token {
    isValid(token){
        const payload = this.payload(token);
        if(payload){
            return payload.iss == "http://localhost:8000/api/auth/login" || "http://localhost:8000/api/auth/signup" ? true : false;
        }
        return false;
    }

    payload(token){
      const tokenPayload = token.split('.')[1]; 
      return this.decode(tokenPayload);
    }

    decode(tokenPayload){
        return JSON.parse(atob(tokenPayload));
    }

}

export default new Token();