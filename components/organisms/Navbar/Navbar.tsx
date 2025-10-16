import Navlist from "components/molecules/Navbar/Navlist";

const containerNavbarStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    padding: "12px 20px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backdropFilter: "blur(10px)",

    boxShadow: "0 2px 20px rgba(0, 0, 0, 0.4)",
    background: "linear-gradient(120deg, rgba(14,33,73,0.8), rgba(30,58,138,0.6))",
    borderBottom: "1px solid rgba(255,255,255,0.08)",

};


const NavBar = () => {
    return (
        <div style={containerNavbarStyle}>
            <Navlist></Navlist>
        </div>
    )
}

export default NavBar