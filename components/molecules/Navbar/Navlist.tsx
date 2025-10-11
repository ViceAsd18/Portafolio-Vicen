import BtnNavbar from "components/atoms/Navbar/BtnNavbar"


const navListStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "6px 10px",
    background: "#111827",
    border: "2px solid rgba(255,255,255,.06)",
    borderRadius: 9999,
};

const Navlist = () => {
    return (
        <div style={navListStyle}>
            <BtnNavbar to="/inicio" texto="Inico"></BtnNavbar>
            <BtnNavbar to="/sobre-mi" texto="Sobre mí"></BtnNavbar>
            <BtnNavbar to="/proyectos" texto="Proyectos"></BtnNavbar>
            <BtnNavbar to="/tecnologias" texto="Tecnologías"></BtnNavbar>
            <BtnNavbar to="/certificaciones" texto="Certificaciones"></BtnNavbar>
            <BtnNavbar to="/contacto" texto="Contacto"></BtnNavbar>
        </div>
    )
}

export default Navlist