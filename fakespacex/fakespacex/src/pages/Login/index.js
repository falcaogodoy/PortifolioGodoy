import React from "react"; 
import { Button, TextField,  } from "@material-ui/core";
import { LoginForm } from "./styles";
import PageTitle from "../../components/PageTitle";

const LoginPage = () =>{

    return <div>
      <PageTitle title={'Login'}/>
        
        <LoginForm>
            <TextField label={'Email'} type={'email'}/>
            <TextField label={'Senha'} type={'password'}/>
            <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
        </LoginForm>
        </div>
} 
export default LoginPage