import { useContext, useState } from "react"
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Stack
} from "@mui/material"
import { UsuarioContext } from "../context/UsuarioContext"

const PerfilUsuario = () => {
  const contexto = useContext(UsuarioContext)

  const usuario = contexto?.usuario || {
    nombre: "Martín Argota",
    dni: "35911877",
    rol: "Alumno",
    institucion: "Facultad de Ingeniería - UNJu"
  }

  const actualizarPerfil = contexto?.actualizarPerfil || (() => {})

  const [editando, setEditando] = useState(false)

  const [formulario, setFormulario] = useState({
    nombre: usuario.nombre,
    dni: usuario.dni,
    rol: usuario.rol,
    institucion: usuario.institucion
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormulario({
      ...formulario,
      [name]: value
    })
  }

  const guardarCambios = (e) => {
    e.preventDefault()
    actualizarPerfil(formulario)
    setEditando(false)
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Perfil de Usuario
        </Typography>

        {!editando ? (
          <Stack spacing={1}>
            <Typography>Nombre: {usuario.nombre}</Typography>
            <Typography>DNI: {usuario.dni}</Typography>
            <Typography>Rol: {usuario.rol}</Typography>
            <Typography>Institución: {usuario.institucion}</Typography>

            <Button
              variant="contained"
              onClick={() => setEditando(true)}
              sx={{ mt: 2 }}
            >
              Editar Perfil
            </Button>
          </Stack>
        ) : (
          <form onSubmit={guardarCambios}>
            <Stack spacing={2}>
              <TextField
                label="Nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
              />

              <TextField
                label="DNI"
                name="dni"
                value={formulario.dni}
                onChange={handleChange}
              />

              <TextField
                label="Rol"
                name="rol"
                value={formulario.rol}
                onChange={handleChange}
              />

              <TextField
                label="Institución"
                name="institucion"
                value={formulario.institucion}
                onChange={handleChange}
              />

              <Button type="submit" variant="contained">
                Guardar Cambios
              </Button>

              <Button
                variant="outlined"
                onClick={() => setEditando(false)}
              >
                Cancelar
              </Button>
            </Stack>
          </form>
        )}
      </Paper>
    </Container>
  )
}

export default PerfilUsuario