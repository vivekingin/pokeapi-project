import Layout from "@/components/Layout";
import { pokemonNames,getPokemonDetailsViaName } from "@/lib/pokemons";
import Head from "next/head";
import { typeColor } from '@/components/typeColor';

export default function PokemonDetails( { data } ){

    const pokemonDetails = data.pokemonDetails[0];

    let typeColor2;
    let typeColor1 = typeColor(pokemonDetails.types[0])
    if( pokemonDetails.types.length === 2) typeColor2 = typeColor(pokemonDetails.types[1]);

    return (
    <Layout>

    <Head>
        <title>{pokemonDetails.name}</title>
    </Head>
        
        <div className="flex justify-center items-center flex-col gap-3 mt-5">
            <img src={pokemonDetails.picture} height={350} width={350}/>
            <span className="text-2xl md:text-3xl lg:text-4xl text-bold">{pokemonDetails.name} #{('000' + pokemonDetails.id).slice(-3)}</span>
            <div className="flex justify-between md:justify-center md:gap-2 w-9/12">
                <span>Height: <b>{pokemonDetails.height/10}m</b></span>
                <span>Weight: <b>{pokemonDetails.weight/10}kg</b></span>
            </div>
            <div>
                Pokemon Base Stats: <span className={`text-green-500 text-bold`}>{pokemonDetails.stats}</span>
            </div>
            <div className="flex justify-center gap-5 w-4/5 py-2">
                <p className={`${typeColor1} border-2 px-2 py-1 rounded-lg text-white`}>{pokemonDetails.types[0]}</p>
                {pokemonDetails.types.length === 2 && <p className={`${typeColor2} border-2 px-2 py-1 rounded-lg text-white`}>{pokemonDetails.types[1]}</p>}
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <span className="text-bold">Pokemon Sprites:</span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
                    <img src={pokemonDetails.picture} alt={pokemonDetails.name} height={200} width={200} />
                    <img src={pokemonDetails.picture_back} alt={pokemonDetails.name} height={200} width={200} />
                    <img src={pokemonDetails.picture_shiny} alt={pokemonDetails.name} height={200} width={200} />
                </div>
            </div>
        </div>

    </Layout>
    );
}

export async function getStaticPaths(){
    const paths = await pokemonNames();

    return {
        paths,
        fallback:false,
    }

}

export async function getStaticProps({params}){
    const data = await getPokemonDetailsViaName(params.name);

    return {
        props:{
            data
        }
    }
}