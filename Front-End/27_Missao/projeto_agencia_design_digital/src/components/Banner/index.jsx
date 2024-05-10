import estilos from './Banner.module.css';
import Image from 'next/image';
import FotoBanner from '/public/assets/banner.png';


export default function Banner(props) {
    return (
        <div className={props.tema}>
            <div className={estilos.container_banner}>
                <Image src={FotoBanner} />

                <div className={estilos.container_texto}>
                    <p>BRANDING / UI / UX / TECNOLOGIA</p>
                    <h2>Agência de Branding</h2>
                    <span>e design digital</span>
                </div>
            </div>
        </div>
    );
}