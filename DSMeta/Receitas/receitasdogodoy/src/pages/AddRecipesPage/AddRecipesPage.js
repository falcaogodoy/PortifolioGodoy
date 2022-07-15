import React from "react";
import useProtec from "../../hooks/useProtec";
import { RecipeContainer, ScreenContainer } from './styled'
import AddRecipeForm from './AddRecipesForm'
import Typography from '@material-ui/core/Typography'


const AddRecipesPage = () => {
    useProtec()
    return (
        <ScreenContainer>
        <RecipeContainer>
          <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Receita</Typography>
          <AddRecipeForm/>
        </RecipeContainer>
      </ScreenContainer>
    )
}

export default AddRecipesPage