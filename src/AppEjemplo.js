import { useState } from "react";
//REACT tiene una funcion interna llamada useState
//el cual maneja el estado de una variable

const PrimerComponente=()=>{
    const [count, setCount]=useState(0)

    const sumar=()=>{
        setCount(count+1);
    }
    const restar=()=>{
        setCount(count-1);
    }
    const parametros=(a,b)=>{
        setCount(a+b);
    }

    return(
    <div>
    <h1>ESTE ES MI COMPONENTE {count}</h1>
    <h2>Hola desde componenete</h2>
    <button onClick={sumar}>Sumar</button>
    <button onClick={restar}>Restar</button>
    <button onClick={()=>parametros(10,20)}>Calcular</button>
    </div>
    )
        
    
}
export default PrimerComponente;