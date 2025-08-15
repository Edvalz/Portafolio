"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import SoftItem from "./cv/SoftItem";
import {
  Box,
  Slide,
  Typography,
  Grid,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";

export default function Home() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        minHeight: "90vh",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
        p: 2,
        mt: 7,
      }}
    >
      <Slide in={show} direction="down" timeout={1500}>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "75%",
            bgcolor: "#171717",
            p: 4,
            mt: 2,
            mb: 4,
          }}
        >
          <Grid container spacing={2} sx={{ display: "flex", width: "100%" }}>
            <Grid
              size={{ xs: 12, sm: 4 }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/images/foto.webp"
                sx={{
                  width: { xs: 150, sm: 200, md: 250 },
                  height: { xs: 150, sm: 200, md: 250 },
                  border: "4px solid",
                  borderColor: "primary.main",
                  boxShadow: 4,
                  margin: "0 auto",
                }}
              />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 8 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid
                container
                spacing={4}
                sx={{ width: "100%", color: "primary.contrastText" }}
              >
                <Grid size={12}>
                  <Stack>
                    <Typography variant="h5" align="center">
                      ¿Quieres conocerme?
                    </Typography>
                    <Typography variant="body2" align="justify" sx={{ mt: 2 }}>
                      Mi nombre es Eduardo y tengo el título Ingeniero en
                      Sistemas especializado en desarrollo web con experiencia
                      en Laravel, React y arquitectura de software. Apasionado
                      por crear soluciones eficientes, escalables y fáciles de
                      usar.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid size={12}>
                  <Typography variant="h5" align="center" sx={{ mb: 2 }}>
                    Teconologías con las que he trabajado
                  </Typography>
                  <SoftItem
                    skills={[
                      "Html",
                      "CSS",
                      "Javascript",
                      "React",
                      "Vue",
                      "PHP",
                      "Blade",
                      "Laravel",
                      "Git",
                      "Github",
                      "Dynamics 365",
                      "Wordpress",
                      "C#",
                      "MySQL",
                      "PostgresSQL",
                      "MariaDB",
                      "Linux",
                    ]}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Slide>
    </Box>
  );
}
