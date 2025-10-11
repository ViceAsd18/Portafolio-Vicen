import ButtonGroup from "components/molecules/Hero/ButtonGroup";
import TextGroup from "components/molecules/Hero/TextGroup";
import Avatar from "components/atoms/Hero/Avatar"

const heroStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    textAlign: "center",
    minHeight: "86vh",
    padding: "20px",
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
                <Avatar alt="imagen vicente"></Avatar>
                <TextGroup></TextGroup>
                
                <div style={containerBtn}>
                    <ButtonGroup />
                </div>

            </div>
        </section>
    );
}



export default HeroMain;