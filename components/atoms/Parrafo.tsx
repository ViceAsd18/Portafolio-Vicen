const pStyle: React.CSSProperties = {
  fontSize: "20px",
  lineHeight: 1.6,
  color: "#374151",
  margin: "6px 0 10px",
  maxWidth: 640,
};

type ParrafoProps = {
  texto: string;
  size?: number;
};

const Parrafo = ({texto, size = 18} : ParrafoProps) => {
    return (
        <p style={{...pStyle, fontSize : size}}>{texto}</p>
    )
}

export default Parrafo