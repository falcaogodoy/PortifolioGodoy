import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ChooseButtons from './ChooseButtons';
import ProfileCard from './ProfileCard';

function ChooseProfilePage() {

const [profileToChoose, setProfileToChoose] = useState({undefined})

const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francisco/person').then((response) => {
         
            setProfileToChoose(response.data.profile)
    })
    } 

const chooseProfile = (choise) => {
    const body = {
        choice:choise,
        id: profileToChoose.id
    }

    setProfileToChoose(undefined)
    
axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francisco/choose-person', body).then(response =>{
    getProfileToChoose()
})
         
}
  
useEffect(() => {
            getProfileToChoose()
        }, []);



const onClickNao = () => { 
    chooseProfile(false)


}
const onClickYes = () => {
    chooseProfile(true)
}


    return(
        <div>
           { profileToChoose ?
        (   <>
           
           <ProfileCard profile={profileToChoose}/>
            <ChooseButtons
            onClickNao={onClickNao}
            onClickYes={onClickYes}
            />
            </>) : <p>carregando................................</p>
            }
        </div>
    )
}
export default ChooseProfilePage;