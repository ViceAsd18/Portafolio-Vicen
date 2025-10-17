import { Card, Space } from "antd";
import Titulo from "components/atoms/General/Titulo";
import Logo from "components/atoms/General/Logo";

type Props = {
  titulo: string;
  tecnologias: { src: string; name: string; size?: number }[];
};

const cardStyle: React.CSSProperties = {
  background: "rgba(17, 24, 39, 0.85)",
  border: "1px solid rgba(255,255,255,0.05)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  borderRadius: 12,
  color: "#fff",
  width: "95%",
  
};

const GrupoTecnologias = ({ titulo, tecnologias }: Props) => {
  return (
    <Card style={cardStyle} bordered={false}>
      <Titulo texto={titulo} variante="tituloTercero" align="left"  size={20}/>
      <Space
        size="large"
        wrap
        style={{
          marginTop: 16,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {tecnologias.map((tec, index) => (
          <Logo key={index} src={tec.src} name={tec.name} size={tec.size || 50} />
        ))}
      </Space>
    </Card>
  );
};

export default GrupoTecnologias;
