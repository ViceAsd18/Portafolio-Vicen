type Props = {
    label : string;
    href : string;
    icon? : React.ReactNode
}

const btnStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    height: 44,
    padding: "6px 26px",
    borderRadius: 12,
    border: "1px solid #334155",
    background: "#0B1220",
    color: "#E5E7EB",
    fontSize: 18,
    textDecoration: "none",
    cursor: "pointer",
};


const BtnPrimary = ({ label, href, icon} : Props) => {
    return (
        <a style={btnStyle} href={href} target="_blank" className="btn-primary">
            {icon}{label}
        </a>
    )
}

export default BtnPrimary