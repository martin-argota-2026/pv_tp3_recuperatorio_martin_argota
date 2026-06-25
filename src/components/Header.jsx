import { useContext } from "react"
import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { UsuarioContext } from "../context/UsuarioContext"

const Header = () => {
  const contexto = useContext(UsuarioContext)

  const usuario = contexto?.usuario || {
    nombre: "Martín Argota",
    rol: "Alumno"
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Gestión de Proyectos Educativos
        </Typography>

        <Box>
          <Typography variant="body2">
            {usuario.nombre} - {usuario.rol}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header