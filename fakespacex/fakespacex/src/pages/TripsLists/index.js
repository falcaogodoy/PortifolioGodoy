import { Button, List, ListItem, ListItemText,  } from "@material-ui/core";
import React from "react"; 
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { TripListPageContaienr } from "./style";




const TripListPage = () =>{

    return<>
            <TripListPageContaienr>
            <PageTitle title={'Lista de Viagens'}/>
            <Link to={'/viagens/criar'}>
            <Button>Criar viagem</Button>
            </Link>  

            <List component="nav" aria-label="secondary mailbox folder">
                <Link to={'/viagens/detalhe'}>
               <ListItem button>
                   <ListItemText primary="viagem para marte" />
               </ListItem>
               </Link>
               <Link to={'/viagens/detalhe'}>
               <ListItem button>
                   <ListItemText primary="viagem para lua" />
               </ListItem>
               </Link>
            
            </List>      
            </TripListPageContaienr>    
            </>
} 
export default TripListPage