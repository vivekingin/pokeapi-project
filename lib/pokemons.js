export async function getPokemons(){

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=721`);
  
    return res.json();
  
  }

export async function getPokemonDetails(pokemonTill){
    const pokemonData = await getPokemons();

    const pokemonUrls = pokemonData.results;
  
    let pokemonDetails =[];
  
    for (let i = 0; i<pokemonTill; i++){
      const res = await fetch(pokemonUrls[i].url)
  
      const data = await res.json();
      
      let name = data.forms[0].name.charAt(0).toUpperCase() + data.forms[0].name.slice(1) ;
      let type1 = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
      let type2;
      if (data.types.length === 2) type2 = data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1);
  
      pokemonDetails = [ ...pokemonDetails,
        {
          'name':name,
          'types': data.types.length == 2 ? [type1,type2] : [type1],
          'picture': data.sprites.front_default
        }
      ]
    }
    return pokemonDetails;
}

export async function pokemonNames(){
    const pokemon = await getPokemons();
    const pokemonResults = pokemon.results;
    return pokemonResults.map((items)=>{
        return {
            params: {
                name: items.name,
            }
        }
    })
}

export async function getPokemonDetailsViaName(name){
    const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await fetchData.json();

    let pokemonName = data.forms[0].name.charAt(0).toUpperCase() + data.forms[0].name.slice(1) ;
    let type1 = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
    let type2;
    if (data.types.length === 2) type2 = data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1);
    let totalStats=0; 
    for (let i=0; i<data.stats.length;i++){
      totalStats+= data.stats[i].base_stat
    }

    let pokemonDetails = [
      {
        'id': data.id,
        'name':pokemonName,
        'types': data.types.length == 2 ? [type1,type2] : [type1],
        'picture': data.sprites.front_default,
        'picture_back' : data.sprites.back_default,
        'picture_shiny': data.sprites.front_shiny,
        'stats': totalStats,
        'height':data.height,
        'weight': data.weight
      }
    ]

    return {
        pokemonDetails
    }

}
