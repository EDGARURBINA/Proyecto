
import Article from "../Atoms/Article";
import Contenedor from "../Atoms/Contenedor";
import Parrafo from "../Atoms/Parrafo";
import Titulo from "../Atoms/Titulo";
import Info from "../../Store/Informacion";
import Imagen from "../Atoms/img";




function Final (){
    return(
        <>
        <Contenedor  >
            <Article primary>
                <Titulo primary >{Info.Juego.Titulo}</Titulo>
               <Parrafo>{Info.Juego.Parrafo}</Parrafo>
            </Article>
            <Imagen src={Info.Juego.imagen} alt="imagen" tercery={true} />

        </Contenedor>
        </>

  

    )



}
export default Final;