import TituloHero from "components/atoms/Titulo"
import ParrafoHero from "components/atoms/Parrafo"

const TextGroup = () => {
    return (
        <div>
            <TituloHero texto="Vicente Ramírez"></TituloHero>
            <ParrafoHero texto="Desarrollador Frontend"></ParrafoHero>
        </div>

    )
}

export default TextGroup