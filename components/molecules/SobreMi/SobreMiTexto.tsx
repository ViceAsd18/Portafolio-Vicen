import Titulo from "components/atoms/General/Titulo"
import Parrafo from "components/atoms/General/Parrafo"

import InfoGroup from "./InfoGroup"

const contenedorStyle : React.CSSProperties = {
    display : 'flex',
    flexDirection : 'column',
}

const SobreMiTexto = () => {
    return (
        <div style={contenedorStyle}>
            <Titulo texto="Sobre mi" variante="tituloSecondary" size={40}></Titulo>
            <div>
                <InfoGroup></InfoGroup>

                <Parrafo color="#94a3b8" align="left" size={16} margin="16px 0" 
                texto="Soy estudiante de Ingeniería en Informática en Duoc UC (Mención Desarrollo de Software), tengo 19 años y me apasiona el desarrollo tanto frontend como backend. Además, me interesa aprender sobre cloud, especialmente AWS.">
                </Parrafo>

                <Parrafo color="#94a3b8" align="left" size={16} margin="16px 0"
                texto="Me considero una persona responsable y constante, con muchas ganas de seguir avanzando profesionalmente. Aprendo rápido cuando tengo un objetivo claro; me gusta resolver problemas probando distintas alternativas y entendiendo por qué algo funciona o no. Mantengo una actitud positiva frente a nuevos desafíos y aprovecho cada proyecto como una oportunidad para crecer.">
                </Parrafo>

                <Parrafo color="#94a3b8" align="left" size={16} margin="16px 0"
                texto="Mi objetivo a largo plazo es convertirme en un Ingeniero de Software, fortaleciendo mis conocimientos, criterio técnico y capacidad para aportar en el desarrollo de soluciones de calidad.">
                </Parrafo>

                    
                <Parrafo color="#94a3b8" align="left" size={16} margin="16px 0"
                texto="Actualmente estoy disponible para participar en proyectos u oportunidades laborales donde pueda aportar, aprender y seguir creciendo como desarrollador. Busco colaborar en entornos que me permitan compatibilizar mis estudios con experiencia práctica.">
                </Parrafo>
            </div>
        </div>
    )
}

export default SobreMiTexto