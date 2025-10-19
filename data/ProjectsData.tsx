export type Proyecto = {
    id : string;
    titulo : string;
    resumen : string;
    cover : string;
    repo? : string;
    tecnologias : string[];
    features? : string[];
    screenshots? : string[];
}

export const proyectos: Proyecto[] = [
    {
        id: "clinica-medica",
        titulo: "Clínica Médica",
        resumen: "Sistema web para clínicas pequeñas que gestiona pacientes, médicos y consultas.",
        cover: "/assets/proyectos/clinica/cover.png",
        repo: "https://github.com/tuuser/clinica",
        tecnologias: ["Java", "Spring Boot", "MySQL"],
        features: [
        "Gestión de pacientes y médicos",
        "Turnos y estado de citas",
        "Panel administrativo"
        ],
        screenshots: [
            "assets/proyectos/clinica/clinca-portada.png",
            "/assets/proyectos/clinica/clinica-portada.png"
        ]
    },

    //Añadir mas adelante por favorcito que no se me olvide 
];
