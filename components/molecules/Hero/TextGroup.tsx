import Titulo from "components/atoms/Titulo"
import Parrafo from "components/atoms/Parrafo"

const TextGroup = ( {titulo, parrafo} : {titulo : string, parrafo : string}) => {
    return (
        <div>
            <Titulo texto={titulo} size={56}></Titulo>
            <Parrafo texto={parrafo} size={30}></Parrafo>
        </div>

    )
}

export default TextGroup