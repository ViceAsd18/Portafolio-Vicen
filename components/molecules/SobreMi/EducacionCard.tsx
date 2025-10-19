import Titulo from "components/atoms/General/Titulo"
import Parrafo from "components/atoms/General/Parrafo";
import Logo from "components/atoms/General/Logo";

type Props = {
    logo: string;
    institucion: string;
    titulo: string;
    periodo: string;
};

const cardEstudioStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 16,
    background: "rgba(255,255,255,0.05)",
    padding: "16px 20px",
    borderRadius: 10,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

const logoStyle: React.CSSProperties = {
    filter : "none",
    borderRadius : 8
};

const EducacionCard = ({ logo, institucion, titulo, periodo }: Props) => {
    return (
        <div style={cardEstudioStyle}>
            <Logo src={logo} alt={institucion} style={logoStyle} ></Logo>
            <div>
                <Titulo texto={institucion} variante="tituloTercero" nivel={4} size={16} ></Titulo>
                <Parrafo texto={titulo} size={14} color="#cbd5e1" margin="4px 0"></Parrafo>
                <Parrafo texto={periodo} size={12} color="#94a3b8"></Parrafo>
            </div>
        </div>
    )
}

export default EducacionCard;
