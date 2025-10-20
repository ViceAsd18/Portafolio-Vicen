import { Tag } from "antd"

type Props = {
    texto : string;
}

const skillStyle: React.CSSProperties = {
    background: "rgba(56,189,248,0.08)",
    color: "#e2e8f0",
    fontSize: 13,
    fontWeight: 500,
    padding: "2px 10px",
    borderRadius: 8,
    border: "1px solid rgba(56,189,248,0.25)",
    boxShadow: "0 0 6px rgba(56,189,248,0.15)",
    margin: 2,
    
};

const CertSkill = ({texto} : Props) => {
    return (
        <Tag style={skillStyle}>
            {texto}
        </Tag>
    )
}

export default CertSkill    