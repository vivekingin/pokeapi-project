import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getPokemonDetails } from '@/lib/pokemons';
import { typeColor } from '@/components/typeColor';
import { useEffect, useState } from 'react';


export default function Home({pokemonDetails}) {

   
    const [count,setCount] = useState(0);
    const [isFav, setIsFav] = useState([]);
    useEffect(()=>{
      localStorage.clear();
      localStorage.setItem('favourites',JSON.stringify(isFav))
    },[count]);

    function handleFav(event){

      
      const selectedPokemon = event.target.alt;

      if (isFav.length > 0){
          if (isFav.includes(selectedPokemon)) {
              event.target.src =  "/images/heart-empty.svg";
              const i = isFav.indexOf(selectedPokemon);
              isFav.splice(i,1);
          }else{
            event.target.src =  "/images/heart-filled.svg";
            setIsFav([...isFav, selectedPokemon]);
        }
      }else{
        event.target.src =  "/images/heart-filled.svg";
        setIsFav([...isFav, selectedPokemon]);
      }

      setCount(count + 1);
    }

    const cards = pokemonDetails.map((items)=>{

      let typeColor2;
      let typeColor1 = typeColor(items.types[0])
      if( items.types.length === 2) typeColor2 = typeColor(items.types[1]);

      return (<div key ={items.name} className="grid place-items-center shadow-xl rounded bg-white mb-5">
        <img src={items.picture} height={200} width={200}/>
        <div className="flex justify-between w-4/5 border-b-2 py-2">
          <h2 className="font-semibold">{items.name}</h2>
          <div>
            <Image onClick ={handleFav} src = "/images/heart-empty.svg" height={24} width={24} alt = {items.name}/>
          </div>
        </div>
        <div className="flex justify-center gap-5 w-4/5 py-2">
          <p className={`${typeColor1} border-2 px-2 py-1 rounded-lg text-white`}>{items.types[0]}</p>
          {items.types.length === 2 && <p className={`${typeColor2} border-2 px-2 py-1 rounded-lg text-white`}>{items.types[1]}</p>}
        </div>
        <Link href ={`/${items.name.toLowerCase()}`} className="py-2 !text-[#30A2FF]">See more ➡</Link>
      </div>)

      })
    

  return (
  <Layout>
    <Head>
    <title>Pokekingin</title>
    </Head>
    <div className='m-5 flex gap-3 items-center justify-between border-b-2 border-stone-300 pb-2'>
      <h1 className='text-xl md:text-3xl lg:text-4xl text-bold '>All Pokemons</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {cards}
    </div>

    
  </Layout>
  );
}



export async function getStaticProps(){

  const pokemonDetails = await getPokemonDetails(721);
  
  return {
      props: {
        pokemonDetails,
      },
  }
}

