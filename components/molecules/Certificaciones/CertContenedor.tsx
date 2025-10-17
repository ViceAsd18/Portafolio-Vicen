import { useState } from "react"
import { certificaciones } from "./CertData";

import CertFiltroBar from "./CertFiltroBar";
import CertCard from "./CertCard";

import { Col, Row } from "antd";

const sectionStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 1400,
    margin: "0 auto",
    textAlign: "center",
    padding : "0 20px",
    border : "2px solid red"
};

const contenedorCert : React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 35,
    margin: "0 auto",
}

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
        <section style={sectionStyle}>
            <CertFiltroBar
                categorias={categorias}
                activa={categoriaSeleccionada}
                onChangeFiltro={setCategoriaSeleccionada}
            />

            <Row gutter={[32,32]} justify="center" >
                {certificacionesFiltradas.map((cert) => (
                    <Col key={cert.id} xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
                        <CertCard {...cert} />
                    </Col>
                ))}
            </Row>

        </section>
    )
}

export default CertContenedor