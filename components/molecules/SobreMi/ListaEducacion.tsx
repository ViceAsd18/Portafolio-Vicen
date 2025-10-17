import Titulo from "components/atoms/General/Titulo";
import EducacionCard from "./EducacionCard";
import logoDuocUc from "assets/iconos/duocuc.png";
import logoUdemy from "assets/iconos/udemy.png";

const listaStyle : React.CSSProperties = {
  display : 'flex',
  flexDirection : 'column',
  gap : 20
}

const contenedorStyle : React.CSSProperties = {
  display : 'flex',
  flexDirection : "column",
  gap : 24
}

const ListaEducacion = () => {
  return (  
      <div style={contenedorStyle}>
        <Titulo texto="Educacion" variante="tituloSecondary" size={30}></Titulo>
        <div style={contenedorStyle}>

        <EducacionCard 
        logo={logoDuocUc}
        institucion="Duoc UC"
        titulo="Ingeniería en Informática"
        periodo="2024 – Actualidad"
        />

        <EducacionCard
        logo={logoUdemy}
        institucion="Udemy"
        titulo="Spring Framework 6 & Spring Boot 3"
        periodo="2025 enero – 2025 julio"
        />

        </div>
      </div>
  )  

}

export default ListaEducacion
