import { Link } from "react-router-dom";
export default function Bahia()
    {
return(
<div>
<h1>Estado da Bahia</h1>


<div className="conteudo">
 <img src="/PI.png" />

 <p>
 Bahia é o maior e mais populoso estado da região, funcionando como um verdadeiro coração cultural do país onde a herança africana moldou a culinária, a música e as festividades. Salvador, a primeira capital do Brasil, encanta pelo centro histórico do Pelourinho, enquanto o interior atrai ecoturistas para a Chapada Diamantina e o litoral preserva a histórica Costa do Descobrimento.
 </p>

 <Link to="/">Voltar</Link>

</div>
</div>



);


    }