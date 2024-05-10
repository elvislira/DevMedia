import estilos from './Rodape.module.css';
import Image from 'next/image';


export default function Rodape(props) {
    return (
        <div className={props.tema}>
            <Image src={props.logo} />
        </div>
    );
}