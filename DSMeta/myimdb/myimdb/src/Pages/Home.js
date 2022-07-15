//imports

import React from "react";
import styled from "styled-components";
import CardsInfos from "../Components/CardsInfo";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
// 

// Styled
const MainHomeContainer = styled.div`
    background: white;
    height: 100vh;
    

  
  /* grid container settings */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    'header'
    'main'
    'footer';
  
`
const MainHomePg = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 20px
    grid-row-gap: 20px
    justify-items: stretch
    align-items: stretch
    
`
const MainContainer = styled.div`
    
display: grid;
place-items: center;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 6px;
grid-row-gap: 60px;
justify-items: center;
align-items: center;
margin-top: 20px;
max-height: 500px;
`



export default function Home () {
  return (

    <MainHomeContainer>
    <Header/>
     <MainHomePg>
            <SearchBar/>
            <MainContainer>
                <CardsInfos/>
                <CardsInfos/>
                <CardsInfos/>
                <CardsInfos/>
                <CardsInfos/>
                <CardsInfos/>
            </MainContainer>
        </MainHomePg>
    <Footer/>
    </MainHomeContainer>
  )  
};