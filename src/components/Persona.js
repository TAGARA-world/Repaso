const Persona = ({ nombre, apellido, edad }) => {
    return (
        <>
            <h3>{nombre}</h3>
            <p>{apellido}</p>
            <span>{edad}</span>
        </>
    )
}

export default Persona