import Layout from "@/components/Layout"
import Head from "next/head";
import { useEffect, useState } from "react";
import { typeColor } from "@/components/typeColor";
import Link from "next/link";
import Image from "next/image";

export default function Favourites(){

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const favourites = JSON.parse(localStorage.getItem("favourites"));
        
        if (favourites.length == 0) {setLoading(false); return}
        else {
        let pokemonDetails=[];
        for (let i = 0; i<favourites.length; i++){
            fetch(`https://pokeapi.co/api/v2/pokemon/${favourites[i].toLowerCase()}`)
            .then((res) => res.json())
            .then((data) => {
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
                setData(pokemonDetails);
                setLoading(false);
            });
        }
      }
      }, []);

     
    if (isLoading) return <p>Loading...</p>;

    if (!data) return (
    <Layout>
      <div className='m-5 flex gap-3 items-center justify-between border-b-2 border-stone-300 pb-2'>
        <h1 className='text-xl md:text-3xl lg:text-4xl text-bold '>Favourite Pokemons</h1>
      </div>
      <div className="text-center md:absolute top-[50%] left-[50%] md:translate-y-[-50%] md:translate-x-[-50%]">
        <b>No favourite Pokemons Selected!</b>
      </div>
  </Layout>
  );

    const cards = data.map((items)=>{

        let typeColor2;
        let typeColor1 = typeColor(items.types[0])
        if( items.types.length === 2) typeColor2 = typeColor(items.types[1]);
  
        return (<div key ={items.name} className="grid place-items-center shadow-xl rounded bg-white mb-5">
          <img src={items.picture} height={200} width={200}/>
          <div className="flex justify-between w-4/5 border-b-2 py-2">
            <h2 className="font-semibold">{items.name}</h2>
            <div>
              <Image src = "/images/heart-filled.svg" height={24} width={24} alt = {items.name}/>
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
          <title>Favourite Pokemons</title>
          </Head>
          <div className='m-5 flex gap-3 items-center justify-between border-b-2 border-stone-300 pb-2'>
            <h1 className='text-xl md:text-3xl lg:text-4xl text-bold '>Favourite Pokemons</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards}
          </div>
      
          
        </Layout>
        );

    }