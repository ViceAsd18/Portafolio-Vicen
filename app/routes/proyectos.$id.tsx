import { Link, useParams } from "react-router";

export default function ProyectoDetalle () {
    const { id } = useParams();

    return (
        <main style={{background : "#222"}}>
            <Link to="..">← Volver</Link>
            <h1 style={{ marginTop: 16 }}>Proyecto: {id}</h1>
            <p>Esta es la página de detalle. Luego cargamos info real.</p>
        </main>
    )

}