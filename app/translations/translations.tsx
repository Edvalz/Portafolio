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
          jobs: [
            {
              title: "Sunrise Computer Services",
              date_range: "February 2020 - May 2023",
              tasks: [
                "CRM system develop with PHP y MySQL.",
                "Website maintenance and on-site and remote technical support.",
                "Database design and administration.",
              ],
            },
            {
              title: "Indra Sistemas México",
              date_range: "May 2023 - September 2024",
              tasks: [
                "Web component development with React, Lit Element, and Polymer.",
                "PCF development for Dynamics 365 using React, C#, JS, and Power Automate.",
                "CRM Dynamics 365 training.",
                "Use of Git and GitHub.",
                "SCRUM methodology.",
              ],
            },
            {
              title: "ICEMéxico",
              date_range: "September 2024 - August 2025",
              tasks: [
                "Development of administrative systems with Laravel, Blade, and PostgreSQL.",
                "Deployment on DigitalOcean and technical support via ticketing systems.",
                "Deployment on Debian and management of multiple applications.",
                "Use of Git and GitHub.",
                "Implementation of GitHub Actions for CI/CD.",
              ],
            },
          ],
          EduT: "Academic Background",
          school:
            "Systems and Communications Engineering  – Universidad Autónoma del Estado de México (2018 – 2023).",
          ProfT: "Professional ID: ",
          ProfID: "14202047",
          CerT: "Certifications",
          certifications: [
            "Microsoft Certified: Dynamics 365 Customer Service Functional Consultant Associate",
            "Microsoft Certified: Power Platform Fundamentals",
            "Microsoft Certified: Dynamics 365 Fundamentals (CRM)",
          ],
          HSkillsT: "Hard Skills",
          HSkills: [
            {
              title: "Frontend",
              text: "HTML5, CSS3, JavaScript (ES6), React, Lit Element, Web Components",
            },
            {
              title: "Backend",
              text: "PHP, Laravel, Blade, Node.js, C#",
            },
            {
              title: "Databases",
              text: "MySQL, PostgreSQL, MariaDB",
            },
            {
              title: "Other",
              text: "Asynchronous Programming, API Consumption, Algorithms and Data Structures, Linux Terminal",
            },
          ],
          SSkills: [
            "Responsibility",
            "Proactivity",
            "Problem Solving",
            "Teamwork",
            "Leadership",
            "Project Management",
          ],
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
          jobs: [
            {
              title: "Sunrise Computer Services",
              date_range: "Febrero 2020 - Mayo 2023",
              tasks: [
                "Desarrollo de un CRM interno con PHP y MySQL.",
                "Mantenimiento de páginas web y soporte técnico en sitio y remoto.",
                "Diseño y administración de bases de datos.",
              ],
            },
            {
              title: "Indra Sistemas México",
              date_range: "Mayo 2023 - Septiembre 2024",
              tasks: [
                "Desarrollo de componentes Web con React, Lit Element y Polymer.",
                "Desarrollo de PCFs para Dynamics 365 usando React, C#, JS y Power Automate.",
                "Capacitación en CRM Dynamics 365.",
                "Uso de Git y Git Hub.",
                "Metodología SCRUM.",
              ],
            },
            {
              title: "ICEMéxico",
              date_range: "Septiembre 2024 - Agosto 2025",
              tasks: [
                "Desarrollo de sistemas administrativos con Laravel, Blade y PostgreSQL.",
                "Despliegue en DigitalOcean y soporte técnico vía tickets.",
                "Despliegue en Debian y administración de multiples aplicaciones.",
                "Uso de Git y Git Hub.",
                "Implementación de Github Actions para CI y CD.",
              ],
            },
          ],
          EduT: "Educación",
          school:
            "Ingeniería en Sistemas y Comunicaciones – Universidad Autónoma del Estado de México (2018 – 2023).",
          ProfT: "Cédula Profesional: ",
          ProfID: "14202047",
          CerT: "Certificaciones",
          certifications: [
            "Microsoft Certified: Dynamics 365 Customer Service Functional Consultant Associate",
            "Microsoft Certified: Power Platform Fundamentals",
            "Microsoft Certified: Dynamics 365 Fundamentals (CRM)",
          ],
          HSkillsT: "Habilidades Técnicas",
          HSkills: [
            {
              title: "Frontend",
              text: "HTML5, CSS3, JavaScript (ES6), React, Lit Element, Web Components",
            },
            {
              title: "Backend",
              text: "PHP, Laravel, Blade, Node.js, C#",
            },
            {
              title: "Base de Datos",
              text: "MySQL, PostgreSQL, MariaDB",
            },
            {
              title: "Otros",
              text: "Programación Asíncrona, Consumo de APIs, Algoritmos y Estructuras de Datos, Terminal Linux",
            },
          ],
          SSkills: [
            "Responsabilidad",
            "Proactividad",
            "Resolución de Problemas",
            "Trabajo en Equipo",
            "Liderazgo",
            "Gestión de Proyectos",
          ],
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
