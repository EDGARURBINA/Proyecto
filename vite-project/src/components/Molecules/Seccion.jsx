import Article from "../Atoms/Article";
import Info from "../../Store/Informacion";
import Imagen from "../Atoms/img";
import Titulo from '../Atoms/Titulo';
import Contenedor from "../Atoms/Contenedor";
import Barra from "../Atoms/Barra";
import Parrafo from "../Atoms/Parrafo";
import ListaEstilizada from "../Atoms/ListaEstilizada";




function Heroe() {
    return (
        <>
            <Contenedor>
                <Barra> {
                    Info.Lista.map (Lista=>{
                        return <ListaEstilizada> {Lista} </ListaEstilizada>
                    })
                }</Barra>

                <Article>
                    <Imagen src={Info.Heroe.imagen} alt="imagen" />
                    <Titulo primary={true}>{Info.Heroe.Titulo}</Titulo>
                    <Parrafo>{Info.Heroe.Parrafo}</Parrafo>

                </Article>

            </Contenedor>

        </>

    )
}

export default Heroe;