import { http, HttpResponse } from 'msw'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("https://pokeapi.co/api/v2/pokemon", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
        results:["https://pokeapi.co/api/v2/pokemon/1/","https://pokeapi.co/api/v2/pokemon/2/","https://pokeapi.co/api/v2/pokemon/3/"] , 
        next: "hogehuga" , 
        previous: null
    })
  }),
  http.get("https://husigidane", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
        name : "フシギダネ",
        weight: 69,
        height: 7,
        abilities: [
            {
                ability : {name : "新緑" , url : "hogehuga"},
                is_hidden : false,
                slot : 0
            }
        ],
        types: [
            {
                slot:0,
                type:{name:"くさ",url:"hogehuga"}
            },
            {
                slot:1,
                type:{name:"どく",url:"hogehuga"}
            }
        ],
        sprites:{front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}
    } )
  }),

]

// interface PokemonSrce {
//     name: string;
//     url : string;
// }
  
// interface PokemonSrceRes {
//     results:PokemonSrce[]
//     next: string | null;
//     previous: string | null
// }

// export interface PokemonDetail {
//     name : string
//     weight:number,
//     height:number,
//     abilities: Ability[],
//     types:type[],
//     sprites:{front_default : string}
// }
// type Ability = {
//     ability : {name : string , url : string},//name : stringから変更
//     is_hidden : boolean,
//     slot : number
// }

// type type = {
//     slot:number,
//     type:{name:string,url:string}
// }