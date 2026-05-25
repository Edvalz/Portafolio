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
import { useTranslation } from "react-i18next";

const email = "eduardo_valllejo@outlook.es";

interface ExperienceItemProps {
  title: string;
  date_range: string;
  tasks: string[];
}

interface SkillItemProps {
  title: string;
  text: string;
}

export default function CV() {
  const componentRef = useRef<HTMLDivElement>(null);
  const [collapse, setCollapse] = useState<boolean>(false);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "CV_Jose_Eduardo_Vallejo_Cruz",
  });

  const { t } = useTranslation();

  const jobsList = t("cv.jobs", {
    returnObjects: true,
  }) as ExperienceItemProps[];

  const skillsList = t("cv.HSkills", {
    returnObjects: true,
  }) as SkillItemProps[];

  const certificationsList = t("cv.certifications", {
    returnObjects: true,
  }) as string[];

  const sskillsList = t("cv.SSkills", {
    returnObjects: true,
  }) as string[];

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
          <Tooltip title={t("cv.tool.Download")}>
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
            <Typography variant="body1">{t("cv.Title")}</Typography>
            <Typography variant="body1">{t("cv.Subt")}</Typography>
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
              tool={t("cv.tool.Email")}
            />
            <ContactItem
              icon={<PhoneAndroidIcon color="primary" />}
              text="55-64-34-54-79"
            />
            <ContactItem
              icon={<LinkedInIcon color="primary" />}
              text="Perfil de LinkedIn"
              href="https://www.linkedin.com/in/jose-eduardo-vallejo-cruz-7360541b6/"
              tool={t("cv.tool.Lkdn")}
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
            {t("cv.Profile")}
          </Typography>
          <Typography
            gutterBottom
            align="justify"
            variant="body2"
            sx={{ alignSelf: "flex-start", textAlign: "left" }}
          >
            {t("cv.Resume")}
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
            {t("cv.ExpT")}
          </Typography>
          {jobsList.map((job, index) => (
            <ExperienceItem
              icon={
                <HomeWorkIcon
                  color="primary"
                  sx={{ verticalAlign: "middle", mr: 1 }}
                />
              }
              key={index}
              title={job.title}
              date_range={job.date_range}
              tasks={job.tasks}
            />
          ))}
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
            {t("cv.EduT")}
          </Typography>
          <Typography
            gutterBottom
            align="justify"
            variant="body2"
            sx={{ alignSelf: "flex-start", textAlign: "left" }}
          >
            {t("cv.school")}
          </Typography>
          <Typography
            gutterBottom
            align="justify"
            variant="body2"
            sx={{ alignSelf: "flex-start", textAlign: "left" }}
          >
            {t("cv.ProfT")} <b>{t("cv.ProfID")}</b>
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
            {t("cv.CerT")}
          </Typography>
          <CertificationItem certifications={certificationsList} />
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
            {t("cv.HSkillsT")}
          </Typography>
          <SkillItem
            skills={skillsList.map((skill, index) => {
              const icons = [
                <BrushSharpIcon key="front" />,
                <SettingsSharpIcon key="back" />,
                <StorageSharpIcon key="db" />,
                <TerminalIcon key="other" />,
              ];

              return {
                icon: icons[index],
                title: skill.title,
                text: skill.text,
              };
            })}
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
          <SoftItem skills={sskillsList} />
        </Paper>
      </Collapse>
    </Box>
  );
}
