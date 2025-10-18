import BtnNavbar from "components/atoms/Navbar/BtnNavbar"

type Props = {
    direction? : "row" | "column"
}


const Navlist = ({ direction = "row"} : Props) => {

    const isRow = direction === "row";

    const navListStyle : React.CSSProperties = {
        display: "flex",
        flexDirection: direction,
        alignItems: "center",
        justifyContent: isRow ? "center" : "flex-start",
        gap: isRow ? 12 : 20,
        padding: isRow ? "6px 12px" : 0,
        background: isRow ? "rgba(17, 24, 39, 0.9)" : "transparent",
        border: isRow ? "1px solid rgba(255,255,255,0.1)" : "none",
        borderRadius: isRow ? 9999 : 0,
        boxShadow: isRow ? "0 4px 12px rgba(0,0,0,0.1)" : "none",

    }

    return (
        <div style={navListStyle}>
            <BtnNavbar to="#inicio" texto="Inicio"></BtnNavbar>
            <BtnNavbar to="#sobre-mi" texto="Sobre mí"></BtnNavbar>
            <BtnNavbar to="#proyectos" texto="Proyectos"></BtnNavbar>
            <BtnNavbar to="#tecnologias" texto="Tecnologías"></BtnNavbar>
            <BtnNavbar to="#certificaciones" texto="Certificaciones"></BtnNavbar>
        </div>
    )
}

export default Navlist