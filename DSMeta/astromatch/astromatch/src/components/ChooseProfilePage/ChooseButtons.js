
import React from 'react';
import styled from 'styled-components';
import { BsHeartFill,BsSlashCircleFill  } from "react-icons/bs";

const ButtonsContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 30px;

` 




function ChooseButtons(props){

   
    return(
        <ButtonsContainer>
            <BsHeartFill onClick={props.onClickYes}> s2 </BsHeartFill>
            <BsSlashCircleFill onClick={props.onClickNao}> x </BsSlashCircleFill>
        </ButtonsContainer>
    )
}
export default ChooseButtons