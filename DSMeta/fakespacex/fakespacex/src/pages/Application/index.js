
import React, { useEffect, useState } from "react"; 
import { Button, TextField,  } from "@material-ui/core";
import { CreatApppForm } from "./style";
import PageTitle from "../../components/PageTitle";
import { InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useForm } from "../../hooks/useForm";

const ApplicationPage = () =>{
    const [trips, setTrips] = useState([])
    const [form, onChangeInput] = useForm({
        name:'',
        age:0,
        applicationText: '',
        profession:'',
        contry:'',
        trip: null,
    })
   
    useEffect(() =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/francisco/trips').then((response) =>{
            setTrips(response.data.trips)
        })
    }, [])
   const onSubmitApplication = (event) =>{
        event.preventDefault()
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.contry,
        }
   }

    return <div>
      <PageTitle title={'Incricao De pessoa'}/>
        
        <CreatApppForm>
            <TextField label={'Name'} onChange={onChangeInput} name={'name'} value={form['name']}/>
            <TextField label={'idade'} type={'number'} onChange={onChangeInput} name={'age'} value={form['age']}/>
            <TextField label={'texto de aplicacao'} 
                 type={'text'}  
                 helperText="Some important text" 
                 multiline
                 rows={4}
                 defaultValue="Descreva sua motivacao"
                 onChange={onChangeInput} name={'applicationText'} value={form['applicationText']}
                 />         
            <TextField label={'profissao'} onChange={onChangeInput} name={'profession'} value={form['profession']}/>   
            <InputLabel id="select-paises">Pais</InputLabel>
                 <Select
                    labelId="select-paises"
                    id="select-paises"
                    // value={"age"}
                    // onChange={handleChange}
                    label="country"
                    onChange={onChangeInput} name={'country'} value={form['country']}
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
                    onChange={onChangeInput} name={'trip'} value={form['trip']}
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