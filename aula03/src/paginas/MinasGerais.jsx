import { Link } from "react-router-dom";
export default function MinasGerais()
    {
return(
<div>
<h1>Estado de Minas Gerais</h1>

<div className="conteudo">
 <img src="/MG.png" />


<p>
O estado de Minas Gerais está localizado na região Sudeste do Brasil e é conhecido por sua rica história, cultura e patrimônio arquitetônico. Possui uma economia diversificada, com destaque para a mineração, a agropecuária, a indústria e o setor de serviços. Minas Gerais também é famoso por sua culinária tradicional, suas cidades históricas e suas belezas naturais, que atraem turistas de diversas regiões. A capital, Belo Horizonte, é um importante centro econômico, cultural e educacional, contribuindo para o desenvolvimento do estado e do país.
</p>

<Link to="/">Voltar</Link>

</div>
</div>

);


    }