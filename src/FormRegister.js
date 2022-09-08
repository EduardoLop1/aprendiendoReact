import { useState } from "react";
const FormRegister=()=>{
    const [nombre, setNombre]=useState("")
    const [apellido, setApellido]=useState("")
    //EN REACT LA FORMA DE CAPTURAR EL VALOR DE UN INPUT
    //ES USANDO EL onChange ESTE EVENTO NOS VA A PERMITIR CAPTURAR EL VALOR
    //DE LO INPUT Y LO GUARDO EN UNA VARIABLE
    const handleInputName=(e)=>{
        setNombre(e.target.value)
    }
    const handleInputLastName=(e)=>{
        setApellido(e.target.value)
    }
    return(
        <div>
            <h4>Formulario de Registro</h4>
            <h4>NOMBRE: {nombre}</h4>
            <h4>APELLIDO: {apellido}</h4>
            <form action="">
                <input type="text" placeholder="Ingrese nombre" onChange={handleInputName}></input>
                <input type="text" placeholder="ingrese apellido" onChange={handleInputLastName}></input>
                <input type="text"></input>

            </form>
        </div>
    )
}

export default FormRegister;