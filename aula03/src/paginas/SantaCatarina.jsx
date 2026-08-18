import { Link } from "react-router-dom";
export default function SantaCatarina()
    {
return(
<div>
<h1>Estado de Santa Catarina</h1>

<div className="conteudo">
 <img src="/SC.png" />


<p>
Santa Catarina é famosa por sua diversidade geográfica e alta qualidade de vida. O estado atrai turistas pelas praias do litoral, como as de Florianópolis e Balneário Camboriú, e pelo frio da serra, onde costuma nevar no inverno. A cultura local é muito marcada pela colonização alemã e italiana, visível na arquitetura e nas festas típicas.
</p>

<Link to="/">Voltar</Link>

</div>
</div>

);


    }

