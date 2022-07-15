// 
import React from "react";
import styled from "styled-components";
// 

// styled
const HeaderContainer = styled.div`
background: black;
`
// 

//
export default function Header () {
 return(
    <HeaderContainer>



    <p>Logo</p>

   <button> favoritos</button>
   <button> Historico </button>

    </HeaderContainer>
 )   
}