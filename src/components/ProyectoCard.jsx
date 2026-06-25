import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack
} from "@mui/material"

import { Link } from "react-router-dom"

const ProyectoCard = ({ proyecto, eliminar }) => {

  const {
    id,
    titulo,
    categoria,
    estado
  } = proyecto

  return (

    <Card sx={{ mb: 2 }}>

      <CardContent>

        <Typography variant="h5">
          {titulo}
        </Typography>

        <Typography>
          Categoría: {categoria}
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Estado: {estado}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
        >

          <Button
            variant="contained"
            color="error"
            onClick={() => eliminar(id)}
          >
            Eliminar
          </Button>

          <Button
            component={Link}
            to={`/proyectos/${id}`}
            variant="contained"
          >
            Ver Detalle
          </Button>

        </Stack>

      </CardContent>

    </Card>

  )

}

export default ProyectoCard