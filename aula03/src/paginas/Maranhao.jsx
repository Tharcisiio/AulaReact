import { Link } from "react-router-dom";
export default function Maranhao()
    {
return(
<div>
<h1>Estado do Maranhao</h1>

<div className="conteudo">
 <img src="/MA.png" />


<p>
Maranhão possui uma identidade única por fazer a transição geográfica entre o clima semiárido do Nordeste e a exuberância da floresta Amazônica. Sua capital, São Luís, é famosa pela arquitetura de casarões com azulejos coloniais portugueses e pelo ritmo do Bumba Meu Boi, enquanto o Parque Nacional dos Lençóis Maranhenses atrai visitantes do mundo inteiro com suas lagoas doces entre dunas.
</p>

<Link to="/">Voltar</Link>

</div>
</div>

);


    }