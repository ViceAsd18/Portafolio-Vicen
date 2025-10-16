import ButtonGroup from "components/molecules/Hero/ButtonGroup";
import TextGroup from "components/molecules/Hero/TextGroup";
import Avatar from "components/atoms/Hero/Avatar"

import HeroBackground from "assets/background/backgroun-hero.png"

const heroStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    textAlign: "center",
    height : "100vh",
    padding: "20px",

    backgroundImage: `url(${HeroBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
};

const contentStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    maxWidth: 680,
    width: "100%",
    alignItems: "center",
    margin: "0 auto",
};

const containerBtn : React.CSSProperties = {
    display : 'flex',
    gap : '12',
    marginTop : 8
}

function HeroMain() {
    return (
        <section id="inicio" style={heroStyle} aria-label="Presentación">
            <div style={contentStyle}>
                <Avatar alt="imagen vicente" size={260}></Avatar>
                <TextGroup titulo="Vicente Ramírez" parrafo="Frontend Developer"></TextGroup>
                
                <div style={containerBtn}>
                    <ButtonGroup />
                </div>

            </div>
        </section>
    );
}



export default HeroMain;