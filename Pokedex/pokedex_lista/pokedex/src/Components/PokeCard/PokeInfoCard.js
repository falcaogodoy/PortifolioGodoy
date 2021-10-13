import { Typography } from "@mui/material";
import React from "react";

const PokeInfoCard = (props) =>{
    return <> <Typography variant={'h5'}>

             

               <strong> {props.infoTitle}</strong> : {props.info}

               </Typography>
           </>
}
export default PokeInfoCard