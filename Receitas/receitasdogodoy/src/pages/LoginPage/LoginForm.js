import React from "react";
import {InputsContainer} from "./styled";
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import {login} from "../../services/user";
import {useHistory} from 'react-router-dom';


const LoginForm = ({setRightButtonText}) => {

    const [form, onChange, clear] = useForm({email:"", password:""})
    const history = useHistory()




    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText)
    }
    
    return (     
           <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    value={form.email}                    
                    onChange={onChange}  
                    label={"e-mail"}   
                    variant={"outlined"}   
                    fullWidth    
                    margin={"dense"} 
                    required
                    type={"email"}
                />
             <TextField
                    name={"password"}
                    value={form.password}                  
                    onChange={onChange} 
                    label={"Password"}   
                    variant={"outlined"}     
                    fullWidth     
                    margin={"dense"} 
                    required  
                    type={"password"}              
                />
            <Button 
               type={"submit"}
               variant={"contained"}
               fullWidth
               margin={"normal"} 
               color={"primary"}
               
               >
                   Fazer Login
               
               </Button>
            </form>
           </InputsContainer>     
    )
}

export default LoginForm