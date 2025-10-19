import ProjectCard from "components/molecules/Proyectos/ProjectCard";
import Titulo from "components/atoms/General/Titulo";

import PortadaClinica from "assets/proyectos/clinica/clinica-portada.png"

const contenedorStlye: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 400px))",
  gap: 28,
  justifyContent: "center",
  alignItems: "stretch",
  width: "100%",
  maxWidth: 1280,
  margin: "60px auto 0",
  boxSizing: "border-box",
}

const ProyectosSection = () => {
  return (
    <section id="proyectos" style={{margin : "80px 0"}}>
      <Titulo texto="proyectos" align="center" variante="tituloSecondary" size={40}></Titulo>
    
      <div style={contenedorStlye} className="contenedor-proyectos">
        <ProjectCard 
            id="clinica-medica"
            titulo="Clínica Médica"
            resumen="Sistema web para clínicas pequeñas que centraliza pacientes, médicos y consultas. Permite registrar fichas, agendar turnos, marcar pagos y ver el estado de cada cita."
            cover={PortadaClinica}
        />

          <ProjectCard
          id="edutech"
          titulo="EduTech Innovators"
          resumen="Plataforma educativa online con gestión de cursos, usuarios y pagos. Desarrollada con React y Node.js."
          cover={PortadaClinica}
        />

        <ProjectCard
          id="gamery"
          titulo="Gamery"
          resumen="Plataforma gamer con gestión de partidas, amigos y logros. Implementada con Java y Spring Boot."
          cover={PortadaClinica}
        />
      </div>
    
    
    </section>


  )
}

export default ProyectosSection