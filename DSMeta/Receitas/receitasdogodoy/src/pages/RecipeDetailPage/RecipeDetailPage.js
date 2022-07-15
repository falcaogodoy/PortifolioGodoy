import React from "react";
import useProtec from "../../hooks/useProtec";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { RecipeContainer,ScreenContainer, RecipeImage } from "./styled"
import Typography from "@material-ui/core/Typography"

const RecipeDetailPage = () => {
    useProtec()
    const params = useParams();
  
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0];
    console.log(recipe)


    return (
        <ScreenContainer>
           {recipe && 
           <RecipeContainer>
            <RecipeImage src={recipe.image}/>
            <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{recipe && recipe.title}</Typography>
            <Typography align={'center'}>{recipe.description}</Typography>
            </RecipeContainer>}
           
        </ScreenContainer>
    )
}

export default RecipeDetailPage