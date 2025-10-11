import { NavLink } from "react-router"

type Props = {
    to : string,
    texto : string
}

const btnNavbarStyle = {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: 9999,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "1",
    color: "#E5E7EB",
    background: "transparent",
    border: "1px solid transparent",
    opacity: 0.8,
}



const BtnNavbar = ({to, texto} : Props) => {
    return (
        <NavLink className='btn-navbar' style={btnNavbarStyle} to={to}>
            {texto}
        </NavLink>
    )
}

export default BtnNavbar