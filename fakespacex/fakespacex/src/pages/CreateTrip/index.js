import React from "react"; 
import { Button, TextField,  } from "@material-ui/core";
import { CreatTripForm } from "./style";
import PageTitle from "../../components/PageTitle";


const CreateTripPage = () =>{

    return <div>
      <PageTitle title={'Criar Viagem'}/>
        
        <CreatTripForm>
            <TextField label={'Name'} />
            <TextField label={'Planeta'} />
            <TextField label={'Data'} type={'date'}/>
        
            <TextField label={'Descricao'} />
            <TextField label={'Duracao em dias'} type={'number'}/>
            <TextField label={'Senha'} type={'password'}/>
            <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
        </CreatTripForm>
        </div>
} 
export default CreateTripPage