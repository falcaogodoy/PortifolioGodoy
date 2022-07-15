import axios from 'axios';
import {BASE_URL} from "../../src/constants/url";
import { goToRecipesList } from '../routes/coordinator';

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipesList(history)
        setRightButtonText("Logout")    
    })
    .catch((err)=> alert(err.response.data.message))

}
export const signUp = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipesList(history) 
        setRightButtonText("Logout")
    })
    .catch((err)=>console.log("erro no cadastro"))

}