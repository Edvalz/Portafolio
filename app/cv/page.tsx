"use client";

import * as React from "react";
import { useRef, useEffect, useState } from "react";
import ContactItem from "./ContactItem";
import ExperienceItem from "./ExperienceItem";
import CertificationItem from "./CertificationsItem";
import SkillItem from "./SkillItem";
import SoftItem from "./SoftItem";
import { useReactToPrint } from "react-to-print";
import {
  Typography,
  Box,
  Collapse,
  Paper,
  Divider,
  Stack,
  Fab,
  Tooltip,
} from "@mui/material";
import {
  Email as EmailIcon,
  PhoneAndroid as PhoneAndroidIcon,
  LinkedIn as LinkedInIcon,
  HomeWork as HomeWorkIcon,
  WorkHistory as WorkHistoryIcon,
  AccountBox as AccountBoxIcon,
  School as SchoolIcon,
  CardMembership as CardMembershipIcon,
  BuildSharp as BuildSharpIcon,
  BrushSharp as BrushSharpIcon,
  SettingsSharp as SettingsSharpIcon,
  StorageSharp as StorageSharpIcon,
  GroupsSharp as GroupsSharpIcon,
  Download as DownloadIcon,
  Terminal as TerminalIcon,
} from "@mui/icons-material";

const email = "eduardo_valllejo@outlook.es";

export default function CV() {
  const componentRef = useRef<HTMLDivElement>(null);
  const [collapse, setCollapse] = useState<boolean>(false);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "CV_Jose_Eduardo_Vallejo_Cruz",
  });

  useEffect(() => {
    setCollapse(true);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        minHeight: "100vh",
        p: 2,
        mt: 9,
      }}
    >
      <Collapse in={collapse} timeout={1500}>
        <Paper
          ref={componentRef}
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            p: 4,
            mt: 2,
            mb: 4,
            "@media print": {
              width: "100%",
              maxWidth: "100%",
              margin: 0,
              padding: 2,
              pageBreakInside: "avoid",
            },
          }}
        >
          <Tooltip title="Descargar PDF">
            <Fab
              color="secondary"
              onClick={handlePrint}
              sx={{
                alignSelf: "flex-end",
                mb: 2,
                "@media print": {
                  display: "none",
                },
              }}
            >
              <DownloadIcon />
            </Fab>
          </Tooltip>
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
            <ContactItem
              icon={<EmailIcon color="primary" />}
              text={email}
              href={`mailto:${email}`}
              tool="Enviar Correo"
            />
            <ContactItem
              icon={<PhoneAndroidIcon color="primary" />}
              text="55-64-34-54-79"
              tool=""
            />
            <ContactItem
              icon={<LinkedInIcon color="primary" />}
              text="Perfil de LinkedIn"
              href="https://www.linkedin.com/in/jose-eduardo-vallejo-cruz-7360541b6/"
              tool="Ir al perfil"
            />
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
              color="secondary"
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
              color="secondary"
            />
            Experiencia Laboral
          </Typography>
          <ExperienceItem
            icon={
              <HomeWorkIcon
                color="primary"
                sx={{ verticalAlign: "middle", mr: 1 }}
              />
            }
            title="Sunrise Computer Services"
            date_range="Febrero 2020 - Mayo 2023"
            tasks={[
              "Desarrollo de un CRM interno con PHP y MySQL.",
              "Mantenimiento de páginas web y soporte técnico en sitio y remoto.",
              "Diseño y administración de bases de datos.",
            ]}
          />
          <ExperienceItem
            icon={
              <HomeWorkIcon
                color="primary"
                sx={{ verticalAlign: "middle", mr: 1 }}
              />
            }
            title="Indra Sistemas México"
            date_range="Mayo 2023 - Septiembre 2024"
            tasks={[
              "Desarrollo de componentes Web con React, Lit Element y Polymer.",
              "Desarrollo de PCFs para Dynamics 365 usando React, C#, JS y Power Automate.",
              "Capacitación en CRM Dynamics 365.",
              "Uso de Git y Git Hub.",
              "Metodología SCRUM.",
            ]}
          />
          <ExperienceItem
            icon={
              <HomeWorkIcon
                color="primary"
                sx={{ verticalAlign: "middle", mr: 1 }}
              />
            }
            title="Sunrise Computer Services"
            date_range="Septiembre 2024 - Agosto 2025"
            tasks={[
              "Desarrollo de sistemas administrativos con Laravel, Blade y PostgreSQL.",
              "Despliegue en DigitalOcean y soporte técnico vía tickets.",
              "Uso de Git y Git Hub.",
              "Despliegue en Debian y administración de multiples aplicaciones.",
              "Implementación de Github Actions para CI y CD.",
            ]}
          />
          <Divider
            sx={{
              width: "100%",
              mb: 2,
              mt: 4,
              backgroundColor: "primary.main",
            }}
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
              color="secondary"
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
              color="secondary"
            />
            Certificaciones
          </Typography>
          <CertificationItem
            certifications={[
              "Microsoft Certified: Dynamics 365 Customer Service Functional Consultant Associate",
              "Microsoft Certified: Power Platform Fundamentals",
              "Microsoft Certified: Dynamics 365 Fundamentals (CRM)",
            ]}
          />
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
              color="secondary"
            />
            Habilidades Técnias
          </Typography>
          <SkillItem
            skills={[
              {
                icon: <BrushSharpIcon />,
                title: "Frontend",
                text: "HTML5, CSS3, JavaScript (ES6), React, Lit Element, Web Components",
              },
              {
                icon: <SettingsSharpIcon />,
                title: "Backend",
                text: "PHP, Laravel, Blade, Node.js, C#",
              },
              {
                icon: <StorageSharpIcon />,
                title: "Base de Datos",
                text: "MySQL, PostgreSQL, MariaDB",
              },
              {
                icon: <TerminalIcon />,
                title: "Otros",
                text: "Programación Asíncrona, Consumo de APIs, Algoritmos y Estructuras de Datos, Terminal Linux",
              },
            ]}
          />
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
              color="secondary"
            />
            Otras Habilidades
          </Typography>
          <SoftItem
            skills={[
              "Responsabilidad",
              "Proactividad",
              "Resolución de Problemas",
              "Trabajo en Equipo",
              "Liderazgo",
              "Gestión de Proyectos",
            ]}
          />
        </Paper>
      </Collapse>
    </Box>
  );
}
