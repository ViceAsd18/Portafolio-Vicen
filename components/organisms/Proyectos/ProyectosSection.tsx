import ProjectCard from "components/molecules/Proyectos/ProjectCard";
import Titulo from "components/atoms/General/Titulo";

const PortadaClinica = "assets/proyectos/clinica/clinica-portada.png"
const PortadaHuerto = "assets/proyectos/huerto-hogar/huerto-hogar-portada.png"
const PortadaEdustream = "assets/proyectos/edustream/Edustream-portada.png"


const contenedorStlye: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 400px))",
  gap: 28,
  justifyContent: "center",
  width: "100%",
  maxWidth: 1280,
  margin: "60px auto 0",
  boxSizing: "border-box",
  alignItems: "start",

}

const ProyectosSection = () => {
  return (
    <section id="proyectos" style={{margin : "80px 0"}}>
      <Titulo texto="Proyectos" align="center" variante="tituloSecondary" size={40}></Titulo>
    
      <div style={contenedorStlye} className="contenedor-proyectos">
        <ProjectCard 
            id="clinica-medica"
            titulo="Clínica Médica"
            resumen="Sistema web orientado a clínicas pequeñas que permite gestionar pacientes, médicos, consultas y reportes desde un solo panel. Permite registrar fichas médicas, crear y modificar turnos, controlar pagos y visualizar el estado de cada cita."
            cover={PortadaClinica}
            tecnologias={[
              { src: "assets/iconos/java.png", name: "Java" },
              { src: "assets/iconos/spring.svg", name: "Spring" },
              { src: "assets/iconos/mysql.svg", name: "MySQL" },
              { src: "assets/iconos/html.png", name: "Html" },
            ]}
            repoUrl="https://github.com/ViceAsd18/clinica"
        />

          <ProjectCard
          id="Huerto"
          titulo="Huerto Hogar"
          resumen="Tienda dedicada a conectar a los chilenos con productos frescos del campo. Permite explorar un catálogo de frutas, verduras y productos orgánicos, agregar artículos al carrito y simular compras locales mediante almacenamiento en el navegador."
          cover={PortadaHuerto}
            tecnologias={[
              { src: "assets/iconos/html.png", name: "Html" },
              { src: "assets/iconos/css.png", name: "Css" },
              { src: "assets/iconos/js.png", name: "Js" },
              { src: "assets/iconos/bootstrap.png", name: "Bootstrap" },
          ]}
          repoUrl="https://github.com/ViceAsd18/HUERTO-HOGAR"
          />

          <ProjectCard
          id="EduStream"
          titulo="EduStream"
          resumen="Landing page enfocada en la promoción de cursos en línea. Presenta un hero principal, secciones informativas y un catálogo visual de cursos. Se aplicó un diseño modular y una estructura limpia para mantener claridad en el layout."
          cover={PortadaEdustream}

          tecnologias={[
            { src: "assets/iconos/react.png", name: "React" },
            { src: "assets/iconos/typescript.png", name: "Typescript" },
          ]}
          repoUrl="https://github.com/ViceAsd18/test-fullstack.git"
        />
      </div>
    
    
    </section>


  )
}

export default ProyectosSection