import { useState } from "react"
import Persona from "./Persona"

const Formulario = () => {
    const [estadoInicial, cambiarEstado] = useState({
        nombre: '',
        apellido: '',
        edad: ''
    })
    const [personas, setArray] = useState([]) // personas => objetos
    const handleChange = ({ target: { name, value } }) => {
        cambiarEstado({ ...estadoInicial, [name]: value })
    }
    const onSubmit = () =>{
        setArray([...personas, estadoInicial])
    }
    console.log(personas)
    return (
        <div>
            <input
                type='text'
                name='nombre'
                value={estadoInicial.nombre}
                placeholder='nombre'
                onChange={handleChange}
            />
            <input
                type='text'
                name='apellido'
                value={estadoInicial.apellido}
                placeholder='apellido'
                onChange={handleChange}
            />
            <input
                type='text'
                name='edad'
                value={estadoInicial.edad}
                placeholder='edad'
                onChange={handleChange}
            />
            <button onClick={onSubmit}>Agregar Persona</button><br></br><br></br>
            <div>
                {personas.map(elem => (<Persona nombre={elem.nombre} apellido={elem.apellido} edad={elem.edad} />))}
            </div>
        </div>
    )
}

export default Formulario


// Estado global = { personas = []}, Reducer = funcion grande, actions = funcionalidad type, payload, action-type: const ASJASD_ASDASD, 