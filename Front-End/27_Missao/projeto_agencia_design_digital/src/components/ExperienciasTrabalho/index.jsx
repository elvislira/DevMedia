import Card from '../Card';
import estilos from './ExperienciasTrabalho.module.css';
import dadosCards from '../Dados';


export default function ExperienciasTrabalho(props) {
    return (
        <div className={props.tema}>
            <div className={estilos.container_et}>
                <div>
                    <h2 className={props.tema_fonte1}>Experiências De Trabalho</h2>

                    <p className={props.tema_fonte2}>
                        Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
                    </p>
                </div>

                <div className={estilos.container_cards}>
                    {
                        dadosCards.map(card => (
                            <Card 
                                tema_font1 = {props.tema_fonte1}
                                tema_font2 = {props.tema_fonte2}
                                data = {card.data}
                                titulo = {card.titulo}
                                empresa = {card.empresa}
                                paragrafo = {card.paragrafo}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}