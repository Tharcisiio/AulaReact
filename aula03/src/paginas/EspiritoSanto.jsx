import { Link } from "react-router-dom";
export default function EspiritoSanto()
    {
return(
<div>
<h1>Estado do Espirito Santo</h1>


<div className="conteudo">
 <img src="/CE.png" />

 <p>
 Espírito Santo combina perfeitamente a beleza de um litoral repleto de praias famosas, como as de Guarapari, com o charme de suas regiões serranas de forte colonização italiana e alemã, como Domingos Martins. Sua capital, Vitória, é uma das três ilhas-capitais do país e destaca-se pelos altos índices de qualidade de vida, enquanto a vizinha Vila Velha abriga o histórico Convento da Penha e a famosa culinária da moqueca capixaba.
 </p>

 <Link to="/">Voltar</Link>

</div>
</div>



);


    }