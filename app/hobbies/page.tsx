"use client";
import * as React from "react";
import HobbyItem from "./HobbyItem";
import { Box, Paper, Stack, Typography } from "@mui/material";

export default function Hobbies() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 2,
        mt: 9,
      }}
    >
      <Stack sx={{ width: "100%" }}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            display: "flex",
            width: "100%",
            bgcolor: "#171717",
            color: "primary.contrastText",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              letterSpacing: ".1rem",
              textTransform: "uppercase",
              textAlign: "center",
              color: "primary.main",
              textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
              p: 1,
              borderBottom: "3px solid",
              borderColor: "primary.main",
              width: "fit-content",
            }}
          >
            Estos son mis hobbies
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            mt: 2,
            display: "flex",
            width: "100%",
            bgcolor: "#171717",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HobbyItem
            hobbies={[
              {
                image: "/images/videojuegos.webp",
                img_title: "mandos",
                title: "Videojuegos",
                text: "Mi genero favorito son los RPG y mi saga favorita es The Legend of Zelda.",
              },
              {
                image: "/images/peliculas.webp",
                img_title: "peliculas",
                title: "Peliculas",
                text: "Ciencia Ficcio, Terror y Suspenso son mis generos favoritos.",
              },
              {
                image: "/images/libros.webp",
                img_title: "libros",
                title: "Libros",
                text: "Adoro leer novelas sobre distopías futuristas, de misterio y Fantasía",
              },
              {
                image: "/images/series.webp",
                img_title: "sofa",
                title: "Series/Anime",
                text: "No hay nada mejor que una tarde viendo series con mi pareja",
              },
            ]}
          />
        </Paper>
      </Stack>
    </Box>
  );
}
