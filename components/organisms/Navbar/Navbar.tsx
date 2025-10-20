import React, { useState } from "react";
import Navlist from "components/molecules/Navbar/Navlist";
import { Drawer } from "antd";
import BtnMenuMobile from "components/atoms/Navbar/BtnMenuMobile";
import Titulo from "components/atoms/General/Titulo";

const navStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 28px",
    background: "rgba(15, 23, 42, 0.9)",
    backdropFilter: "blur(10px)",
    top: 0,
    zIndex: 1000,
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    position: "sticky",
};

const bodyStyle: React.CSSProperties = {
    background: "linear-gradient(180deg, rgba(11,16,27,0.95) 0%, rgba(15,23,42,0.95) 100%)",
    padding: "70px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 26,    
};

const headerStyle: React.CSSProperties = {
    background: "rgba(15,23,42,1)",
    borderBottom: "1px solid rgba(56,189,248,0.25)",
    textAlign: "center",
    color: "#e2e8f0",
    fontWeight: 600,
    fontSize: 18,
    letterSpacing: 0.3,
};

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const mostrarDrawer = () => setOpen(true);
    const cerrarDrawer = () => setOpen(false);

    return (
        <nav style={navStyle}>
            <Titulo texto="vicente" />

            <div className="navlist-desktop">
                <Navlist direction="row"/>
            </div>

            <BtnMenuMobile onClick={mostrarDrawer} />

            <Drawer
                placement="right"
                open={open}
                onClose={cerrarDrawer}
                zIndex={4000}
                rootClassName="drawer-glass"
                closeIcon={<span style={{ color: "#E5E7EB", fontSize: 20 }}>✕</span>}

                styles={{
                header : headerStyle,
                body : bodyStyle
                }}

                title={<span style={{ color: "#E5E7EB", fontWeight: 600 }}>Menú</span>}

            >
                <div onClick={cerrarDrawer}>
                <Navlist direction="column" />
                </div>
            </Drawer>
        </nav>
            );
    };

export default Navbar;
