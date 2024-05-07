import estilos from './Card.module.css';


export default function Card(props) {
    return (
        <div className={estilos.container_card}>
            <h2>{props.signo}</h2>

            <img className={estilos.img_card} src={props.imagem} />

            <p>{props.dataInicio} - {props.dataFim}</p>
        </div>
    );
}