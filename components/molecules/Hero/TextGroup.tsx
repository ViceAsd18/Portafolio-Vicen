import Titulo from "components/atoms/General/Titulo"
import Parrafo from "components/atoms/General/Parrafo"

const TextGroup = ( {titulo, parrafo} : {titulo : string, parrafo : string}) => {
    return (
        <div>
            <Titulo texto={titulo} nivel={1} variante="tituloPrimary" size={45}></Titulo>
            <Parrafo texto={parrafo} size={30} align="center" color="#a5b4fc" margin="10px 0px"></Parrafo>
        </div>

    )
}

export default TextGroup