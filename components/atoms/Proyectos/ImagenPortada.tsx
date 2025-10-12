type Props = { 
    src: string;
    alt: string;
    height?: number 
};


const ImagenPortada = ({src, alt, height = 160} : Props) => {
    return (
        <img src={src} alt={alt} style={{
            width : "100%",
            height,
            objectFit : "cover",
        }} />
    )
}

export default ImagenPortada