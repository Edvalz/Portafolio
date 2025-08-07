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
          direction="row"
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
      </Paper>
    </Box>
  );
}
