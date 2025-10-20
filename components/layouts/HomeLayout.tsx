    import NavBar from "components/organisms/Navbar/Navbar"
import HeroMain from "components/organisms/Hero/HeroMain"
import ProyectosSection from "components/organisms/Proyectos/ProyectosSection";
import SobreMiSection from "components/organisms/SobreMi/SobreMiSection";
import TecnologiasSection from "components/organisms/Tecnologias/TecnologiasSection"
import CertificacionesSection from "components/organisms/Certificaciones/CertificacionesSection";

const paginaStyle: React.CSSProperties = {
    minHeight: "100dvh",
    overflow : "hidden"
};

const contentStyle : React.CSSProperties = {
    width: "100%",
    maxWidth: "1600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: 120,
    overflowX: "hidden",
}


const HomeLayout = () => {
    return (
        <>
            <NavBar></NavBar>

            <main style={paginaStyle} className="main-layout">
                
                <section>
                    <HeroMain></HeroMain>
                </section>

                <div className="contenido-pagina" style={{ ...contentStyle, marginTop: 120 }}>
                <section id="sobre-mi" className="sobre-mi-section"><SobreMiSection /></section>
                <section id="proyectos" className="proyectos-section"><ProyectosSection /></section>
                <section id="tecnologias" className="tecnologias-section"><TecnologiasSection /></section>
                <section id="certificaciones" className="certificaciones-section"><CertificacionesSection /></section>
                </div>

                    


            </main>
        </>

    )
}

export default HomeLayout