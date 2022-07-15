import React from "react";
import {LogoImage, ScreenContainer, SignUpButtonContainer} from "./styled";
import logo_transparante from "../../assets/logo_transparent.png";
import SignUpForm from "./SignUpForm"
import { Button} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import {goToSignUp} from "../../routes/coordinator";


const SignUpPage = ({setRightButtonText}) => { 
    const history = useHistory()
  
    return (
        <ScreenContainer>
          <LogoImage src={logo_transparante}/>
            <SignUpForm setRightButtonText={setRightButtonText}/>            

        <SignUpButtonContainer>
            <Button 
                onClick={() => goToSignUp(history)}
                type={"submit"}
                variant={"text"}
                fullWidth
                margin={"normal"} 
                color={"primary"}
                                    
                                >
             Cadastre-se
                            
            </Button> 
        </SignUpButtonContainer>

        </ScreenContainer>
    )
}

export default SignUpPage