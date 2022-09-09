//SERA NUESTRO ARCHIVO DONDE GUARDAMOS NUESTRAS PETICIONES

//UNA BUENA PRACTICA ES ALMACENAR EL API EN UNA VARIABLE

const BASE_URL="https://pokeapi.co/api/v2/pokemon?limit=102";

//podemos crear una funcion generica, la cual se encargeue de realizar una peticion
//como parametro vamos a recibir la URL, que puede ser la lista de pokemones
//url sera el parametro que reciba la url de la peticion
export const getDataFromPokemon=async(url=BASE_URL)=>{
    try{
        const response=await fetch(url);
        const data=await response.json();
        //console.log("data",data);
        return data;
    }catch(error){
        console.log(error.message);
    }
}
