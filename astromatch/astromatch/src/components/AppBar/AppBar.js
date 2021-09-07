import React from 'react'
import styled from 'styled-components'
import { VscHome } from "react-icons/vsc";
import { BsPersonLinesFill } from "react-icons/bs";
import logotopo from '../Img/logotopo.png';



const AppBarContainer = styled.div `
display: flex;
justify-content: space-between;
border-bottom: 1px solid gray;
align-items: center;
padding: 0 8px;
box-shadow: 0 0 1px 0 rgb(8 11 14 / 6%), 0 16px 16px -1px rgb(8 11 14 / 06%);
`
const Logo = styled.img `

width: 50%;

`




function AppBar(props){
    return(
        <AppBarContainer>
            <VscHome  onClick={props.goToChooseProfilePage}>Escolher</VscHome >
            <Logo src={logotopo}/>
            <BsPersonLinesFill onClick={props.goToMatchListPage}>Lista</BsPersonLinesFill>
        </AppBarContainer>
    )
} 
export default AppBar