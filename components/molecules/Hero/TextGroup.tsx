import TituloHero from "components/atoms/Titulo"
import ParrafoHero from "components/atoms/Parrafo"

const TextGroup = () => {
    return (
        <div>
            <TituloHero texto="Vicente Ramírez" size={56}></TituloHero>
            <ParrafoHero texto="Desarrollador Frontend" size={30}></ParrafoHero>
        </div>

    )
}

export default TextGroup