import React, { useEffect, useState } from 'react';
import MatchListItem from './MatchListItem';
import styled from 'styled-components';
import axios from 'axios';


const ListaContainer = styled.div`
    padding: 8px;
    align-items: center;
    
`



function MatchListPage(){
    const [matches, setMatches] = useState ([])
  

      useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francisco/matches').then((response) => {
             console.log('resposta',response.data)
          setMatches(response.data.matches)
        })
    }, []);



    return(
        <ListaContainer>

      {matches.map((profile) => {

          return <MatchListItem profile={profile}/>
      })}

        </ListaContainer>
        
    )
}
export default MatchListPage;