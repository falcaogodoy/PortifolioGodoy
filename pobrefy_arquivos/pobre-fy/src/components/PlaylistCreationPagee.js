import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "./constant";
import logo_2 from "./img/logo_2.png";



const PlaylistCreationFormContainer = styled.div`

    height: 100%;      
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: white;
    border-radius: 5px;
    padding: 22px 40px;
    text-transform: uppercase;
    background:#121214;
    /* border: 2px solid white;     */
    flex-direction: column;
    align-items: center;
  
  };
  img {
    height: auto; 
    width: auto; 
    max-width: 300px; 
    max-height: 300px;
  }
   
`;

const PlaylistCreationForm = styled.form`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  

  button{
    
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
    /* border: 2px solid white; */
    margin-top: 30px;    

  };
  h1 {
    padding-top: 800px;
  }
`;







class PlaylistCreationPage extends React.Component {
  state = {
    inputNameValue: ""
  };

  changeInputnameValue = (e) => {
    this.setState({ inputNameValue: e.target.value });
  };

  createPlaylist = (e) => {
    e.preventDefault();
    const body = {
      name: this.state.inputNameValue
    };

    axios
      .post(baseUrl, body, axiosConfig)
      .then(() => {
        alert("Playlist cadastrada com sucesso");
      })
      .catch((err) => [console.log(err)]);
    this.setState({ inputNameValue: "" });
  };

  render() {
    return (
      <PlaylistCreationFormContainer>        
        <img src={logo_2} alt="logo" />
        <h1>Cadastrar nova Playlist</h1>
        <PlaylistCreationForm onSubmit={this.createPlaylist}>
          <label>Nova playlist</label>
          <input
            placeholder="Nome da Playlist"
            type="text"
            value={this.state.inputNameValue}
            onChange={this.changeInputnameValue}
          />
          <button type="submit">Cadastrar Playlist</button>
        </PlaylistCreationForm>
      </PlaylistCreationFormContainer>
    );
  }
}

export default PlaylistCreationPage;
