import estilos from './Card.module.css';


export default function Card(props) {
    return (
        <div className={estilos.container_card}>
            <p className={props.tema_font2}>{props.data}</p>
            <h3 className={props.tema_font1}>{props.titulo}</h3>
            <p className={props.tema_font2}>{props.empresa}</p>
            <p className={props.tema_font2}>{props.paragrafo}</p>
        </div>
    );
}