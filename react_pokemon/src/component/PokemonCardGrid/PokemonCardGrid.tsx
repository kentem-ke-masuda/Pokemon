import PokemonCard from "../PokemonCard/PokemonCard"
import style from "./PokemonCardGrid.module.css"
//import { PokemonDetail } from "../../utils/pokemon"

const PokemonCardGrid : React.FC<{PokemonDetailUrls:string[] }> = ( { PokemonDetailUrls } ) => {
    //console.log(PokemonDetailUrls)
    return(
        <div className={`${style.grid}`}>
            {PokemonDetailUrls.map( (PokemonDetailUrl) => {
                return <PokemonCard detailURL={PokemonDetailUrl} />
            })}
        </div>
    )
}
export default PokemonCardGrid