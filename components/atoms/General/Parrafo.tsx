const baseParrafo: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif",
  fontWeight: 400,
  lineHeight: 1.5,
  margin: 0,
};

type ParrafoProps = {
  texto: string;
  size?: number;
  color?: string;
  align?: "left" | "center" | "right";
  margin?: string;
};

const Parrafo = ({texto, size = 18, align = "left", margin = "0", color = "#06B6D4" }: ParrafoProps) => {
  return (
    <p style={{...baseParrafo, fontSize: size, color, textAlign: align, margin,}}>
      {texto}
    </p>
  );
};  

export default Parrafo;
