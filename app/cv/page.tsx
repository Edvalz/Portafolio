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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CheckIcon from "@mui/icons-material/Check";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SchoolIcon from "@mui/icons-material/School";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import WorkspacePremiumSharpIcon from "@mui/icons-material/WorkspacePremiumSharp";
import BuildSharpIcon from "@mui/icons-material/BuildSharp";
import BrushSharpIcon from "@mui/icons-material/BrushSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import StorageSharpIcon from "@mui/icons-material/StorageSharp";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import Chip from "@mui/material/Chip";

const email = "eduardo_valllejo@outlook.es";

export default function Home() {
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
          <AccountBoxIcon
            sx={{ mr: 3, verticalAlign: "middle" }}
            fontSize="large"
          />
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
          <WorkHistoryIcon
            sx={{ mr: 3, verticalAlign: "middle" }}
            fontSize="large"
          />
          Experiencia Laboral
        </Typography>
        <Accordion sx={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
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
              <Typography variant="body1">
                <HomeWorkIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                Sunrise Computer Services
              </Typography>
              <Typography variant="body1">
                <DateRangeIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                Septiembre 2024 - Agosto 2025
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <CheckIcon sx={{ mr: 1 }} />
                <Typography>
                  Desarrollo de sistemas administrativos con Laravel, Blade y
                  PostgreSQL.
                </Typography>
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ mr: 1 }} />
                <Typography>
                  Despliegue en DigitalOcean y soporte técnico vía tickets.
                </Typography>
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ mr: 1 }} />
                <Typography>Uso de Git y Git Hub.</Typography>
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ mr: 1 }} />
                <Typography>
                  Despliegue en Debian y administración de multiples
                  aplicaciones.
                </Typography>
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ mr: 1 }} />
                <Typography>
                  Implementación de Github Actions para CI y CD.
                </Typography>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
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
              <Typography variant="body1">
                <HomeWorkIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                Indra Sistemas México
              </Typography>
              <Typography variant="body1">
                <DateRangeIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                Mayo 2023 - Septiembre 2024
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <CheckIcon sx={{ mr: 1 }} />
                <Typography>
                  Desarrollo de componentes Web con React, Lit Element y
                  Polymer.
                </Typography>
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ mr: 1 }} />
                <Typography>
                  Desarrollo de PCFs para Dynamics 365 usando React, C#, JS y
                  Power Automate.
                </Typography>
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ mr: 1 }} />
                <Typography>Capacitación en CRM Dynamics 365.</Typography>
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ mr: 1 }} />
                <Typography>Uso de Git y Git Hub.</Typography>
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ mr: 1 }} />
                <Typography>Metodología SCRUM.</Typography>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
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
              <Typography variant="body1">
                <EmojiTransportationIcon
                  sx={{ verticalAlign: "middle", mr: 1 }}
                />
                Sunrise Computer Services
              </Typography>
              <Typography variant="body1">
                <DateRangeIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                Febrero 2020 - Mayo 2023
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <CheckIcon sx={{ mr: 1 }} />
                <Typography>
                  Desarrollo de un CRM interno con PHP y MySQL.
                </Typography>
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ mr: 1 }} />
                <Typography>
                  Mantenimiento de páginas web y soporte técnico en sitio y
                  remoto.
                </Typography>
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ mr: 1 }} />
                <Typography>
                  Diseño y administración de bases de datos.
                </Typography>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Divider
          sx={{ width: "100%", mb: 2, mt: 4, backgroundColor: "primary.main" }}
        />
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ alignSelf: "flex-start", textAlign: "left" }}
        >
          <SchoolIcon
            sx={{ mr: 3, verticalAlign: "middle" }}
            fontSize="large"
          />
          Educación
        </Typography>
        <Typography
          gutterBottom
          align="justify"
          variant="body2"
          sx={{ alignSelf: "flex-start", textAlign: "left" }}
        >
          Ingeniería en Sistemas y Comunicaciones – Universidad Autónoma del
          Estado de México (2018 – 2023).
        </Typography>
        <Typography
          gutterBottom
          align="justify"
          variant="body2"
          sx={{ alignSelf: "flex-start", textAlign: "left" }}
        >
          Cédula Profesional: <b>14202047</b>
        </Typography>
        <Divider
          sx={{ width: "100%", my: 2, backgroundColor: "primary.main" }}
        />
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ alignSelf: "flex-start", textAlign: "left" }}
        >
          <CardMembershipIcon
            sx={{ mr: 3, verticalAlign: "middle" }}
            fontSize="large"
          />
          Certificaciones
        </Typography>
        <List sx={{ alignSelf: "flex-start", textAlign: "left" }}>
          <ListItem>
            <WorkspacePremiumSharpIcon sx={{ mr: 1 }} />
            <Typography>
              Microsoft Certified: Dynamics 365 Customer Service Functional
              Consultant Associate.
            </Typography>
          </ListItem>
          <ListItem>
            <WorkspacePremiumSharpIcon sx={{ mr: 1 }} />
            <Typography>
              Microsoft Certified: Power Platform Fundamentals.
            </Typography>
          </ListItem>
          <ListItem>
            <WorkspacePremiumSharpIcon sx={{ mr: 1 }} />
            <Typography>
              Microsoft Certified: Dynamics 365 Fundamentals (CRM).
            </Typography>
          </ListItem>
        </List>
        <Divider
          sx={{ width: "100%", my: 2, backgroundColor: "primary.main" }}
        />
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ alignSelf: "flex-start", textAlign: "left" }}
        >
          <BuildSharpIcon
            sx={{ mr: 3, verticalAlign: "middle" }}
            fontSize="large"
          />
          Habilidades Técnias
        </Typography>
        <List sx={{ alignSelf: "flex-start", textAlign: "left" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <BrushSharpIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Frontend"
              secondary="HTML5, CSS3, JavaScript (ES6), React, Lit Element, Web Components"
              slotProps={{
                primary: {
                  sx: { fontWeight: "bold" },
                },
                secondary: {
                  sx: { color: "text.primary" },
                },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <SettingsSharpIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Backend"
              secondary="PHP, Laravel, Blade, Node.js, C#"
              slotProps={{
                primary: {
                  sx: { fontWeight: "bold" },
                },
                secondary: {
                  sx: { color: "text.primary" },
                },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <StorageSharpIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Base de Datos"
              secondary="MySQL, PostgreSQL, MariaDB"
              slotProps={{
                primary: {
                  sx: { fontWeight: "bold" },
                },
                secondary: {
                  sx: { color: "text.primary" },
                },
              }}
            />
          </ListItem>
        </List>
        <Divider
          sx={{ width: "100%", my: 2, backgroundColor: "primary.main" }}
        />
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ alignSelf: "flex-start", textAlign: "left" }}
        >
          <GroupsSharpIcon
            sx={{ mr: 3, verticalAlign: "middle" }}
            fontSize="large"
          />
          Otras Habilidades
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2, flexWrap: "wrap", gap: 2 }}
        >
          <Chip label="Consumo de APIs" sx={{ bgcolor: "primary.main" }} />
          <Chip
            label="Programación Asíncrona"
            sx={{ bgcolor: "primary.main" }}
          />
          <Chip
            label="Algoritmos y Estructuras de Datos"
            sx={{ bgcolor: "primary.main" }}
          />
          <Chip label="POO" sx={{ bgcolor: "primary.main" }} />
          <Chip
            label="Resolución de Problemas"
            sx={{ bgcolor: "primary.main" }}
          />
          <Chip label="Tabajo en Equipo" sx={{ bgcolor: "primary.main" }} />
          <Chip label="Liderazgo" sx={{ bgcolor: "primary.main" }} />
        </Stack>
      </Paper>
    </Box>
  );
}

/*
 Filtar habilidades tecnicas y blandas, cambiar el orden de las experiencias laborale, 
 Alineacion de los titulos de los acordeones,
 Glosario de Iconos.
 Agregar la opción para descargar en PDF.
*/
