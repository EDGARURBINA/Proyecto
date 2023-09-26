import Nav from "../Atoms/Nav";
import Texto from "../Atoms/Titulo";
import Info from "../../Store/Informacion";
import Imagen from "../Atoms/img";
import Header from "../Atoms/Header";


function Navegacion ({value}) {

return(
    <>

    <Nav>
     <Imagen src={Info.Navegacion.imagen} alt="imagen" primary={true} />
        <Texto   >{value}</Texto>

        </Nav>



    </>
)

}

export default Navegacion;
