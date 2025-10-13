import NavBar from "components/organisms/Navbar/Navbar"
import HeroMain from "components/organisms/Hero/HeroMain"
import ProyectosSection from "components/organisms/Proyectos/ProyectosSection";
import SobreMiSection from "components/organisms/SobreMi/SobreMiSection";

const paginaStyle: React.CSSProperties = {
  minHeight: "100dvh",
};


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

                <section className="seccion">
                    <SobreMiSection></SobreMiSection>
                </section>

                <section className="seccion">
                        <ProyectosSection></ProyectosSection>
                </section>


                    


            </main>
        </>

    )
}

export default HomeLayout