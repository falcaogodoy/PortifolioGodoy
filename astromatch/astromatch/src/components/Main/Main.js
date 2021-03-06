import React, { useState } from 'react';
import AppBar from '../AppBar/AppBar';
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage';
import MatchListPage from '../MatchListPage/MatchListPage';
import styled from 'styled-components';

const MainContainer = styled.div`


border: 1px solid black;
border-radius: 3px;
width: 400px;
height: 600px;
display: flex;
flex-direction: column;


`




function Main(){
    const[selectedPage, setSelectedPage] = useState('choose-profile')

    const renderSelectPage = () => {
        switch(selectedPage){
            case 'choose-profile':
                return <ChooseProfilePage/>
            case 'match-list':
                return <MatchListPage/>
            default:
                return <ChooseProfilePage/>
        }
    }

    const goToChooseProfilePage = () => {
        setSelectedPage('choose-profile')
    }
    const goToMatchListPage = () => {
        setSelectedPage('match-list')
    }






    return(
        <MainContainer>

        <AppBar
         goToChooseProfilePage={goToChooseProfilePage}
         goToMatchListPage={goToMatchListPage}
          />
        {renderSelectPage()}
       
        </MainContainer>
        
    )
}
export default Main;