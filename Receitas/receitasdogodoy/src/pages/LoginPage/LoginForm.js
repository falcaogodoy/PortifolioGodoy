import React from "react";
import {InputsContainer} from "./styled";
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm"

const LoginForm = () => {

    const [form, onChange, clear] = useForm({email:"", password:""})
    const onSubmitForm = (event) => {
        event.preventDefault()
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