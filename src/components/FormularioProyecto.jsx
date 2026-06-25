import { useState } from "react"

const FormularioProyecto = ({ agregarProyecto }) => {

  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: "",
    descripcion: "",
    recursos: "",
    equipo: ""
  })

  const handleChange = (e) => {

    const { name, value } = e.target

    setFormulario({
      ...formulario,
      [name]: value
    })

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    const nuevoProyecto = {
      id: Date.now(),
      titulo: formulario.titulo,
      categoria: formulario.categoria,
      estado: formulario.estado,
      descripcion: [
        formulario.descripcion,
        "Proyecto agregado desde el formulario."
      ],
      recursos: formulario.recursos.split(","),
      equipo: [
        {
          nombre: formulario.equipo,
          rol: "Integrante"
        }
      ]
    }

    agregarProyecto(nuevoProyecto)

    setFormulario({
      titulo: "",
      categoria: "",
      estado: "",
      descripcion: "",
      recursos: "",
      equipo: ""
    })

  }

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={formulario.titulo}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={formulario.categoria}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="estado"
        placeholder="Estado"
        value={formulario.estado}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="descripcion"
        placeholder="Descripción"
        value={formulario.descripcion}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="recursos"
        placeholder="Recursos (separados por coma)"
        value={formulario.recursos}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="equipo"
        placeholder="Nombre del integrante"
        value={formulario.equipo}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Agregar Proyecto
      </button>

    </form>

  )

}

export default FormularioProyecto