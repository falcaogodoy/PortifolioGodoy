import React, {useState} from "react"; 
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { goToLogin, goToRecipesList } from "../../routes/coordinator";
import {useHistory} from "react-router-dom";
import {StyledToolbar} from "./styled";




export default function ButtonAppBar({rightButtonText, setRightButtonText}) {
    const token = localStorage.getItem("token")
    const history = useHistory()
    

    const logout = () => {
        localStorage.removeItem("token")
     
    }

    const rightButtonAction = () => { 
      if (token){
        logout()
        setRightButtonText("Login")
        goToLogin(history)
      } else {
        goToLogin(history)
      }
    }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        
      <StyledToolbar>
          <Button onClick={() => goToRecipesList(history)} color="inherit">Receitas do Godoy</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
     </StyledToolbar>
      </AppBar>
    </Box>
  );
}