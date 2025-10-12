
const btnStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: 44,
    borderRadius: 12,
    background: "#2563EB",
    color: "#FFFFFF",
    fontSize: 18,
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    padding: "6px 26px",

};


const BtnCv = () => {
    return (
        <a className="btn-cv" style={btnStyle} href="/cv/VicenteRamirez_CV.pdf" download="VicenteRamirez_CV_Frontend.pdf">Descargar CV</a>

    )
}

export default BtnCv