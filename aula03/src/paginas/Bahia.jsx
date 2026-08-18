import { Link } from "react-router-dom";
export default function Bahia()
    {
return(
<div>
<h1>Estado da Bahia</h1>


<div className="conteudo">
 <img src="/PI.png" />

 <p>
 Capital: Teresina. Única capital nordestina que não fica no litoral. O estado abriga o Parque Nacional da Serra da Capivara, um dos maiores sítios arqueológicos do mundo.
 </p>

 <Link to="/">Voltar</Link>

</div>
</div>



);


    }