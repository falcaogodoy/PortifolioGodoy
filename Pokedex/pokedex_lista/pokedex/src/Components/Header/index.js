import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button"

const HeaderPage = () => {
    return <>
        
              <h1>Titulo  </h1>
              <Link to={'Pokedex'}>
              <Button variant="contained">Ver Minha Pokedex</Button>
              </Link>
        

    
           </>
} 
export default HeaderPage