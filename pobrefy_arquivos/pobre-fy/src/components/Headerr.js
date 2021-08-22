import React from "react";
import styled from "styled-components";
import logo_2 from "./img/logo_2.png";

const Titulo = styled.div`

   
    display: flex;
    flex-direction: row;  
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: white;
    border-radius: 5px;
    padding: 22px 20px;
    text-transform: uppercase;
    color:#8257e6;
 
`


const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #190F26;
  border-style: outset;
  img {
    height: auto; 
    width: auto; 
    max-width: 100px; 
    max-height: 100px;
  }
`;

const ButtonsContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  
  border-radius: 100%;
  cursor: pointer;
  
  
`;

const ButtonsContainerClick = styled.div`
 
    height: 100%;      
    display: flex;
    flex-direction: row;    
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: white;
    border-radius: 5px;
    padding: 22px 40px;
    text-transform: uppercase;
    background:#8257e6;
    border: 2px solid white;
    
`;
function MouseOver(event) {
  event.target.style.background = '#392259';
};
function MouseOut(event){
  event.target.style.background="#8257e6";
};


const Header = (props) => {
  return (
    <HeaderContainer>
      <Titulo>
               
        <img src={logo_2} alt="logo" />
       
         </Titulo>
      <ButtonsContainer>
        <ButtonsContainerClick onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={() => props.changePage("playlistCreationPage")}>
          Cadastrar Playlist
        </ButtonsContainerClick>
        <ButtonsContainerClick  onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={() => props.changePage("playlistManagerPage")}>
          Gerenciar Playlists
        </ButtonsContainerClick>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
