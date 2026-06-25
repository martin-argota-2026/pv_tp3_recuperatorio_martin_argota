const DetalleProyecto = ({ proyecto }) => {
  if (!proyecto) {
    return null
  }

  const descripcion = proyecto.descripcion || []
  const recursos = proyecto.recursos || []
  const equipo = proyecto.equipo || []

  return (
    <section>
      <h2>Detalle del Proyecto</h2>
      <h3>{proyecto.titulo}</h3>

      {descripcion.map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
      ))}

      <h4>Recursos</h4>
      <ul>
        {recursos.map((recurso, index) => (
          <li key={index}>{recurso}</li>
        ))}
      </ul>

      <h4>Equipo</h4>
      <ul>
        {equipo.map((persona, index) => (
          <li key={index}>
            {persona.nombre} - {persona.rol}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default DetalleProyecto