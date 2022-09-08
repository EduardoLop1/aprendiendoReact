import { useState } from "react";
import { TextField } from "@mui/material";

const FormUsuario=()=>{
    //otra forma en la cual podemos guardar datos de un input
    //es un objeto para ello necesitamos que los inputs tengan un name
    const [valorInputs, setValorInputs]=useState({
        nombre: "",
        apellido: "",
        correo: "",
        password: "",
    });

    const handleInputValues=(e)=>{
        const {name,value}=e.target;
        
        setValorInputs({
            ...valorInputs,
            [name]:value,
        });
    };

    return(
        <div>
            <form action="">
                <h4>Formulario de Usuario</h4>
                <h5>Nombre: {valorInputs.nombre}</h5>
                <h5>Apellido: {valorInputs.apellido}</h5>
                <h5>Correo: {valorInputs.email}</h5>
                <h5>Password: {valorInputs.password}</h5>
                <p>
                    <TextField name="nombre" type="text" placeholder="Ingresa tu nombre" onChange={handleInputValues}/>
                </p>
                <p>
                    <TextField name="apellido" type="text" placeholder="Ingresa tu apellido" onChange={handleInputValues}/>
                </p>
                <p>
                    <TextField name="email" type="text" placeholder="Ingresa tu email" onChange={handleInputValues}/>
                </p>
                <p>
                    <TextField name="password" type="password" placeholder="Ingresa tu password" onChange={handleInputValues}/>
                </p>
                <p>
                    <button>INGRESA</button>
                </p>
            </form>
        </div>
    )
}
export default FormUsuario;