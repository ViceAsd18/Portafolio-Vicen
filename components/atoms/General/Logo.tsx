type LogoProps = {
  src: string;
  alt?: string;
  name?: string;
  size?: number; 
  radius?: number
  title?: string;  fit?: "contain" | "cover";
  invertOnDark?: boolean;        // Para logos negros
  direction?: "column" | "row";
  gap?: number;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
};

const baseImgStyle: React.CSSProperties = {
  objectFit: "contain",
  filter: "drop-shadow(0 0 4px rgba(56,189,248,0.3))",
  display: "block",
};

const baseTextStyle: React.CSSProperties = {
  color: "#f1f5f9",
  fontSize: 14,
  fontWeight: 500,
  opacity: 0.9,
  whiteSpace: "nowrap",
  textAlign: "center",
};

const Logo = ({src, alt, name, size = 50, radius = 0, title, fit = "contain", 
              invertOnDark = false, direction = "column", gap = 8, style, textStyle, containerStyle,} : LogoProps) => {
  
  const img = (
    <img
      src={src}
      alt={alt ?? name ?? "logo"}
      title={title ?? name ?? alt}
      style={{
        ...baseImgStyle,
        width: size,
        height: size,
        borderRadius: radius,
        objectFit: fit,
        filter: invertOnDark ? "brightness(0) invert(1)" : baseImgStyle.filter,
        ...style,
      }}
    />
  );

  //Retorna solo la imagen
  if (!name) return img;


  // Retorna el logo mas el titulo abajo
  return (
    <div style={{display: "flex", flexDirection: direction, alignItems: "center", gap, ...containerStyle,}}>
      {img}
      <span style={{ ...baseTextStyle, ...textStyle }}>{name}</span>
    </div>
  );
};

export default Logo;
