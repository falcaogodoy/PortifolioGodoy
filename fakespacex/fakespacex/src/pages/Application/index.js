
import React from "react"; 
import { Button, TextField,  } from "@material-ui/core";
import { CreatApppForm } from "./style";
import PageTitle from "../../components/PageTitle";
import { InputLabel, MenuItem, Select } from "@mui/material";


const ApplicationPage = () =>{
    const trips =  [
        {
            "id": "EbLG4OmoQVNUx0ufPVrs",
            "description": "Nenhum surfista intergalático pode ficar fora dessa!",
            "planet": "Netuno",
            "name": "Surfando em Netuno",
            "date": "21/12/20",
            "durationInDays": 540
        },
        {
            "id": "dlDYZdkza8336GvRh8U4",
            "planet": "Jupiter",
            "name": "Multi luau em Jupiter",
            "description": "Noite mágica, com vista para as 69 luas de Jupiter",
            "durationInDays": 540,
            "date": "21/12/20"
        }, 
    ]

    return <div>
      <PageTitle title={'Incricao De pessoa'}/>
        
        <CreatApppForm>
            <TextField label={'Name'} />
            <TextField label={'idade'} type={'number'}/>
            <TextField label={'texto de aplicacao'} 
                 type={'text'}  
                 helperText="Some important text" 
                 multiline
                 rows={4}
                 defaultValue="Descreva sua motivacao"
                 />         
            <TextField label={'profissao'} />   
            <InputLabel id="select-paises">Pais</InputLabel>
                 <Select
                    labelId="select-paises"
                    id="select-paises"
                    // value={"age"}
                    // onChange={handleChange}
                    label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Brasil'}>Brasil</MenuItem>
                    <MenuItem value={'Argentina'}>Argentina</MenuItem>
                    <MenuItem value={'Eua'}>Eua</MenuItem>
                </Select>     
                <InputLabel id="select-viagens">Viagens</InputLabel>
                 <Select
                    labelId="select-viagens"
                    id="select-viagens"
                    // value={"age"}
                    // onChange={handleChange}
                   
                    >
                        {trips.map((trips)=>{
                            return  <MenuItem value={trips}>{trips.name}</MenuItem> 
                        })}
                  
                  
                </Select>           
            <Button variant={'contained'} color={'primary'} type={'submit'}>Increver</Button>
        </CreatApppForm>
        </div>
} 
export default ApplicationPage