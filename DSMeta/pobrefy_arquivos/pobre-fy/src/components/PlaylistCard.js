import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  color: #8257e6;
  
  
`;

const Button = styled.button`
    height: 100%;      
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: white;
    border-radius: 5px;
    padding: 12px 20px;
    text-transform: uppercase;
    background:#8257e6;
    border: 2px solid white;
    margin-top: 30px;    
    

`

const NameContainer = styled.p`
  padding: 40px 40px 10px 40px;
 
`;

const DeleteButton = styled.button`
  cursor: pointer;
  background-color: #121214;
  border: 2px solid #121214;
`;
function MouseOver(event) {
  event.target.style.background = '#392259';
};
function MouseOut(event){
  event.target.style.background="#8257e6";
};
const PlaylistCard = (props) => {
  return (
    <PlaylistCardContainer>
      <Button
        onClick={() => props.changePage("playlistDetail", props.playlistId)}
      >
        Abrir playlist
      </Button>
      <NameContainer>{props.name}</NameContainer>
      <DeleteButton  onClick={() => props.deletePlaylist(props.playlistId)}>
        <Button onMouseOver={MouseOver} onMouseOut={MouseOut}>Excluir Playlist</Button>
      </DeleteButton>
    </PlaylistCardContainer>
  );
};

export default PlaylistCard;
