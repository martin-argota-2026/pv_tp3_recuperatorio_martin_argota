import { useEffect, useRef, useState } from "react"
import ProyectoService from "../services/proyectoService"
import ProyectoCard from "./ProyectoCard"
import FormularioProyecto from "./FormularioProyecto"
import RegistroActividad from "./RegistroActividad"

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(ProyectoService.obtenerProyectos())
  const [textoBusqueda, setTextoBusqueda] = useState("")
  const [ultimaActualizacion, setUltimaActualizacion] = useState("")
  const primeraCarga = useRef(true)

  useEffect(() => {
    if (primeraCarga.current) {
      primeraCarga.current = false
      return
    }

    const fecha = new Date()

    const dia = String(fecha.getDate()).padStart(2, "0")
    const mes = String(fecha.getMonth() + 1).padStart(2, "0")
    const anio = fecha.getFullYear()
    const horas = String(fecha.getHours()).padStart(2, "0")
    const minutos = String(fecha.getMinutes()).padStart(2, "0")

    setUltimaActualizacion(
      `Última actualización de la lista: ${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`
    )
  }, [proyectos])

  const agregarProyecto = (nuevoProyecto) => {
    ProyectoService.agregarProyecto(nuevoProyecto)
    setProyectos(ProyectoService.obtenerProyectos())
    setTextoBusqueda("")
  }

  const eliminar = (id) => {
    ProyectoService.eliminarProyecto(id)
    setProyectos(ProyectoService.obtenerProyectos())
    setTextoBusqueda("")
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

  return (
    <main>
      <h2>Lista de Proyectos</h2>

      <FormularioProyecto agregarProyecto={agregarProyecto} />

      <br />

      <input
        type="text"
        placeholder="Buscar proyecto..."
        value={textoBusqueda}
        onChange={buscar}
      />

      {proyectos.map((proyecto) => (
        <ProyectoCard
          key={proyecto.id}
          proyecto={proyecto}
          eliminar={eliminar}
        />
      ))}

      <RegistroActividad fecha={ultimaActualizacion} />
    </main>
  )
}

export default ListaProyectos