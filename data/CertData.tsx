import BadgeAz900 from "assets/badges/az-900.png"
import BadgeAi900 from "assets/badges/ai-900.png"
import BadgePcep from "assets/badges/pcep.png"
import BadgeDepc from "assets/badges/depc.png"

export type Cert = {
  id: number;
  titulo: string;
  emisor: string;
  fecha: string;
  logo: string;
  categoria: "Cloud" | "DevOps" | "Programación";
  url: string;
  skills: string[];
};


export const certificaciones: Cert[] = [
  {
    id: 1,
    titulo: "DevOps Essentials Professional Certificate - DEPC®",
    emisor: "CertiProf",
    fecha: "2025",
    logo: BadgeDepc,
    categoria: "DevOps",
    url: "https://www.credly.com/earner/earned/badge/453859fa-d432-4bae-a153-6b8c5067c787",
    skills: ["DevOps", "Cultura Ágil", "Integración Continua"],
  },
  {
    id: 2,
    titulo: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    emisor: "Microsoft",
    fecha: "2024",
    logo: BadgeAi900,
    categoria: "Cloud",
    url: "https://www.credly.com/earner/earned/badge/3286c1ed-e37b-49ef-92f2-0b633384959e",
    skills: ["Cloud", "IA", "Azure"],
  },
  {
    id: 3,
    titulo: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    emisor: "Microsoft",
    fecha: "2025",
    logo: BadgeAz900,
    categoria: "Cloud",
    url: "https://www.credly.com/earner/earned/badge/59264edc-c613-42bf-8435-d7e6ff67364e",
    skills: ["Cloud", "Azure", "Infraestructura"],
  },
  {
    id: 4,
    titulo: "PCEP™ – Certified Entry-Level Python Programmer",
    emisor: "Python Institute",
    fecha: "2025",
    logo: BadgePcep,
    categoria: "Programación",
    url: "http://credly.com/earner/earned/badge/2592b80c-ce43-45dd-83de-7a6c70f7dd99",
    skills: ["Python", "Programación", "Lógica"],
  },
  
];
