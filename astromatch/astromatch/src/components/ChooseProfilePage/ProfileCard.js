import React from 'react'
import styled from 'styled-components';

const ProfileCardContainer = styled.div`
margin: 16px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid #F7F8F9;
box-shadow: 0 0 1px 0 rgb(8 11 14 / 6%), 0 16px 16px -1px rgb(8 11 14 / 10%);
`
const ProfilePicuture = styled.img`
display: block;
width: 100%;
max-height:300px;
`
const ProfileInfo = styled.div`

padding: 0 16px;
`

function ProfileCard(props){
    const profile = props.profile
    return(
        <ProfileCardContainer>

            
            <ProfilePicuture src={profile.photo}/>
            <ProfileInfo>
                <p>{profile.name}, {profile.age}</p>
                <p>{profile.bio}</p>
            </ProfileInfo>
           

        </ProfileCardContainer>
    )
}
export default ProfileCard;