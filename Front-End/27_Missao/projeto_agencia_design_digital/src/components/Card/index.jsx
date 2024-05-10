import estilos from './Card.module.css';


export default function Card(props) {
    return (
        <div className={estilos.container_card}>
            <p>{props.data}</p>
            <h3>{props.titulo}</h3>
            <p>{props.empresa}</p>
            <p>{props.paragrafo}</p>
        </div>
    );
}