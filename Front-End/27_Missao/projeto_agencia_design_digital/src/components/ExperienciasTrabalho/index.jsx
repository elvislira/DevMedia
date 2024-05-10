import Card from '../Card';
import estilos from './ExperienciasTrabalho.module.css';
import dadosCards from '../Dados';


export default function ExperienciasTrabalho() {
    return (
        <div className={estilos.container_et}>
            <div>
                <h2>Experiências De Trabalho</h2>

                <p>
                    Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
                </p>
            </div>

            <div className={estilos.container_cards}>
                {
                    dadosCards.map(card => (
                        <Card 
                            data = {card.data}
                            titulo = {card.titulo}
                            empresa = {card.empresa}
                            paragrafo = {card.paragrafo}
                        />
                    ))
                }
            </div>
        </div>
    );
}