import SectionContenedor from "components/atoms/General/SectionContenedor"
import CertContenedor from "components/molecules/Certificaciones/CertContenedor"
import Titulo from "components/atoms/General/Titulo"


const CertificacionesSection = () => {
    return (
   <SectionContenedor variante="glass" className="certificaciones-section">
      <Titulo
        texto="Certificaciones"
        variante="tituloPrimary"
        align="center"
        size={40}
        margin="0 0 20px 0"
      />

        <CertContenedor></CertContenedor>
    </SectionContenedor>
    )
}

export default CertificacionesSection 