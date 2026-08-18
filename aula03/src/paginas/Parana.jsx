import { Link } from "react-router-dom";
export default function Parana()
    {
return(
<div>
<h1>Estado do Parana</h1>

<div className="conteudo">
<img src="/PA.png" />


<p>
O Paraná se destaca por sua mistura de modernidade e natureza. Sua capital, Curitiba, é uma referência mundial em planejamento urbano e transporte público sustentável. O estado abriga as Cataratas do Iguaçu, uma das maiores maravilhas naturais do mundo, além de uma agricultura forte e indústrias modernas.
</p>

<Link to="/">Voltar</Link>

</div>
</div>
    
);

    }