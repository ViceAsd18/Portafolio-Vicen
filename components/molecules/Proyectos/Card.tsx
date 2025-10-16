import Titulo from "components/atoms/General/Titulo";
import Parrafo from "components/atoms/General/Parrafo";
import TechLogo from "components/atoms/General/Logo";
import ImagenPortada from "components/atoms/Proyectos/ImagenPortada";


type Props = {
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: { src: string; name: string }[];
};

const cardStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  width: "100%",
  height: "auto",
  background: "#0f172a",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 10px 26px rgba(0,0,0,0.35)",
  maxWidth : "400px"
};

const imagenContainerStyle: React.CSSProperties = {
  width: "100%",
};

const bodyStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gap: 10,
  padding: "16px 18px 12px",
  marginTop : 15
};

const tecnologiasStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  padding: "0 18px 16px",
  alignItems: "center",
  minHeight: 44,
};



const Card = ({ titulo, descripcion, imagen, tecnologias }: Props) => {


  return (
    <article style={cardStyle} className="card">
      <div style={imagenContainerStyle}>
        <ImagenPortada src={imagen} alt={titulo}/>
      </div>

      <div style={bodyStyle} className="card-body">
        <Titulo texto={titulo} align="center" variante="tituloTercero" nivel={4}/>
        <Parrafo texto={descripcion} size={16} />
        <div style={tecnologiasStyle} className="card-tech">
          {tecnologias.map((tech, i) => (
            <TechLogo key={i} src={tech.src} name={tech.name} size={40}/>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
