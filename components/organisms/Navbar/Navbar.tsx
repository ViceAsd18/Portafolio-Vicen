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
    background: "rgba(17, 24, 39, 0.85)",
    backdropFilter: "blur(12px)",
    padding: "80px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const headerStyle: React.CSSProperties = {
    background: "rgba(17, 24, 39, 0.85)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    textAlign: "center",
};

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const mostrarDrawer = () => setOpen(true);
    const cerrarDrawer = () => setOpen(false);

    return (
        <nav style={navStyle}>
            <Titulo texto="vicente" />

            <div className="navlist-desktop">
                <Navlist direction="row" />
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
