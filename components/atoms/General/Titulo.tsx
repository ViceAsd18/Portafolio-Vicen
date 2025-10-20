type TituloProps = {
    texto: string;
    variante?: "tituloPrimary" | "tituloSecondary" | "tituloTercero";
    align?: "left" | "center" | "right";
    nivel? : 1 | 2 | 3 | 4 | 5 | 6
    margin? : string;
    color? : string;
    size? : number;
};

const tituloPrimary: React.CSSProperties = {
    color: "#e5e7eb",
    fontWeight: 700,    
};

const tituloSecondary: React.CSSProperties = {
    color: "#e5e7eb",
    fontWeight: 600,
};

const tituloTercero: React.CSSProperties = {
    color: "#cbd5e1",
    fontWeight: 500,
};

const estilos = {
  tituloPrimary,
  tituloSecondary,
  tituloTercero,
};

const Titulo = ({texto, variante = "tituloPrimary", align = "left", nivel = 2, margin = "0", color, size} : TituloProps) => {
    const estiloSeleccionado = estilos[variante];
    const estiloFinal = {
        ...estiloSeleccionado,
        textAlign: align,
        margin,
        fontSize: size,
        ...(color !== undefined && color !== null ? { color } : {})
    }

    const tags = {
        1: <h1 style={estiloFinal}>{texto}</h1>,
        2: <h2 style={estiloFinal}>{texto}</h2>,
        3: <h3 style={estiloFinal}>{texto}</h3>,
        4: <h4 style={estiloFinal}>{texto}</h4>,
        5: <h5 style={estiloFinal}>{texto}</h5>,
        6: <h6 style={estiloFinal}>{texto}</h6>,
    };

    return tags[nivel] ?? tags[2];
};

export default Titulo;
