import { useState } from "react";
const Git=()=>{
    const [search, setSearch]=useState("");
    const [user, setUser]=useState({});

    const fetchUser=async()=>{
        try{
            const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${search}/`)
            /*const response=await fetch(`https://api.github.com/users/${search}`);*/
            const data= await response.json();
            setUser(data);
            console.log(data);
        }catch(error){
            console.log("error",error.message);
        }   
    }
    return(
        <div className="container">
            <h1>Buscador</h1>
            <div className="grid">
                <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Ingresa el usuario"/>     
            </div>
            <div>
                <button onClick={fetchUser}>Buscar</button>
            </div>
            <article>
                <div className="container">
                    <img src={user.sprites.other.home.front_default} alt=""/>
                    <h4>{user.name}</h4>
                    <p></p>
                </div>
            </article>
        </div>
    )
}
export default Git;