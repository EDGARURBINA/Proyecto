import Navegacion from "../Molecules/Navegacion";
import Heroe from "../Molecules/Seccion";
import Apartado from "../Atoms/Apartado";
import Header from "../Atoms/Header";
import Info from "../../Store/Informacion";
  import Titulo from "../Atoms/Titulo";
import Populares from "../Molecules/Populares";
import Final from "../Molecules/Final";




function Pagina() {
return(
<>
<Navegacion value={Info.Navegacion.Titulo}></Navegacion>
<Header> <Titulo primary> {Info.Header} </Titulo> </Header>
<Heroe></Heroe>
<br /><br /><br />
 <Navegacion value={Info.Populares} ></Navegacion> 
<Populares></Populares>
 <Navegacion value={Info.Final} ></Navegacion> 
<Final></Final>   


</>

)
}

export default Pagina;
