import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        sx={{
          maxWidth: 1000,
          bgcolor: "primary.main",
          color: "primary.contrastText",
          mt: 4,
          mb: 4,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image="/images/portada.jpg"
            alt="Portada"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              FRONTEND DEVELOPER
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.contrastText", textAlign: "justify" }}
            >
              Ingeniero en Sistemas con 4 años de experiencia desarrollando
              soluciones web robustas con Laravel, React y Lit Element. Experto
              en bases de datos SQL, despliegue tanto en Digital Ocean como en
              servidores Dabian y soporte técnico integral. Certificado por
              Microsoft en CRM Dynamics 365. Alta capacidad de adaptación,
              trabajo en equipo y resolución de problemas.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
