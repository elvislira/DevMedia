import estilos from './CardProduto.module.css';
import Image from 'next/image';


export default function CardProduto({titulo, imagem, preco}) {
    return (
        <div className={estilos.container_card}>
            <h4>{titulo}</h4>

            <Image src={imagem} alt='Óculos' />

            <p>{preco}</p>
        </div>
    );
}