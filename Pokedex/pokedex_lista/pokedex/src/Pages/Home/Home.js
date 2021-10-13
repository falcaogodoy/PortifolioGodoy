import React from "react";
import HeaderPage from "../../Components/Header";
import PokeCard from "../../Components/PokeCard/index.js";
import HomeContainer from "./style"
import styled from "styled-components";



const Home = () =>{
    return <HomeContainer>
    
      
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
      
        </HomeContainer>
}
export default Home