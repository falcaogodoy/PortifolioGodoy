import React, { useContext } from 'react';
import {Cabecalho, Botao, Titulo} from './StyledHeader'
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../Components/global/GlobalStateContext';

export default function Header () {
    const states = useContext(GlobalStateContext);
    const pokemon = states.pokemonDetails 
    const history = useHistory()

    const goToPage = (path) => {
        history.push (path)
    }
    return(
 <Cabecalho>
     {history.location.pathname === "/" && <Botao onClick={() => goToPage('/pokedex')}>Ir para Pokédex</Botao>} 
     {history.location.pathname === '/pokedex' && <Botao onClick={() => goToPage('/')}>Voltar para lista</Botao>} 
     {history.location.pathname === '/detalhes' && <Botao onClick={history.goBack}>Voltar</Botao>} 

     {history.location.pathname === '/' && <Titulo>Lista de Pokémons</Titulo>}
     {history.location.pathname === '/pokedex' && <Titulo>Pokédex</Titulo>}
     {history.location.pathname === '/detalhes' && <Titulo>{pokemon.name.toUpperCase()}</Titulo>}
     {history.location.pathname === "/detalhes" && <Botao onClick={() => goToPage('/pokedex')}>Ir para Pokédex</Botao>} 
 </Cabecalho>
)
}