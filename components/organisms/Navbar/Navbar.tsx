import Navlist from "components/molecules/Navbar/Navlist";

const containerNavbarStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 64,
  padding: "12px 20px",
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.6)",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  borderBottom: "1px solid rgba(0,0,0,0.05)",
};


const NavBar = () => {
    return (
        <div style={containerNavbarStyle}>
            <Navlist></Navlist>
        </div>
    )
}

export default NavBar