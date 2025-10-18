import BtnPrimary from "components/atoms/Hero/BtnPrimary";
import BtnCv from "components/atoms/Hero/BtnCV";

import icono_linkedin from "assets/iconos/linkedin.svg" 
import icono_github from "assets/iconos/github.svg"

const buttonGroupStyle: React.CSSProperties = {
    display: "flex",
    gap: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    flexWrap: "wrap",
};


const ButtonGroup = () => {
    return (
        <div style={buttonGroupStyle} className="button-group">
            <BtnPrimary label="LinkedIn" 
                        href="https://www.linkedin.com/in/vicente-ram%C3%ADrez-21336b336/" 
                        icon={
                            <img src={icono_linkedin} alt="" width={22} height={22} style={{filter : "invert(1) brightness(1.2)"}}
                        />}>
            </BtnPrimary>

            <BtnPrimary label="GitHub" 
                        href="https://github.com/ViceAsd18" 
                        icon={<img src={icono_github} alt="" width={20} height={20} style={{filter : "invert(1) brightness(1.2)"}}/>}>
            </BtnPrimary>

            <BtnCv></BtnCv>

 
        </div>
    )
}

export default ButtonGroup
