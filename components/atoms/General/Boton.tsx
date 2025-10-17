import { Button } from "antd"

type Props = {
    texto : string;
    href? : string;
    onClick? : () => void;
    style? : React.CSSProperties;
}

const BotonStyle: React.CSSProperties = {
    background: "linear-gradient(90deg, rgba(59,130,246,0.25), rgba(139,92,246,0.25))",
    border: "1px solid rgba(147,197,253,0.3)",
    color: "#f8fafc",
    borderRadius: 10,
    padding: "6px 18px",
    boxShadow: "0 0 10px rgba(56,189,248,0.25)",
};

const Boton = ({texto, href, onClick, style} : Props) => {
    return (
        <Button type="primary" href={href} onClick={onClick} style={{...BotonStyle,...style}}>
            {texto}
        </Button>
    )
}

export default Boton