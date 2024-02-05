import axios from 'axios';

const clientAxios = axios.create({
    
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        'Content-Type':'application/json',
        'X-Requested-With':'XMLHttpRequest'
    }, 
    withCredentials:true,
})

export default clientAxios