const cardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  width: "100%",
  border: "1px solid rgba(148,163,184,0.18)",
  borderRadius: 16,
  background: "rgba(255,255,255,0.03)",
  padding: 16,
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  aspectRatio: "16 / 9", 
  borderRadius: 12,
  border: "1px solid rgba(148,163,184,0.18)",
};

const bodyStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const Card = () => {
    return (
        <article style={cardStyle}>

            <div style={imgStyle}>

            </div>

            <div style={bodyStyle}>

            </div>
        </article>
    )
}

export default Card

