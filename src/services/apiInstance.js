import axios from "axios";
import { TOKEN_NAME } from '../context/auth.context'
const URL = import.meta.env.VITE_BACK_BASE_URL //http://localhost:5005/api

const apiInstance = axios.create({
    baseURL: URL
})

apiInstance.interceptors.request.use( config =>{
    const token = localStorage.getItem(TOKEN_NAME)

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
    }
)

export default apiInstance

