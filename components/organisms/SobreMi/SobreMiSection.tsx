import Titulo from "components/atoms/Titulo";
import Parrafo from "components/atoms/Parrafo";

const sectionStyle: React.CSSProperties = {
  background: "linear-gradient(180deg, #f5f7fa 0%, #dce3f0 100%)",
  color: "#111827",
  padding: "100px 40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "420px",
  borderRadius: "16px",
  margin: "0px 120px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
};

const contenedorStyle : React.CSSProperties = {

}

const columnaStyle : React.CSSProperties = {

}

const SobreMiSection = () => {
  return (
    <section id="sobre-mi" style={sectionStyle}>
      <div style={contenedorStyle}>
        
        <div style={columnaStyle}>
            <h2>Sobre Mi</h2>
        </div>

        <div style={columnaStyle}>
            <h2>Educacion</h2>
        </div>

      </div>
    </section>
  );
};

export default SobreMiSection;
