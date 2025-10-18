import SectionContenedor from "components/atoms/General/SectionContenedor"
import SobreMiTexto from "components/molecules/SobreMi/SobreMiTexto"
import ListaEducacion from "components/molecules/SobreMi/ListaEducacion"

import { Row, Col} from "antd"


const SobreMiSection = () => {
    return (
        <SectionContenedor className="sobre-mi-section">
            <Row gutter={[60,40]} align="top" justify="center">
                <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                    <SobreMiTexto></SobreMiTexto>
                </Col>

                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <ListaEducacion></ListaEducacion>
                </Col>
            </Row>
        </SectionContenedor>
    )   
}

export default SobreMiSection


