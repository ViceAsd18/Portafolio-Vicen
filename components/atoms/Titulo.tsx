
type TituloProps = {
    texto : string;
    size? : number;
    align?: "left" | "center" | "right";
}


const tituloStyle: React.CSSProperties = {
    fontWeight: 600,
    margin: "2rem 0 0.5rem 0",
    lineHeight: 1.2,
    color: "#1a1a1a",
    fontFamily: "'Inter', system-ui, sans-serif"
};

const Titulo = ( {texto, size = 40, align = "left"} : TituloProps)  => {
    return (
        <h1 className="titulo" style={{...tituloStyle, fontSize : size, textAlign : align}}>
            {texto}
        </h1>
    )
}   

export default Titulo