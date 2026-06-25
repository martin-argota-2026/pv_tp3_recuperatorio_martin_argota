const ProyectoCard = ({ proyecto, eliminar, verDetalle }) => {
  return (
    <div>
      <h3>{proyecto.titulo}</h3>

      <p>Categoría: {proyecto.categoria}</p>
      <p>Estado: {proyecto.estado}</p>

      <button onClick={() => eliminar(proyecto.id)}>
        Eliminar
      </button>

      <button onClick={() => verDetalle(proyecto)}>
        Ver Detalle
      </button>

      <hr />
    </div>
  )
}

export default ProyectoCard