import NavBar from "components/organisms/Navbar/Navbar"
import HeroMain from "components/organisms/Hero/HeroMain"

const pageStyle: React.CSSProperties = {
    background: "#03070F",      
    minHeight: "100dvh",
};

const HomeLayout = () => {
    return (
        <>
            <header>
                <div>
                    <NavBar></NavBar>
                </div>
            </header>

            <main style={pageStyle}>
                <div>
                    <HeroMain></HeroMain>
                </div>
            </main>
        </>

    )
}

export default HomeLayout