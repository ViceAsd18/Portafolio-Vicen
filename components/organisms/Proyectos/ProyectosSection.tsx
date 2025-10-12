import Card from "components/molecules/Proyectos/Card";
import PortadaClinica from "assets/proyectos/clinica/clinica-portada.png";
import IconoJava from "assets/iconos/java.svg";
import IconoSpring from "assets/iconos/spring.svg";
import IconoMySql from "assets/iconos/mysql.svg"

import Titulo from "components/atoms/Titulo"

const ProyectosSection = () => {
  return (
    <section id="proyectos">
      <Titulo texto="Proyectos Destacados" size={36} align={"center"}/>
      

      <div className="contenedor-proyectos">

      <Card
        titulo="Clínica Médica"
        descripcion="Sistema web para clínicas pequeñas que centraliza pacientes, médicos y consultas. Permite registrar fichas, agendar turnos por fecha y hora, marcar pagos y ver el estado de cada cita. Incluye un módulo de paquetes (combina servicios con descuento) y reportes mensuales. Pensado para mantener el día a día ordenado y visible en una sola vista."
        
        imagen={PortadaClinica}
        tecnologias={[
          { src: IconoJava, name: "Java" },
          { src: IconoSpring, name: "Spring Boot" },
          { src: IconoMySql, name: "MySql" },
        ]}
      />

      <Card
        titulo="EduTech Innovators"
        descripcion="Plataforma educativa online con gestión de cursos, usuarios y pagos. Desarrollada con React y Node.js."
        imagen={PortadaClinica}
        tecnologias={[
          { src: IconoJava, name: "React" },
          { src: IconoSpring, name: "Spring Boot" },
        ]}
      />

        <Card
        titulo="EduTech Innovators"
        descripcion="Plataforma educativa online con gestión de cursos, usuarios y pagos. Desarrollada con React y Node.js."
        imagen={PortadaClinica}
        tecnologias={[
          { src: IconoJava, name: "React" },
          { src: IconoSpring, name: "Spring Boot" },
        ]}
      />
      </div>


      
    </section>
  );
};

export default ProyectosSection;
