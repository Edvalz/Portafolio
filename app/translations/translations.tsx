"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        header: {
          Title: "Portfolio",
        },
        welcome: {
          Title: "Want to know more aboute me?",
          Resume:
            "My name is Eduardo. I am a Systems Engineer specializing in web development, with experience in Laravel, React, and software architecture. I am passionate about creating efficient, scalable, and user-friendly solutions.",
          Subt: "Teconologies I know",
        },
        cv: {
          tool: {
            Download: "Download PDF",
            Email: "Send Email",
            Lkdn: "Go to Profile",
          },
          Title: "Fullstack Developer",
          Subt: "Laravel, React and Web components Specialist",
          Lkdn: "LinkedIn Profile",
          Profile: "Professional Profile",
          Resume:
            "Results-driven Systems Engineer with a 4-year track record in building robust web applications with Laravel, React, and Lit Element. Proficient in SQL database management and server deployment (Debian & Digital Ocean). Microsoft Certified in CRM Dynamics 365, offering a proactive approach to technical support and complex problem-solving.",
          ExpT: "Work Experience",
          EduT: "Academic Background",
        },
      },
    },
    es: {
      translation: {
        header: {
          Title: "Portafolio",
        },
        welcome: {
          Title: "Quieres conocerme",
          Resume:
            "Mi nombre es Eduardo y tengo el título Ingeniero en Sistemas especializado en desarrollo web con experiencia en Laravel, React y arquitectura de software. Apasionado por crear soluciones eficientes, escalables y fáciles de usar.",
          Subt: "Teconologías con las que he trabajado",
        },
        cv: {
          tool: {
            Download: "Descargar PDF",
            Email: "Enviar Email",
            Lkdn: "Ir al perfil",
          },
          Title: "Desarrollador Full Stack",
          Subt: "Especialista en Laravel, React y Web Components",
          Lkdn: "Perfil de LinkedIn",
          Profile: "Perfil Profesional",
          Resume:
            "Ingeniero en Sistemas con 4 años de experiencia desarrollando soluciones web robustas con Laravel, React y Lit Element. Experto en bases de datos SQL, despliegue tanto en Digital Ocean como en servidores Dabian y soporte técnico integral. Certificado por Microsoft en CRM Dynamics 365. Alta capacidad de adaptación, trabajo en equipo y resolución de problemas.",
          ExpT: "Experiencia Laboral",
          EduT: "Educación",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
});

export default i18n;
