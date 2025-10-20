import Titulo from "components/atoms/General/Titulo";
import Parrafo from "components/atoms/General/Parrafo";
import Boton from "components/atoms/General/Boton";
import Logo from "components/atoms/General/Logo";

type Props = {
  id: string;
  titulo: string;
  resumen: string;
  cover: string;
  tecnologias: { src: string; name?: string }[];
  repoUrl?: string;
};

const cardStyle: React.CSSProperties = {
  background: "rgba(15,23,42,0.9)",
  border: "1px solid rgba(56,189,248,0.12)",
  borderRadius: 16,
  color: "#e2e8f0",
  textAlign: "center",
  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
  backdropFilter: "blur(10px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 10,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  padding: "16px 0 16px",
  justifyContent: "space-between",



};

const imageContenedor: React.CSSProperties = {
  width: "100%",
  aspectRatio: "16 / 9",
  overflow: "hidden",
  borderRadius: 12,
  margin: "6px 12px 8px",
  display: "block",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  objectPosition: "center",
  display: "block",
};

const contentStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 6,
  padding: "0 12px",

  

};

const footerStyle: React.CSSProperties = {
  marginTop: "auto",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  
};

const tecnologiasContenedor: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 14,
  margin: "10px 0",
};  

const ProjectCard = ({titulo, resumen, cover, tecnologias, repoUrl}: Props) => {
  return (
    <article style={cardStyle}>
      <div style={imageContenedor}>
        <Logo src={cover} alt={titulo} style={imageStyle}></Logo>
      </div>

      <div style={contentStyle}>
        <Titulo texto={titulo} variante="tituloSecondary" size={22} align="center" margin="12px 0 10px 0"/>
        <Parrafo texto={resumen} align="center" size={15} color="#cbd5e1" margin="0 auto"/>
      </div>

      <div style={tecnologiasContenedor}>
          {tecnologias.map((t, i) => (
            <Logo key={i} src={t.src} name={t.name} size={32} />
          ))}
      </div>

      <div style={footerStyle}>
        <Boton texto="Ver Código" href={repoUrl}/>
      </div>

    </article>
  );
};

export default ProjectCard;