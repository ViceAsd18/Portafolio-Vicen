import { useState } from "react"
import { certificaciones } from "data/CertData"

import CertFiltroBar from "./CertFiltroBar";
import CertCard from "./CertCard";

import { Col, Row } from "antd";

const contenedorStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 1400,
    margin: "0 auto",
    textAlign: "center",
    padding : "0 20px",
};



const categorias = ["Todos", "Cloud", "DevOps", "Programación"];


const CertContenedor = () => {


    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

    // Si la categoría es "Todos", se muestran todas las certificaciones
    // De lo contrario, solo las que coincidan con la categoría seleccionada
    const certificacionesFiltradas = categoriaSeleccionada === "Todos"
                                     ? certificaciones
                                     : certificaciones.filter(
                                                (cert) => cert.categoria === categoriaSeleccionada
                                    );

    return (
        <div style={contenedorStyle} className="certificaciones-content">
            <CertFiltroBar
                categorias={categorias}
                activa={categoriaSeleccionada}
                onChangeFiltro={setCategoriaSeleccionada}
            />

            <Row gutter={[32,32]} justify="center" >
                {certificacionesFiltradas.map((cert) => (
                    <Col key={cert.id} xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
                        <CertCard {...cert} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default CertContenedor