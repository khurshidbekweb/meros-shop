import axios from "axios";

export const custumAxios ={
    auth: (data) => axios.post("https://fakestoreapi.com/auth/login", data)
} 