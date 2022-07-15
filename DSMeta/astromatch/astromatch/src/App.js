import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import ResetButton from './components/ResetButton/ResetButton'
import styled from 'styled-components';




const AppContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`



function App() {
  return (
    <AppContainer>
      <Main/>

    
      <ResetButton/>
        </AppContainer>
  );
}

export default App;
