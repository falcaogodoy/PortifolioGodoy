import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TripInfoItem from "./TripInfoItem";


const TripInfoCard = () =>{

    return <>
     <Card >
      <CardContent>
          <Typography  color="text.secondary"  variant={'h5'}gutterBottom>
            informacoes da viagem 
          </Typography>
         <TripInfoItem infoName={'Nome'} info={'Viagem para lua'}/>
         <TripInfoItem infoName={'Planeta'} info={'marte'}/>
         <TripInfoItem infoName={'Data'} info={'20/08/2021'}/>
         <TripInfoItem infoName={'Descrição'} info={'ousadia e alegria'}/>
         <TripInfoItem infoName={'Duracao em dias'} info={228}/>
      </CardContent>
      
    </Card>
</>
} 
export default TripInfoCard