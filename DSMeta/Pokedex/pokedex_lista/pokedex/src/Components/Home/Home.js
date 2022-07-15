import React, { useContext, useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import PokeCard from "../PokeCard/PokeCard";
import { GridContainer, } from "./styled";

function Home() {
  const states = useContext(GlobalStateContext);
  const history = useHistory();

  const funcaoAdicionar = (pokemon) => {
    const newListPokemon = states.pokemonList.filter((poke) => {
      return poke !== pokemon;
    });
    states.setPokedex([pokemon, ...states.pokedex]);
    states.setPokemonList(newListPokemon);
  };

  const funcaoDetalhes = (pokemon) => {
    states.setPokemonDetails(pokemon);
    history.push("/detalhes");
  };

  return (
    <GridContainer>
      {states.pokemonList &&
        states.pokemonList.map((pokemon) => {
          return (
            <PokeCard
              id={pokemon.id}
              nome={pokemon.name}
              img={pokemon.sprites.front_default}
              adicionar={() => {
                funcaoAdicionar(pokemon);
              }}
              detalhes={() => {
                funcaoDetalhes(pokemon);
              }}
            />
          );
        })}
    </GridContainer>
  );
}

export default Home;
