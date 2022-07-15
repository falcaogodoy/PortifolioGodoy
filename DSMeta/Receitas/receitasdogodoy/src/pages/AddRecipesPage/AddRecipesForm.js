import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import useForm from '../../hooks/useForm'
import { InputsContainer, AddRecipeFormContainer } from './styled'
import {BASE_URL} from '../../constants/url'



const AddRecipeForm = () => {
    
    const [form, onChange, clear] = useForm({title: "", description: "", image: ""})
    const creatRecipe = (body, clear) => { 
        axios.post(`${BASE_URL}/recipe`, body,{
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) =>{
            alert(res.data.message)
            clear()
        })
        .catch(err => console.log(err))
    }
    
  

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
        creatRecipe(form, clear)
        
       
    }


    return (
        <form onSubmit={onSubmitForm}>
            <AddRecipeFormContainer>
                <InputsContainer>
                 <TextField 
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label={"Titulo"}
                    variant={"outlined"}
                    fullWidth
                    required
                    autoFocus
                    margin={'normal'}

                 
                 />
                 <TextField 
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    label={"Descrição"}
                    variant={"outlined"}
                    fullWidth
                    required
                    autoFocus
                    margin={'normal'}

                 
                 />
                 <TextField 
                    name={"image"}
                    value={form.image}
                    onChange={onChange}
                    label={"Foto"}
                    variant={"outlined"}
                    fullWidth
                    required
                    autoFocus
                    margin={'normal'}

                 
                 />
                </InputsContainer>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    type={'submit'}
                    fullWidth
                    >
                    Adicionar Receita
                    </Button>
            </AddRecipeFormContainer>
        </form>
    )







}

export default AddRecipeForm
