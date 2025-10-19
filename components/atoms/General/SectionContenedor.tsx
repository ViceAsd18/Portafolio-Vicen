
type Props = {
    children : React.ReactNode;
    padding? : string;
    variante? : "default" | "glass";
    className?: string;
    border?: "1px solid rgba(255,255,255,0.10)",

}




const BaseSectionStyle : React.CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems : "center",
    background: "rgba(37, 52, 72, 0.9)",
    boxShadow: "0 8px 40px rgba(56,189,248,0.15)",
    marginTop : 120,   
    borderRadius : 12,
}

const varianteGlass : React.CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.06)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 8px 40px rgba(147,51,234,0.1)",
    marginTop: 120,
    borderRadius: 12,
    
}


const contenedorStyle : React.CSSProperties = {
    maxWidth : "1600px",
    width : "100%",
    margin : "0 auto",
}

const SectionContenedor = ({children, padding = "100px 80px", variante="default", className = ""} : Props) => {
    
    const estilo = variante === "glass" ? varianteGlass : BaseSectionStyle;

    return (
        <section style={{...estilo, padding}} className={`section-base ${className}`}>
            <div style={contenedorStyle}>
                {children}
            </div>
        </section>
    )
}

export default SectionContenedor