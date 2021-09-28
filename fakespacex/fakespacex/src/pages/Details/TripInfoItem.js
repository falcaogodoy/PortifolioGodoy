import { Typography } from "@mui/material";
import React from "react";


const TripInfoItem = (props) =>{
    return <>
    <Typography variant={'body1'}>
      <strong> {props.infoName} </strong>: {props.info}
    </Typography>
    </>
}
export default TripInfoItem