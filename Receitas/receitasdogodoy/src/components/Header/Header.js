import React from "react"; 
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { goToLogin, goToRecipesList } from "../../routes/coordinator";
import {useHistory} from "react-router-dom";
import {StyledToolbar} from "./styled"



export default function ButtonAppBar() {
    const history = useHistory()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        
      <StyledToolbar>
          <Button onClick={() => goToRecipesList(history)} color="inherit">Receitas do Godoy</Button>
          <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
     </StyledToolbar>
      </AppBar>
    </Box>
  );
}