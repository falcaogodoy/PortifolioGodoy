import PokeMoves from "./PokeMoves";
import PokeStats from "./PokeStats";
import PokeType from "./PokeType";
import { PokeDetailsDiv, DivMoves } from "./StyledPageDetails";
import PokeImageDetails from "./PokeImage";

export default function PageDetails() {
  return (
    <PokeDetailsDiv>
      <PokeImageDetails />
      <PokeStats />
      <DivMoves>
        <PokeType />
        <PokeMoves />
      </DivMoves>
    </PokeDetailsDiv>
  );
}
