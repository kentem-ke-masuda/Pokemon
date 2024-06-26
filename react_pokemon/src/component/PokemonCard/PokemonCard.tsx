import { useEffect, useState } from "react"
import { getPokemonDetail } from "../../utils/pokemon"
import { PokemonDetail } from "../../utils/pokemon"
import style from "./PokemonCard.module.css"

//ただの初期状態
const initState : PokemonDetail = {
    name : "ポケモン",
    weight: 0,
    height: 0,
    abilities: [],
    types: [],
    sprites:{front_default : ""}
} 

const PokemonCard : React.FC<{detailURL : string}> = ({detailURL}) => {

    const [pokemonDetail , setPokemonDetail] = useState<PokemonDetail>(initState)

    const fetchPokemonDetailData = async (url:string) => {
        const PokemonDetail : PokemonDetail =  await getPokemonDetail(url)
        setPokemonDetail(PokemonDetail)
    }
    useEffect(()=>{
        console.log(detailURL)
        fetchPokemonDetailData(detailURL)
    },[detailURL])


    return(
        <div className={`${style.card}`}>
            <img src={pokemonDetail.sprites.front_default} />
            <h2>{pokemonDetail.name}</h2>
            {pokemonDetail.types.map( (type) => <p>{`タイプ : ${type.type.name}`}</p>)}
            <p>{`${pokemonDetail.weight/10} kg`}</p>
            <p>{`${pokemonDetail.height/10} m`}</p>
            {pokemonDetail.abilities.map( (ability) => <p>{`${!ability.is_hidden? "特性": "隠れ特性"} : ${ability.ability.name}`}</p>)}
        </div>
    )
}
export default PokemonCard