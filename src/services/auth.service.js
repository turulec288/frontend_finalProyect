import apiInstance from "./apiInstance";

class AuthService {
    constructor(){
        this.api = apiInstance
    }

    signup(body){
        console.log("los datos que llegan son", body)
        return this.api.post('/auth/signup', body)
    }

    login(body){
        return this.api.post('/auth/login', body)
    }

    verify(token){
        return this.api.get('/auth/verify', 
        {Authorization: `Bearer ${token}`})
    }

}

const authService = new AuthService();
export default authService