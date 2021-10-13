import React from "react";
import Router from "./routes/Router";
import GlobalState from './Components/global/GlobalState';


function App() {
  return (
    <div className="App">

    <GlobalState>
      <Router /> 
    </GlobalState>
   
    </div>
  );
}

export default App;
