import {BrowserRouter, Routes, Route} from"react-router-dom";

import Home from "./paginas/Home";
import SaoPaulo from "./paginas/SaoPaulo";
import MinasGerais from "./paginas/MinasGerais";
import RioJaneiro from "./paginas/RioJaneiro";
import EspiritoSanto from "./paginas/EspiritoSanto";
import Parana from "./paginas/Parana";
import RioGrandedoSul from "./paginas/RioGrandedoSul";
import SantaCatarina from "./paginas/SantaCatarina";
import Amazonas from "./paginas/Amazonas";
import Amapa from "./paginas/Amapa";
import Tocantins from "./paginas/Tocantins";
import Rondonia from "./paginas/Rondonia";
import Acre from "./paginas/Acre";
import Roraima from "./paginas/Roraima";
import Para from "./paginas/Para";
import Bahia from "./paginas/Bahia";
import Pernambuco from "./paginas/Pernambuco";
import Ceara from "./paginas/Ceara";
import Maranhao from "./paginas/Maranhao";
import Paraiba from "./paginas/Paraiba";
import RioGrandedoNorte from "./paginas/RioGrandedoNorte";
import Alagoas from "./paginas/Alagoas";
import Sergipe from "./paginas/Sergipe";
import Piaui from "./paginas/Piaui";





export default function App()
{
return(
<BrowserRouter>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/estados/sp" element={<SaoPaulo />}  />
<Route path="/estados/mg" element={<MinasGerais />}  />
<Route path="/estados/rj" element={<RioJaneiro />}  />
<Route path="/estados/es" element={<EspiritoSanto />}  />

<Route path="/estados/pa" element={<Parana />}  />
<Route path="/estados/rs" element={<RioGrandedoSul />}  />
<Route path="/estados/sc" element={<SantaCatarina />}  />

<Route path="/estados/am" element={<Amazonas />}  />
<Route path="/estados/ap" element={<Amapa />}  />
<Route path="/estados/to" element={<Tocantins />}  />
<Route path="/estados/ro" element={<Rondonia />}  />
<Route path="/estados/rr" element={<Roraima />}  />
<Route path="/estados/ac" element={<Acre />}  />
<Route path="/estados/pr" element={<Para />}  />

<Route path="/estados/ba" element={<Bahia />}  />
<Route path="/estados/pe" element={<Pernambuco />}  />
<Route path="/estados/ce" element={<Ceara />}  />
<Route path="/estados/ma" element={<Maranhao />}  />
<Route path="/estados/pb" element={<Paraiba />}  />
<Route path="/estados/rn" element={<RioGrandedoNorte />}  />
<Route path="/estados/al" element={<Alagoas />}  />
<Route path="/estados/se" element={<Sergipe />}  />
<Route path="/estados/pi" element={<Piaui />}  />



</Routes>

</BrowserRouter>



);


}