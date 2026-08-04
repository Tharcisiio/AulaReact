import { Link } from "react-router-dom";
export default function RioJaneiro()
    {
return(
<div>
<h1>Estado do Rio de Janeiro</h1>

<div className="conteudo">
 <img src="/RJ.png" />

 <p>
 O estado do Rio de Janeiro está localizado na região Sudeste do Brasil e é conhecido por suas belas paisagens naturais, que combinam praias, montanhas e florestas. Sua economia é impulsionada por atividades como o turismo, a indústria, o comércio, os serviços e a produção de petróleo e gás. O estado possui grande importância histórica e cultural, sendo famoso por manifestações como o Carnaval e o samba, além de abrigar diversos patrimônios culturais e naturais. A capital, a cidade do Rio de Janeiro, é reconhecida internacionalmente por pontos turísticos como o Cristo Redentor, o Pão de Açúcar e as praias de Copacabana e Ipanema, atraindo visitantes de todo o mundo.
 </p>

 <Link to="/">Voltar</Link>
</div>
</div>

);


    }