import { Button, Dialog, DialogContent, Grid, Chip } from "@mui/material"
import { useState } from "react";
import { getDataFromPokemon } from "../services";

const PokemonDetail=(props)=>{
    const [abrir,setAbrir]=useState(false);
    const [pokemonData,setPokemonData]=useState({});
    const fetchDetailFromPokemon=async()=>{
        const pokemon=await getDataFromPokemon(props.url);
        setPokemonData(pokemon);
    }
    //vamos a hacer una funcion que maneje el estado
    /*const openDialog=()=>{
        setOpen(true);
    };
    const closeDialog=()=>{
        setOpen(false);
    }*/
    const handleOpenDialog=async()=>{
        if(!abrir){
            await fetchDetailFromPokemon()
        }
        setAbrir(!abrir);
    }
    
    return(
        <div>
            <Button onClick={handleOpenDialog} variant="contained" color="secondary">Detalle</Button>
            <Dialog open={abrir} onClose={handleOpenDialog}>
                <DialogContent>
                    {/*Necesitamos extraer los keys de un objeto*/}
                    {Object.keys(pokemonData).length>0 && (
                        <div>
                            <h2>{props.nombre}</h2>
                            <Grid container>
                                <Grid item md={6}>
                                    <h4>Habilidades</h4>
                                    {pokemonData.abilities.map((abilitie)=>(
                                        <Chip 
                                        label={abilitie.ability.name}
                                        color="primary"
                                        sx={{marginRigth: 2}}
                                        />
                                    ))}
                                    <h4>Datos</h4>
                                    {pokemonData.types.map((type)=>(
                                        <Chip 
                                        label={type.type.name}
                                        />
                                    ))}
                                    <Grid item>
                                        <img src={pokemonData.sprites.other["dream_world"].front_default}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    )}
                    
                    <Button variant="contained" color="error" onClick={handleOpenDialog}>Cerrar</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}
export default PokemonDetail;