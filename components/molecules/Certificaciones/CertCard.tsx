import Logo from "components/atoms/General/Logo"
import Titulo from "components/atoms/General/Titulo"
import Parrafo from "components/atoms/General/Parrafo"
import CertSkill from "components/atoms/Certificaciones/CertSkill";
import Boton from "components/atoms/General/Boton";

type Props = {
    logo : string;
    titulo : string;
    emisor : string;
    fecha : string;
    skills : string[];
    url : string;
}

const cardStyle: React.CSSProperties = {
    background: "rgba(15,23,42,0.9)",
    border: "1px solid rgba(56,189,248,0.12)",
    borderRadius: 20,
    padding: "32px 28px",
    color: "#e2e8f0",
    textAlign: "center",
    boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
    backdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: 320,
    height : 420,
    margin: "0 auto",
    boxSizing : "border-box"
}

const logoContainer: React.CSSProperties = {
    marginBottom: 18,
};

const logoStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.06)",
    borderRadius: "50%",
    padding: 8,
    boxShadow: "0 0 12px rgba(56,189,248,0.35)",
};


const CertCard = ({logo, titulo, emisor, fecha, skills, url} : Props) => {
    return (
        <article style={cardStyle} className="cert-card">
            <div style={logoContainer}>
                <Logo src={logo} alt={emisor} size={100} style={logoStyle}/>
            </div>

            <Titulo texto={titulo}
                    variante="tituloSecondary"
                    align="center"
                    size={18}
                    margin="0 0 6px 0"
            />

            <Parrafo texto={`${emisor} · ${fecha}`}
                     align="center"
                     color="#94a3b8"
                     margin="0 0 12px 0"   
            />

            <div>
                {skills.map((s) => (
                    <CertSkill key={s} texto={s}></CertSkill>
                ))}
            </div>

            <Boton texto="Ver credencial" href={url} ></Boton>

        </article>
    )
}

export default CertCard