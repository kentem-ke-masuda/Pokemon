
import { useEffect, useState } from 'react';
import { getAllPokemon } from './utils/pokemon';
import PokemonCardGrid from './component/PokemonCardGrid/PokemonCardGrid';
import Header from './component/Header/Header';
import Style from './Style.module.css'
//import PokemonCard from './component/PokemonCard/PokemonCard';
import './App.css'

function App() {
  const initialURL :string = "https://pokeapi.co/api/v2/pokemon";

  //let resDetailUrls : string[] = [];
  const [prevURL , setPrevURL] = useState<string|null>(null)
  const [nextURL , setNextURL] = useState<string|null>(null)
  const [nowURL , setNowURL] = useState(initialURL) 
  const [loading , setLoading] = useState(true);
  const [resDetailUrls , setResDetailUrls] = useState<string[]>([])

  const fetchPokemonDate = async () => {
    //すべてのポケモンデータを取得
    const res = await getAllPokemon(nowURL)
    //各ポケモンの詳細なデータを取得
    const ResDetailUrls = res.results.map( (pokemon) => pokemon.url)
    
    //状態保存
    setPrevURL(res.previous)
    setNextURL(res.next)
    setResDetailUrls(ResDetailUrls)
    setLoading(false)
  }

  useEffect( () => {
    console.log(nowURL)
    fetchPokemonDate();
  },[nowURL,fetchPokemonDate]);

  const changeURL = (url : string | null) => {
    console.log(`click`)
    if (url !== null) {
      setNowURL(url)
    }
  }

  return (
    <div className='App'>
      {loading ? 
        <h1>ロード中</h1> : 
        <>
          <Header></Header>
          <PokemonCardGrid PokemonDetailUrls={resDetailUrls}></PokemonCardGrid>
        </>
      }
      <div className={`${Style.container}`} > 
        <button className={`${Style.btn}`} disabled={prevURL === null} onClick={()=>changeURL(prevURL)}>前へ</button>
        <button className={`${Style.btn}`} disabled={nextURL === null} onClick={()=>changeURL(nextURL)}>次へ</button>
      </div>
    </div>
  )
}

export default App

// console.log(resDetail.name)
// console.log(resDetail.abilities[0])
// console.log(resDetail.height)
// console.log(resDetail.weight)
// console.log(resDetail.types[0].type.name)
// console.log(resDetail.types[1].type.name)


