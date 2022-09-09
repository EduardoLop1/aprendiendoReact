import {Grid, Card, CardMedia, CardContent, TextField } from "@mui/material";
import {getDataFromPokemon} from "./services";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import PokemonDetail from "./pokemonDetail";

const Home=()=>{
    const imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
    const[pokemons,setPokemon]=useState([]);

    //debemos crear una funcion la cual se encargue de ejecutar a getDataFromPokemon
    //y la data retorne esa funcion guardandola en setPokemon
    const fetchPokemonList=async()=>{
        const listPokemones= await getDataFromPokemon();
        console.log("listapokemones", listPokemones.results);
        setPokemon(listPokemones.results);
    }

    //en react existe una funcion llamada useEffect ña cual se ejecuta
    //cuandpo la pagina esta iniciando, vamos a usarlo si querermos
    //ejecutar algo al inicio de 

    useEffect(()=>{
        //por ahora en el useEffect debemos colocar un array vacio
        //esto se hace para evitar un bucle infinito, si no colocamos el array
        //las funciones estaran haciendo peticiones sin control
        fetchPokemonList();
    },[])

    return(
        <Container>
    <h1>Pokedex</h1>
   <Grid container spacing ={3}>

    {pokemons.map((pokemon, index)=>(
        //aca el codigo visual 
        <Grid item md ={4} sm ={12} xs={12}>
            <Card className="card-pokemon">
                <CardMedia component ="img" className="img-pokemon" image={`${imgUrl}${index +1}.svg`}/>
                <CardContent className="center">
                    <h3 className="name-pokemon">{pokemon.name}</h3>
                    <PokemonDetail nombre={pokemon.name} url={pokemon.url}/>
                </CardContent>       
                    

               
            </Card>
        </Grid>
    ))}
   
   </Grid>


    
</Container>
        
    )
}
export default Home;