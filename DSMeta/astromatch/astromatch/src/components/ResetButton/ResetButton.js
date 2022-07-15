import axios from 'axios';
import React from 'react'
import { HiOutlineRefresh } from "react-icons/hi";




function ResetButton(){

    const onClickReset = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francisco/clear').then(response => {

        })
    }    

    return(
        <div>
            <HiOutlineRefresh onClick={onClickReset}>ResetButton</HiOutlineRefresh>
        </div>
    )
}
export default ResetButton;