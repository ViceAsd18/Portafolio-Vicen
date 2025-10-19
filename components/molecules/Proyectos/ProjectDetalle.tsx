import { useParams, Link } from "react-router";
import { proyectos } from "data/ProjectsData";
import Titulo from "components/atoms/General/Titulo";
import Parrafo from "components/atoms/General/Parrafo";
import SectionContenedor from "components/atoms/General/SectionContenedor";
import Boton from "components/atoms/General/Boton";
import Logo from "components/atoms/General/Logo";


const contenedorStlye : React.CSSProperties = {
    display : 'grid',
    gridTemplateColumns : "1fr",
    gap : 24
}

