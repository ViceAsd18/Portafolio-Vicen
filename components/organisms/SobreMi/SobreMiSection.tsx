import Titulo from "components/atoms/Titulo"
import FilasEducacion from "components/molecules/SobreMi/FilasEducacion";

import LogoPrueba from "assets/iconos/linkedin.svg"





const sectionStyle: React.CSSProperties = {
  background: "linear-gradient(180deg, #f5f7fa 0%, #dce3f0 100%)",
  color: "#111827",
  padding: "100px 40px",
  display: "flex",
  justifyContent: "center",
  minHeight: "420px",
  borderRadius: "16px",
  margin: "0px 120px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
};

const contenedorStyle : React.CSSProperties = {
  display : 'grid',
  gridTemplateColumns : '2fr 1fr'
}

const columnaStyle : React.CSSProperties = {
  margin : '0px 60px'
}

const SobreMiSection = () => {
  return (
    <section id="sobre-mi" style={sectionStyle}>
      <div style={contenedorStyle}>
        
        <div style={columnaStyle}>
          <h1>Sobre mi</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sint in doloremque quod magnam quos molestias optio rem consectetur incidunt odit praesentium quia quo, atque, eum inventore consequuntur! Odio, ipsum ad. Earum doloribus minima, labore nobis sint dignissimos ipsa. Eaque voluptatem obcaecati nesciunt quis modi optio quae quidem veritatis doloribus, dolore maxime rem quas assumenda aperiam enim veniam id! Aperiam.</p>
        </div>

        <div style={columnaStyle}>
            <Titulo texto="Educacion" size={30}></Titulo>
            <div>
              <FilasEducacion titulo="Duoc UC" parrafo="Estudiando Ingenieria en informatica 2024" logo={LogoPrueba}></FilasEducacion>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SobreMiSection;
