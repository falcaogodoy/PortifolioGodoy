import React, {useState, useContext, useEffect} from 'react';
import PokeCard from './PokeCard';
import GlobalStateContext from '../global/GlobalStateContext';
import {PokedexContainer} from './styledPokedex'
import { useHistory } from 'react-router-dom';

export default function Pokedex () {
  const states = useContext(GlobalStateContext);
  const history = useHistory();

    
    const removerPokemon = (pokemon) => {
      const newListPokemon = states.pokedex.filter((poke) => {
        return poke !== pokemon
      })
      states.setPokemonList([pokemon, ...states.pokemonList ])
      states.setPokedex(newListPokemon)
    }


    const detalhesPokemon = (pokemon) => {
      states.setPokemonDetails(pokemon)
      history.push('/detalhes')
    }


    return (
        <PokedexContainer>
            {states.pokedex && states.pokedex.map((pokemon) => {
                return <PokeCard id={pokemon.id} nome={pokemon.name} img={pokemon.sprites.front_default} remover = {() => {removerPokemon(pokemon)}} detalhes={() => {detalhesPokemon(pokemon)}}/>
            })}
        </PokedexContainer> 
    )
}
