import { ThemeProvider } from "@material-ui/styles";
import React, {useState} from "react";
import theme from "./constants/theme";
import Router from "./routes/Router";
import ButtonAppBar from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom"


const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>     
      <ButtonAppBar rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      </BrowserRouter>     
    </ThemeProvider>
  )
}

export default App;
