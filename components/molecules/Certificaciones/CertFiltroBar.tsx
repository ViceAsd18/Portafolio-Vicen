import Boton from "components/atoms/General/Boton"

type Props = {
    categorias : string[];
    activa : string;
    onChangeFiltro : (categoria : string) => void;
    border?: "1px solid rgba(255,255,255,0.08)",

}

const filtrosStyle: React.CSSProperties = {
    display: "flex",
    gap: 8,
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "20px auto 40px",
    background: "rgba(255,255,255,0.05)",
    padding: "10px 12px",
    borderRadius: 16,
    backdropFilter: "blur(8px)",
    width: "90%",
    maxWidth: 500,
    border : "2px solid yellow"
};

const filtroBtnStyle: React.CSSProperties = {
    padding: "6px 18px",
    borderRadius: 20,
};

const CertFiltroBar = ({categorias, activa, onChangeFiltro} : Props) => {
    return (
        <div style={filtrosStyle} className="cert-filtro-bar">
            {categorias.map((cat) => (
                <Boton  key={cat} 
                        texto={cat} 
                        onClick={() => onChangeFiltro(cat)}
                        style={{
                        ...filtroBtnStyle,
                        background:
                        activa === cat
                            ? "rgba(59,130,246,0.25)" 
                            : "rgba(255,255,255,0.05)",
                        border: activa === cat
                        ? "1px solid rgba(147,197,253,0.4)"
                        : "1px solid rgba(255,255,255,0.1)",
                        boxShadow:
                        activa === cat
                            ? "0 0 12px rgba(59,130,246,0.35)"
                            : "0 0 6px rgba(0,0,0,0.2)",
                        color: "#e2e8f0",
                        transition: "all 0.25s ease",
                        }}

                ></Boton>
            ))}
        </div>
    )
}

export default CertFiltroBar