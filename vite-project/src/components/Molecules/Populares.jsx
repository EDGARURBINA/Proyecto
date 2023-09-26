import Apartado from "../Atoms/Apartado";
import Info from "../../Store/Informacion";
import Imagen from "../Atoms/img";

function Populares(){
    return(

        <Apartado>
            {
                Info.Carrusel.map (Carrusel=>{
                    return  <Imagen src={Carrusel} alt="imagen" secondary={true} />;
                })
            }
        </Apartado>



    )
}

export default Populares;