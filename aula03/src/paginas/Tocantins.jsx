import { Link } from "react-router-dom";
export default function Tocantins()
    {
return(
<div>
<h1>Estado de Tocantins</h1>


<div className="conteudo">
 <img src="/TO.png" />

 <p>
 Tocantins faz a transição entre a floresta amazônica e a imensidão do cerrado. Palmas é uma cidade nova, espaçosa, com praias artificiais criadas no lago do Rio Tocantins. O estado virou febre no ecoturismo nacional devido às águas cristalinas e fervedouros do Jalapão.
 </p>

 <Link to="/">Voltar</Link>

</div>
</div>



);


    }