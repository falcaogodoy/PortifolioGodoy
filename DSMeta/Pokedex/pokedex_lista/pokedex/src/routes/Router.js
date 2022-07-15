import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Pokedex from "../Components/PokeCard/Pokedex";
import PageDetails from "../Components/PokeDetalis/PageDetails";
import Header from "../header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Header />
          <Home />
        </Route>
        <Route exact path={"/pokedex"}>
          <Header />
          <Pokedex />
        </Route>
        <Route exact path={"/detalhes"}>
          <Header />
          <PageDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
