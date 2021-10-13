import React from "react"; 

import { Button } from "@mui/material";
import { ButtonsContainer } from "./styles";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";




const Homepage = () =>{

    return <div>
        <PageTitle title={'Spacex'}/>
        <ButtonsContainer>
            <Link to={'/login'}>
              <Button variant={'contained'} color={'primary'}>Area Adimin</Button>
            </Link>
            <Link to={'/inscricao'}>
            <Button variant={'contained'} color={'secondary'}>Fazer Candidatura</Button>
            </Link>
        </ButtonsContainer>
    </div>

} 
export default Homepage