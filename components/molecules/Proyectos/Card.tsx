import Titulo from "components/atoms/Titulo";
import Parrafo from "components/atoms/Parrafo";
import TechLogo from "components/atoms/TechLogo";
import ImagenPortada from "components/atoms/Proyectos/ImagenPortada";


type Props = {
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: { src: string; name: string }[];
};

const cardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: 540,
  height: 610,
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  justifyContent: "space-between",
  


};

const imagenContainerStyle: React.CSSProperties = {
  width: "100%",
  height : "55%",
  objectFit : "cover"
};


const bodyStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: "22px 24px 26px",
  justifyContent: "space-between",
  height: "45%",
};

const tecnologiasStyle: React.CSSProperties = {
  display: "flex",
  gap: 16,
  marginTop: 12,
};

const Card = ({ titulo, descripcion, imagen, tecnologias }: Props) => {


  return (
    <article style={cardStyle} className="card">
      <div style={imagenContainerStyle}>
        <ImagenPortada src={imagen} alt={titulo} height={300}/>
      </div>

      <div style={bodyStyle}>
        <Titulo texto={titulo} size={22} align="left" />
        <Parrafo texto={descripcion} size={16} />
        <div style={tecnologiasStyle}>
          {tecnologias.map((tech, i) => (
            <TechLogo key={i} src={tech.src} name={tech.name} size={45} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
