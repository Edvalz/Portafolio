"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const email = "eduardo_valllejo@outlook.es";

export default function Home() {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "75%",
          maxWidth: "1000px",
          p: 4,
          mt: 4,
          mb: 4,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Jose Eduardo Vallejo Cruz
        </Typography>
        <Divider
          sx={{ width: "100%", my: 2, backgroundColor: "primary.main" }}
        />
        <Stack
          direction="row"
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ my: 2, backgroundColor: "primary.main" }}
            />
          }
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="body1">Desarrollador Full Stack</Typography>
          <Typography variant="body1">
            Especialista en Laravel, React y Web Components
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <EmailIcon sx={{ color: "primary.main" }} />
            <Typography variant="body1">
              <Link href={`mailto:${email}`}>{email}</Link>
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <PhoneAndroidIcon sx={{ color: "primary.main" }} />
            <Typography variant="body1">55-64-34-54-79</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <LinkedInIcon sx={{ color: "primary.main" }} />
            <Typography variant="body1">
              <Link
                href="https://www.linkedin.com/in/jose-eduardo-vallejo-cruz-7360541b6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Perfil de LinkedIn
              </Link>
            </Typography>
          </Stack>
        </Stack>
        <Divider
          sx={{ width: "100%", my: 2, backgroundColor: "primary.main" }}
        />
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ alignSelf: "flex-start", textAlign: "left" }}
        >
          Perfil profesional
        </Typography>
        <Typography
          gutterBottom
          align="justify"
          variant="body2"
          sx={{ alignSelf: "flex-start", textAlign: "left" }}
        >
          Ingeniero en Sistemas con 4 años de experiencia desarrollando
          soluciones web robustas con Laravel, React y Lit Element. Experto en
          bases de datos SQL, despliegue tanto en Digital Ocean como en
          servidores Dabian y soporte técnico integral. Certificado por
          Microsoft en CRM Dynamics 365. Alta capacidad de adaptación, trabajo
          en equipo y resolución de problemas.
        </Typography>
        <Divider
          sx={{ width: "100%", my: 2, backgroundColor: "primary.main" }}
        />
        <Typography
          variant="h4"
          gutterBottom
          sx={{ alignSelf: "flex-start", textAlign: "left" }}
        >
          Experiencia Laboral
        </Typography>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Pestaña 1" />
          <Tab label="Pestaña 2" />
          <Tab label="Pestaña 3" />
        </Tabs>
      </Paper>
    </Box>
  );
}
