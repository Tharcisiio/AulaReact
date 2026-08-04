import { Link } from "react-router-dom";
export default function SaoPaulo() {
    return (
        <div>
            <h1>Estado de São Paulo</h1>

            <div className="conteudo">
                <img src="/SP.png" />

                <h3>SOBRE O ESTADO DE SÃO PAULO</h3>
                <p>
                    O estado de São Paulo está localizado na região Sudeste do Brasil e é o mais populoso e um dos mais importantes do país. Destaca-se por sua economia diversificada, com forte atuação nos setores da indústria, do comércio, dos serviços e da agricultura. Além de ser um grande centro financeiro e tecnológico, São Paulo possui rica diversidade cultural, reunindo pessoas de diferentes origens e tradições. O estado também conta com importantes universidades, centros de pesquisa, atrações turísticas, áreas de preservação ambiental e um amplo patrimônio histórico. Sua capital, a cidade de São Paulo, é considerada a maior metrópole da América do Sul e exerce grande influência econômica, política e cultural no Brasil.
                </p>


                <p>
                
                <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}