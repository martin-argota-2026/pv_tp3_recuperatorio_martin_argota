import { useParams, Link } from "react-router-dom"
import {
  Button,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material"
import ProyectoService from "../services/proyectoService"

const DetalleProyecto = () => {
  const { id } = useParams()

  const proyecto = ProyectoService.buscarProyectoPorId(id)

  if (!proyecto) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Proyecto no encontrado
        </Typography>

        <Button
          component={Link}
          to="/proyectos"
          variant="contained"
        >
          Volver a proyectos
        </Button>
      </Container>
    )
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {proyecto.titulo}
          </Typography>

          <Typography variant="subtitle1">
            Categoría: {proyecto.categoria}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Estado: {proyecto.estado}
          </Typography>

          <Typography variant="h5" sx={{ mt: 3 }}>
            Descripción
          </Typography>

          {proyecto.descripcion.map((parrafo, index) => (
            <Typography key={index} sx={{ mt: 1 }}>
              {parrafo}
            </Typography>
          ))}

          <Typography variant="h5" sx={{ mt: 3 }}>
            Recursos
          </Typography>

          <List>
            {proyecto.recursos.map((recurso, index) => (
              <ListItem key={index}>
                <ListItemText primary={recurso} />
              </ListItem>
            ))}
          </List>

          <Typography variant="h5" sx={{ mt: 3 }}>
            Equipo
          </Typography>

          <List>
            {proyecto.equipo.map((persona, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={persona.nombre}
                  secondary={persona.rol}
                />
              </ListItem>
            ))}
          </List>

          <Button
            component={Link}
            to="/proyectos"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Volver a proyectos
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}

export default DetalleProyecto