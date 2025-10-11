import Navlist from "components/molecules/Navbar/Navlist";

const containerNavbarStyle: React.CSSProperties = {
    display: "flex",
    justifyContent : 'center',
    alignItems: "center",
    height: 64,
    padding: "12px 20px",
    position: "sticky",
    top: 0,
    zIndex: 50,
    boxShadow: "0 2px 10px rgba(0,0,0,.25)",
};


const NavBar = () => {
    return (
        <div style={containerNavbarStyle}>
            <Navlist></Navlist>
        </div>
    )
}

export default NavBar