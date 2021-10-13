import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IconButton, ListItemSecondaryAction } from "@mui/material";
import ThumbDownAltIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const CandidateItens = () =>{
    return <>
    
                <ListItem>                     
                  <ListItemText primary="Candidato" />
                <ListItemSecondaryAction>
                <IconButton edge="end" arial-label="delete">
                  <ThumbUpIcon/>
                </IconButton>
                <IconButton edge="end" arial-label="delete">
                  <ThumbDownAltIcon/>
                </IconButton>
                </ListItemSecondaryAction>
                </ListItem>
    </>
}

export default CandidateItens