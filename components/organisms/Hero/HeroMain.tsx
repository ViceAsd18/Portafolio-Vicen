import { Row, Col} from "antd"

import ButtonGroup from "components/molecules/Hero/ButtonGroup";
import TextGroup from "components/molecules/Hero/TextGroup";
import Avatar from "components/atoms/Hero/Avatar"
import HeroBackground from "assets/background/backgroun-hero.png"

const heroStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
    padding: "40px 20px",
    backgroundImage: `url(${HeroBackground})`,  
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "scroll",
};


const rowStyle : React.CSSProperties = {
    width : '100%',
    maxWidth : '100%',
    margin : "0 auto"
}


const colStyle : React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
}

function HeroMain() {
    return (
        <section id="inicio" style={heroStyle} aria-label="Presentación" className="hero-section">
            <Row justify="center" align="middle" style={rowStyle}>
                <Col xs={24} sm={20} md={12} lg={10} style={colStyle}>
                    <Avatar alt="imagen vicente" size={200} src="assets/foto-portada.png"></Avatar>
                    <TextGroup titulo="Vicente Ramírez" parrafo="Desarrollador Frontend"></TextGroup>
                    <ButtonGroup></ButtonGroup>
                </Col>

            </Row>
        </section>
    );
}



export default HeroMain;