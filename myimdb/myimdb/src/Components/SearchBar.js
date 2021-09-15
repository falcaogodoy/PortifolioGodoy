import React from "react";
import styled from "styled-components";


// 
const SearchBarContainer = styled.div`
background-color: gray;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin: 10px;
height: 400px;
` 
// 
export default function SearchBar () {
    return(
        <SearchBarContainer>
            <div>
                <p>Busca</p>
            <input></input>
            </div>
            <div>
                <p>Filtros</p>
                <div>todos</div>
                <div>Filmes</div>
            </div>
        </SearchBarContainer>
    )
}