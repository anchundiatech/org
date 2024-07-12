import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props
    

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio ")
        let datosEnviar ={
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
           
        }
        registrarColaborador(datosEnviar)

    }


    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({
            titulo,
          colorPrimario: color
        })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>

            <Campo
                titulo="Nombre" placeholder="Ingresar nombre"
                required
                valor={nombre}
                setValor={actualizarNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                setValor={actualizarPuesto}
            />
            <Campo
                titulo="foto"
                placeholder="Ingresar el enlase de la foto"
                required
                valor={foto}
                setValor={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton >
                Crear
            </Boton>

        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el colaborador.</h2>

            <Campo
                titulo="Titutlo" placeholder="Ingresar el titulo"
                required
                valor={titulo}
                setValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color hexadecimal"
                required
                valor={color}
                setValor={actualizarColor}

            />
            <Boton >
                Registrar equipo
            </Boton>
        </form>
    </section>
}

export default Formulario