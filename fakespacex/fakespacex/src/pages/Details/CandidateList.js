
import React from "react"; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import CandidateItens from "./CandidateItens";


const CandidateList = () =>{

    return <>
     <Card sx={{ minWidth: 300 }}>
      <CardContent>
          <Typography  color="text.secondary" variant={"h5"} gutterBottom>
         lista de candidatos
          </Typography>

          <List>
              
               <CandidateItens/>
               <CandidateItens/>
          
            </List>
        
      </CardContent>
        
    </Card>
</>
} 
export default CandidateList