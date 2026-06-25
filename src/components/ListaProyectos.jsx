import { useState } from "react"
import ProyectoService from "../services/proyectoService"
import ProyectoCard from "./ProyectoCard"
import DetalleProyecto from "./DetalleProyecto"

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    ProyectoService.obtenerProyectos()
  )

  const [textoBusqueda, setTextoBusqueda] = useState("")

  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: "",
    categoria: "",
    estado: "",
    descripcion: "",
    recursos: "",
    equipo: ""
  })

  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)

  const eliminar = (id) => {
    ProyectoService.eliminarProyecto(id)
    setProyectos(ProyectoService.obtenerProyectos())
    setProyectoSeleccionado(null)
  }

  const buscar = (e) => {
    const texto = e.target.value
    setTextoBusqueda(texto)

    if (texto === "") {
      setProyectos(ProyectoService.obtenerProyectos())
    } else {
      setProyectos(ProyectoService.buscarProyecto(texto))
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setNuevoProyecto({
      ...nuevoProyecto,
      [name]: value
    })
  }

  const agregarProyecto = (e) => {
    e.preventDefault()

    const proyecto = {
      id: Date.now(),
      titulo: nuevoProyecto.titulo,
      categoria: nuevoProyecto.categoria,
      estado: nuevoProyecto.estado,
      descripcion: [
        nuevoProyecto.descripcion,
        "Este proyecto fue agregado desde el formulario de la aplicación React."
      ],
      recursos: nuevoProyecto.recursos.split(","),
      equipo: [
        {
          nombre: nuevoProyecto.equipo,
          rol: "Integrante"
        }
      ]
    }

    ProyectoService.agregarProyecto(proyecto)
    setProyectos(ProyectoService.obtenerProyectos())

    setNuevoProyecto({
      titulo: "",
      categoria: "",
      estado: "",
      descripcion: "",
      recursos: "",
      equipo: ""
    })
  }

  return (
    <main>
      <h2>Lista de Proyectos</h2>

      <form onSubmit={agregarProyecto}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={nuevoProyecto.titulo}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          value={nuevoProyecto.categoria}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="estado"
          placeholder="Estado"
          value={nuevoProyecto.estado}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={nuevoProyecto.descripcion}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="recursos"
          placeholder="Recursos separados por coma"
          value={nuevoProyecto.recursos}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="equipo"
          placeholder="Nombre del integrante"
          value={nuevoProyecto.equipo}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Agregar Proyecto
        </button>
      </form>

      <br />

      <input
        type="text"
        placeholder="Buscar proyecto..."
        value={textoBusqueda}
        onChange={buscar}
      />

      {proyectos.map(proyecto => (
        <ProyectoCard
          key={proyecto.id}
          proyecto={proyecto}
          eliminar={eliminar}
          verDetalle={setProyectoSeleccionado}
        />
      ))}

      <DetalleProyecto proyecto={proyectoSeleccionado} />
    </main>
  )
}

export default ListaProyectos