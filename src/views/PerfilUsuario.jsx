import { Container, Paper, Typography, List, ListItem, ListItemText } from "@mui/material"

const PerfilUsuario = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Perfil de Usuario
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Nombre" secondary="Martín Argota" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Rol" secondary="Alumno" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Institución" secondary="Facultad de Ingeniería - UNJu" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  )
}

export default PerfilUsuario