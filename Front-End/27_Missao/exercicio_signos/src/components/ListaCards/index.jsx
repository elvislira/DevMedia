import estilos from './ListaCards.module.css';
import Card from '../Card';
import signos from '../Dados';


export default function ListaCards() {
    return (
        <div className={estilos.container_listacards}>
            {signos.map(signo => (
                <Card 
                    signo={signo.signo}
                    dataInicio={signo.dataInicio}
                    dataFim={signo.dataFim}
                    imagem={signo.imagem}
                />
            ))}

        </div>
    );
}