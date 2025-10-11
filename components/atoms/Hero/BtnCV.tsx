
const btnStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    height: 44,
    padding: "0 20px",
    borderRadius: 12,
    border: "1px solid #334155",
    background: "#0B1220",
    color: "#E5E7EB",
    fontSize: 16,
    textDecoration: "none",
    cursor: "pointer",
};


const BtnCv = () => {
    return (
        <a style={btnStyle} href="/cv/VicenteRamirez_CV.pdf" download="VicenteRamirez_CV_Frontend.pdf">Descargar CV</a>

    )
}

export default BtnCv