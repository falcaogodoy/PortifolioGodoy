import { useHistory } from 'react-router-dom'
import {DivCard,PokeName, DivButtons, ButtonLeft, ButtonRight, PokeImage} from './styledPokeCard'

export default function PokeCard (props) {
    const history = useHistory()

    return (
        <DivCard id={props.id}>
            <PokeName>{props.nome.toUpperCase()}</PokeName>
            <PokeImage src={props.img}></PokeImage>
            <DivButtons>
                {history.location.pathname === "/pokedex"? <ButtonLeft onClick={props.remover}>Remover da Pokédex </ButtonLeft> : <ButtonLeft onClick={props.adicionar}>Adicionar à Pokédex</ButtonLeft>}
                <ButtonRight onClick={props.detalhes}>Ver detalhes do Pokémon</ButtonRight>
            </DivButtons>
        </DivCard>
    )
}