import { Link } from "react-router-dom";
export default function Pernambuco()
    {
return(
<div>
<h1>Estado do Parana</h1>

<div className="conteudo">
<img src="/PA.png" />


<p>
Pernambuco é um dos grandes polos históricos, econômicos e tecnológicos da região, unindo o passado colonial de Olinda e Recife à modernidade do Porto Digital. Musicalmente vibrante, o estado é o berço do frevo, do maracatu e do icônico Galo da Madrugada, além de abrigar o santuário ecológico e paradisíaco do arquipélago de Fernando de Noronha.
</p>

<Link to="/">Voltar</Link>

</div>
</div>
    
);

    }