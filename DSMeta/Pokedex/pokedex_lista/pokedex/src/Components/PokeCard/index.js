import React from "react";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
import PokeInfoCard from "./PokeInfoCard";

const PokeCard = () => {
    return <>
           <Card sx={{ maxWidth: 150 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
    //    image={}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <PokeInfoCard infoTitle={'nome'} info={'name'}/>
        </Typography>
       
      </CardContent>    
      <CardActions>
        <Button size="small">Renover</Button>
        <Button size="small">ver detalhe</Button>
      </CardActions>
    </Card>
            </>
} 
export default PokeCard