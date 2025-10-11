type Props = {
    src : string,
    name : string,
    size? : number
}

const TechLogo = ({src,name, size = 22} : Props) => {
    return <img 
                src={src} 
                alt={name} 
                title={name} 
                style={{ 
                    width : size,
                    height : size,
                }}/>
}

export default TechLogo

