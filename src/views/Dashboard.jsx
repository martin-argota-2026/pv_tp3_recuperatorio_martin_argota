import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material"

const Dashboard = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Box>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Bienvenido a la plataforma de Gestión de Proyectos Educativos.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total de proyectos</Typography>
                <Typography variant="h4">12</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Proyectos en curso</Typography>
                <Typography variant="h4">5</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Proyectos finalizados</Typography>
                <Typography variant="h4">7</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Dashboard