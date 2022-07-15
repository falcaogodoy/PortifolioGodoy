import { CssBaseline } from "@mui/material";
import React from "react";
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import styled from "styled-components";

// 
import ApplicationPage from "./pages/Application";
import CreateTripPage from "./pages/CreateTrip";
import DetailsTripPage from "./pages/Details";
import Homepage from "./pages/Home";
import LoginPage from "./pages/Login";
import TripListPage from "./pages/TripsLists";
// 

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:16px;
`

const App = () => {
  return (
    <BrowserRouter>
    <CssBaseline/>
    <AppContainer>
    <Switch>
      <Route exact path="/">
        <Homepage/>
      </Route>
      <Route exact path="/inscricao">
        <ApplicationPage/>
      </Route>
      <Route exact path="/viagens/criar">  
        <CreateTripPage/>
      </Route>
      <Route exact path="/login">
        <LoginPage/>
      </Route>
      <Route exact path="/viagens/detalhe">
        <DetailsTripPage/>
      </Route>
      <Route exact path="/viagens">
        <TripListPage/>
      </Route>
      
    </Switch>
    </AppContainer>
    </BrowserRouter>
  );
}

export default App;
