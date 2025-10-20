import React from "react";

type Props = {
    icon: React.ReactNode;
    texto: string;
    href?: string;
};

const contenedorStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "#cbd5e1",
    fontSize: 15,
};

const linkStyle: React.CSSProperties = {
    color: "#e2e8f0",
    textDecoration: "none",
    opacity: 0.9,
};

const iconStyle: React.CSSProperties = {
    color: "#38bdf8",
    fontSize: 18,
};

const InfoItem = ({ icon, texto, href }: Props) => {
    return (
        <div style={contenedorStyle}>
            <span style={iconStyle}>{icon}</span>
        {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            {texto}
        </a>
        ) : (
            <span>{texto}</span>
        )}
        </div>
    );
};

export default InfoItem;
