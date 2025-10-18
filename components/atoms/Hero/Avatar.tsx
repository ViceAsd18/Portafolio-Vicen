type Props = {
  src?: string;
  alt: string;
  size?: number; 
};

export default function Avatar({ src, alt, size = 160 }: Props) {
  const box: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: "50%",
    overflow: "hidden",
    background: "#0f172a",
    border: "1px solid rgba(255,255,255,.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const img: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: src ? "block" : "none",
  };



  return (
    <div style={box} aria-label={alt}>
      {src ? <img src={src} alt={alt} style={img} /> : <span>V</span>}
    </div>
  );
}
