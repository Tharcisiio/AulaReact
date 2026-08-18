import { Link } from "react-router-dom";
export default function Acre()
    {
return(
<div>
<h1>Estado do Acre</h1>


<div className="conteudo">
 <img src="/AC.png" />

 <p>
 O Acre guarda orgulho de sua história de anexação ao Brasil e da preservação ecológica. Rio Branco possui parques ambientais integrados à cidade que valorizam a identidade amazônica. A floresta preservada abriga comunidades extrativistas e mistérios arqueológicos intrigantes, como os geoglifos no solo.
 </p>

 <Link to="/">Voltar</Link>

</div>
</div>



);


    }