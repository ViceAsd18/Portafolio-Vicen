import BtnNavbar from "components/atoms/Navbar/BtnNavbar"


const navListStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "6px 12px",
  background: "rgba(17, 24, 39, 0.9)", // el mismo azul oscuro pero translúcido
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 9999,
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const Navlist = () => {
    return (
        <div style={navListStyle}>
            <BtnNavbar to="/inicio" texto="Inicio"></BtnNavbar>
            <BtnNavbar to="#sobre-mi" texto="Sobre mí"></BtnNavbar>
            <BtnNavbar to="#proyectos" texto="Proyectos"></BtnNavbar>
            <BtnNavbar to="/tecnologias" texto="Tecnologías"></BtnNavbar>
            <BtnNavbar to="/certificaciones" texto="Certificaciones"></BtnNavbar>
        </div>
    )
}

export default Navlist