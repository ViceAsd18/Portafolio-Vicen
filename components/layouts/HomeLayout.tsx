import NavBar from "components/organisms/Navbar/Navbar"
import HeroMain from "components/organisms/Hero/HeroMain"
import ProyectosSection from "components/organisms/Proyectos/ProyectosSection";
import SobreMiSection from "components/organisms/SobreMi/SobreMiSection";
import TecnologiasSection from "components/organisms/Tecnologias/TecnologiasSection"

const paginaStyle: React.CSSProperties = {
  minHeight: "100dvh",
};

const contentStyle : React.CSSProperties = {
    maxWidth: 1600,
    margin: "0 auto",
    display : 'flex',
    flexDirection : 'column',
    gap : 120,
}


const HomeLayout = () => {
    return (
        <>
            <nav style={{
                position : "sticky",
                top : 0,
                zIndex : 1000
            }}>
                    <NavBar></NavBar>
            </nav>

            <main style={paginaStyle}>
                
                <section>
                    <HeroMain></HeroMain>
                </section>

                <div style={{...contentStyle, marginTop : 120}}>
                        <SobreMiSection/>
                        <ProyectosSection/>
                        <TecnologiasSection></TecnologiasSection>
                </div>

                    


            </main>
        </>

    )
}

export default HomeLayout