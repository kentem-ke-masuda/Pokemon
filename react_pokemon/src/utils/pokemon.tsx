interface PokemonSrce {
    name: string;
    url : string;
}
  
interface PokemonSrceRes {
    results:PokemonSrce[]
    next: string | null;
    previous: string | null
}

export interface PokemonDetail {
    name : string
    weight:number,
    height:number,
    abilities: Ability[],
    types:type[],
    sprites:{front_default : string}
}
type Ability = {
    ability : {name : string , url : string},//name : stringから変更
    is_hidden : boolean,
    slot : number
}

type type = {
    slot:number,
    type:{name:string,url:string}
}

export const getAllPokemon = (URL : string) : Promise<PokemonSrceRes> => {
    return new Promise((resolve) => {//一旦引数のreject排除
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                // console.log(`データ：${data}`)
                resolve(data)
            })
    })
}

export const getPokemonDetail = (URL : string) : Promise<PokemonDetail> => {
    return new Promise((resolve) => {//一旦引数のreject排除
        fetch(URL)
            .then((res) => res.json())
            .then((data) => resolve(data))
    })
}