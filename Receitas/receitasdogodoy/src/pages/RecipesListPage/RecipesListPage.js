import React from "react";
import useUnProt from "../../hooks/useUnprot";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { RecipeListContainer, AddRecipeButton } from "./styled";
import Add from "@material-ui/icons/Add";
import { goToAddRecipes, goToRecipesDetail } from "../../routes/coordinator";
import {useHistory} from "react-router-dom"




const RecipeListPage = () => {
    const recipes = useRequestData([],`${BASE_URL}/recipe/feed`)
    const history = useHistory()
    console.log(recipes)
    useUnProt()

    const onClickCard = (id) => { 
        goToRecipesDetail(history, id)
    }
     

    const recipeCards = recipes.map((recipe) => {
        return (
            <RecipeCard
                key={recipe.id}
                title={recipe.title}
                image={recipe.image}
                onClick={() => onClickCard(recipe.recipe_id)}
                />
        )
    })
    return (
        <RecipeListContainer>

                {recipeCards}  
                <AddRecipeButton
                    color={'primary'}
                    onClick={() => goToAddRecipes(history)}
                >  
                    <Add/>   
                </AddRecipeButton>    

        </RecipeListContainer>
         
        
    )
}

export default RecipeListPage