
type TituloProps = {
    texto : string;
    size? : number;
}


const tituloStyle: React.CSSProperties = {
    fontSize: 40,
    fontWeight: 800,
    color: "#E5E7EB",
    margin: "8px 0 10px",
    lineHeight: 1.1,
    letterSpacing: "0.3px",

    display: "inline-block",
    textAlign: "center",

    textShadow: "0 1px 0 rgba(0,0,0,.35)",
};

const Titulo = ( {texto, size = 40} : TituloProps)  => {
    return (
        <h1 style={{...tituloStyle, fontSize : size}}>
            {texto}
        </h1>
    )
}   

export default Titulo