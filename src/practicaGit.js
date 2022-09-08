import { useState } from "react";
const Git=()=>{
    const [search, setSearch]=useState("");
    const [user, setUser]=useState({
        name: "",
        img: "",
        defense: "",
        attack: "",
        type: ""
    });

    const fetchUser=async()=>{
        try{
            const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
            /*const response=await fetch(`https://api.github.com/users/${search}`);*/
            /*const data1= await fetch(response.results[1].url);*/
            const data=await response.json();
            setUser({
                name: data.name,
                img: data.sprites.other.home.front_default,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                type: data.types[0].type.name
            });
            console.log(data);
        }catch(error){
            console.log("error",error.message);
        }
          
    }
    return(
        <div className="container">
            <h1 className="text-center">Buscador de Pokemones</h1>
            <div className="grid">
                <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Ingresa el usuario"/>     
            </div>
            <div>
                <button onClick={fetchUser}>Buscar</button>
            </div>
            <article>
                <div className="container">
                    <h2 className="text-center">{user.name}</h2>
                    <div align="center">
                    <img className="img-responsive"  src={user.img} alt="" height="300" width="300"/>
                    </div>
                    
                    <h4 className="text-center">TIPO: {user.type}</h4>
                    <h4 className="text-center">ATAQUE: {user.attack}</h4>
                    <h4 className="text-center">DEFENSA: {user.defense}</h4>
                    <p></p>
                </div>
            </article>
        </div>
    )
}
export default Git;