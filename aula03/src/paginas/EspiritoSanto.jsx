import { Link } from "react-router-dom";
export default function EspiritoSanto()
    {
return(
<div>
<h1>Estado do Espírito Santo</h1>


<div className="conteudo">
 <img src="/ES.png" />

 <p>
 O estado do Espírito Santo está localizado na região Sudeste do Brasil e é conhecido por seu extenso litoral, suas belas praias e sua diversidade de paisagens naturais. Sua economia é baseada em atividades como a indústria, a agricultura, a produção de rochas ornamentais, a exportação por meio de seus portos e o setor de serviços. O estado também se destaca por sua rica cultura, influenciada por diferentes povos que contribuíram para a formação de suas tradições. A capital, Vitória, é uma importante cidade portuária e desempenha papel relevante no desenvolvimento econômico e social do Espírito Santo.
 </p>

 <Link to="/">Voltar</Link>

</div>
</div>



);


    }