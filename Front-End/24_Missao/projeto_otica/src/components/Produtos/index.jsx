import estilos from './Produtos.module.css';
import oculo1 from '../../../public/oculos01.png';
import oculo2 from '../../../public/oculos02.png';
import oculo3 from '../../../public/oculos03.png';
import oculo4 from '../../../public/oculos04.png';
import Image from 'next/image';


export default function Produtos() {
    return (
        <div className={estilos.produtos} id='produtos'>
            <div className={estilos.container_produtos}>
                <div className={estilos.textos}>
                    <h3 className={estilos.subtitulo}>Nossos produtos</h3>

                    <p>
                        Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
                    </p>
                        Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
                    <p>

                    </p>
                </div>

                <div className={estilos.container_cards}>
                    <div className={estilos.card}>
                        <h4>Óculos de grau</h4>

                        <Image src={oculo1} alt='Óculos' />

                        <p>R$ 500,00</p>
                    </div>

                    <div className={estilos.card}>
                        <h4>Óculos transition</h4>

                        <Image src={oculo2} alt='Óculos' />

                        <p>R$ 750,00</p>
                    </div>

                    <div className={estilos.card}>
                        <h4>Óculos de sol</h4>

                        <Image src={oculo3} alt='Óculos' />

                        <p>R$ 700,00</p>
                    </div>

                    <div className={estilos.card}>
                        <h4>Óculos infantil</h4>

                        <Image src={oculo4} alt='Óculos' />

                        <p>R$ 500,00</p>
                    </div>
                </div>

                <div className={estilos.textos}>
                    <h3>Todos os nossos produtos incluem:</h3>

                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}