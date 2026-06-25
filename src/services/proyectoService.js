const ProyectoService = (() => {

  let proyectos = [
    {
      id: 1,
      titulo: "Sistema Penitenciario",
      categoria: "Software",
      estado: "En Curso",
      descripcion: [
        "Sistema destinado a la gestión integral de establecimientos penitenciarios.",
        "Permite administrar internos, personal y estadísticas."
      ],
      recursos: [
        "Manual.pdf",
        "GitHub",
        "Google Drive"
      ],
      equipo: [
        { nombre: "Martín Argota", rol: "Desarrollador" },
        { nombre: "Rubén Umaña", rol: "Tester" }
      ]
    },
    {
      id: 2,
      titulo: "Biblioteca Virtual",
      categoria: "Educación",
      estado: "Finalizado",
      descripcion: [
        "Sistema para préstamo de libros digitales.",
        "Facilita la consulta de material académico."
      ],
      recursos: [
        "Repositorio",
        "PDF",
        "Drive"
      ],
      equipo: [
        { nombre: "José Calisaya", rol: "Backend" },
        { nombre: "Álvaro Ruiz", rol: "Frontend" }
      ]
    },
    {
      id: 3,
      titulo: "Campus Web",
      categoria: "Educación",
      estado: "En Curso",
      descripcion: [
        "Campus virtual para alumnos.",
        "Incluye materias, notas y trabajos prácticos."
      ],
      recursos: [
        "GitHub",
        "Manual",
        "Drive"
      ],
      equipo: [
        { nombre: "Daniel Flores", rol: "Frontend" }
      ]
    },
    {
      id: 4,
      titulo: "Portal de Alumnos",
      categoria: "Gestión",
      estado: "En Curso",
      descripcion: [
        "Portal para consultas académicas.",
        "Permite inscripción y seguimiento."
      ],
      recursos: [
        "Repositorio",
        "PDF"
      ],
      equipo: [
        { nombre: "Martín Argota", rol: "Desarrollador" }
      ]
    },
    {
      id: 5,
      titulo: "Sistema de Inscripciones",
      categoria: "Administración",
      estado: "Finalizado",
      descripcion: [
        "Sistema para inscripción de alumnos.",
        "Genera reportes y estadísticas."
      ],
      recursos: [
        "Drive",
        "GitHub"
      ],
      equipo: [
        { nombre: "Rubén Umaña", rol: "Administrador" }
      ]
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

  const buscarProyectoPorId = (id) => {
    return proyectos.find(
      proyecto => proyecto.id === Number(id)
    )
  }

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto,
    buscarProyectoPorId
  }

})()

export default ProyectoService