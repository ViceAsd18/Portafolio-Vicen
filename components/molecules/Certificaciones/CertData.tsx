
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
    fecha: "2028",
    logo: "",
    categoria: "DevOps",
    url: "https://www.credly.com/badges",
    skills: ["DevOps", "Cultura Ágil", "Integración Continua"],
  },
  {
    id: 2,
    titulo: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    emisor: "Microsoft",
    fecha: "2024",
    logo: "",
    categoria: "Cloud",
    url: "https://www.credly.com/badges",
    skills: ["Cloud", "IA", "Azure"],
  },
  {
    id: 3,
    titulo: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    emisor: "Microsoft",
    fecha: "2025",
    logo: "",
    categoria: "Cloud",
    url: "https://www.credly.com/badges",
    skills: ["Cloud", "Azure", "Infraestructura"],
  },
  {
    id: 4,
    titulo: "PCEP™ – Certified Entry-Level Python Programmer",
    emisor: "Python Institute",
    fecha: "2025",
    logo: "",
    categoria: "Programación",
    url: "https://www.credly.com/badges",
    skills: ["Python", "Programación", "Lógica"],
  },
];
