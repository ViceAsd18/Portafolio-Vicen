import IconoDuocPrueva from "assets/iconos/linkedin.svg"
import LogoEducacion from "components/atoms/SobreMi/LogoEducacion"
import Titulo from "components/atoms/Titulo"
import Parrafo from "components/atoms/Parrafo"

const styleContentEdu : React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "0px 16px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    maxWidth: "400px",
    width: "100%",
    transition: "transform 0.2s ease",
    cursor: "default",
}

const textContainerStlye : React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap : 0

}

const FilasEducacion = ({titulo, parrafo, logo} : {titulo : string, parrafo : string, logo : string}) => {
    return (
        <div style={styleContentEdu}>
            <LogoEducacion src={logo} name="LogoDuocUC" size={65}></LogoEducacion>

            <div style={textContainerStlye}>
                <Titulo texto={titulo} align="left" size={22}></Titulo>
                <Parrafo texto={parrafo}></Parrafo>
            </div>

        </div>
    )
}

export default FilasEducacion;