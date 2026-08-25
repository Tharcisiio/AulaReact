import { Link } from "react-router-dom";
export default function Paraiba()
    {
return(
<div>
<h1>Estado da Paraiba</h1>

<div className="conteudo">
 <img src="/PB.png" />


<p>
Paraíba abriga o ponto mais oriental das Américas na praia de Ponta do Seixas, em sua capital João Pessoa, uma cidade reconhecida pelo planejamento urbano e áreas verdes. No interior do estado, a cultura ferve com força total na cidade de Campina Grande, que sedia anualmente o famoso "Maior São João do Mundo", celebrando o autêntico forró e as tradições do couro.
</p>

<Link to="/">Voltar</Link>

</div>
</div>

);


    }