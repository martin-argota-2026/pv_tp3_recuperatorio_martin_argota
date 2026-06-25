const ProyectoService = (() => {

  let proyectos = [
    {
      id: 1,
      titulo: "Sistema Penitenciario",
      categoria: "Software",
      estado: "En Curso"
    },
    {
      id: 2,
      titulo: "Biblioteca Virtual",
      categoria: "Educación",
      estado: "Finalizado"
    },
    {
      id: 3,
      titulo: "Campus Web",
      categoria: "Educación",
      estado: "En Curso"
    },
    {
      id: 4,
      titulo: "Portal de Alumnos",
      categoria: "Gestión",
      estado: "En Curso"
    },
    {
      id: 5,
      titulo: "Sistema de Inscripciones",
      categoria: "Administración",
      estado: "Finalizado"
    }
  ]

  const obtenerProyectos = () => [...proyectos]

  const agregarProyecto = (proyecto) => {
    proyectos.push(proyecto)
  }

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter(
      proyecto => proyecto.id !== id
    )
  }

  const buscarProyecto = (texto) => {
    return proyectos.filter(
      proyecto =>
        proyecto.titulo
          .toLowerCase()
          .includes(texto.toLowerCase())
    )
  }

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto
  }

})()

export default ProyectoService