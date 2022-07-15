import React from "react";
import {InputsContainer} from "./styled";
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import { signUp } from "../../services/user";
import { useHistory } from "react-router-dom";

const SignUpForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({email:"", password:""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText)
        
    }

    return (     
           <InputsContainer>
            <form onSubmit={onSubmitForm}>
            <TextField
                    name={"name"}
                    value={form.name}                    
                    onChange={onChange}  
                    label={"Nome"}   
                    variant={"outlined"}   
                    fullWidth
                    required
                    autoFocus
                    margin={"normal"}
                   
                />
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
                   Fazer Cadastro
               
               </Button>
            </form>
           </InputsContainer>     
    )
}

export default SignUpForm