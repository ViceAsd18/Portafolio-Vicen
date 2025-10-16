type Props = { 
    src: string;
    alt: string;
    height?: number 
};


const ImagenPortada = ({src, alt} : Props) => {
    return (
        <img src={src} alt={alt} style={{
            width : "100%",
            height : "100%",
            objectFit : "cover",
            display : 'block'
        }} />
    )
}

export default ImagenPortada