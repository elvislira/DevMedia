import estilos from './sabores.module.css';
import SaborOreo from '/public/sabor-oreo.jpg';
import SaborPistache from '/public/sabor-pistache.png';
import SaborCookiesAvela from '/public/sabor-cookies-avela.png';
import SaborKiwi from '/public/sabor-kiwi.png';
import SaborMorango from '/public/sabor-morango.png';
import SaborLimaoSiciliano from '/public/sabor-limao-siciliano.png';
import Image from 'next/image';


export default function Sabores() {
    return (
        <div>
            <section className={estilos.sabores_container_capa}>
                <h1>Nossos sabores</h1>
            </section>

            <section className={estilos.sabores_container}>
                <h2 className={estilos.sabores_subtitulo}>Sabores de Sorvete</h2>
                
                <div className={estilos.sabores_container_cards}>
                    <div className={estilos.sabores_card}>
                        <Image src={SaborOreo} alt='Sorvet de Oreo' />

                        <h3>Sorvete de Oreo</h3>

                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>

                    <div className={estilos.sabores_card}>
                        <Image src={SaborPistache} alt='Sabor Pistache' />

                        <h3>Sorvete Pistache</h3>

                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>

                    <div className={estilos.sabores_card}>
                        <Image src={SaborCookiesAvela} alt='Sorvete Cookies & Avelã' />

                        <h3>Sorvete Cookies & Avelã</h3>

                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>

                    <div className={estilos.sabores_card}>
                        <Image src={SaborKiwi} alt='Sorvete de Kiwi' />

                        <h3>Sorvete de Kiwi</h3>

                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>

                    <div className={estilos.sabores_card}>
                        <Image src={SaborMorango} alt='Sorvete de Morango' />

                        <h3>Sorvete de Morango</h3>

                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>

                    <div className={estilos.sabores_card}>
                        <Image src={SaborLimaoSiciliano} alt='Sorvete de Limão Siciliano' />

                        <h3>Sorvete de Limão Siciliano</h3>

                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}