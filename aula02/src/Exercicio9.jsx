export default function Exercicio9({salario})
{


let gratificação, salariofinal;

gratificação =  2500 * 8/100
salariofinal = salario + gratificação

return (

<div>
    O Salário Base é: {salario}R$  
    A Gratificação é {gratificação}R$  
    O Salário Final é {salariofinal}R$ 
</div>

)
}