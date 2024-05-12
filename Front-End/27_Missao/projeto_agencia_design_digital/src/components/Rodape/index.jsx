import estilos from './Rodape.module.css';
import Image from 'next/image';
import Fb from '/public/assets/facebook.png';
import Tt from '/public/assets/twitter.png';
import Ld from '/public/assets/linkedin.png';
import Db from '/public/assets/dribble.png';
import Bh from '/public/assets/behance.png';
import Gp from '/public/assets/google-plus.png';


export default function Rodape(props) {
    return (
        <footer className={props.tema}>
            <div className={estilos.container_rodape}>
                <Image src={props.logo} />

                <p>
                    Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.
                </p>

                <div className={estilos.container_img}>
                    <Image className={estilos.redes_img} src={Fb} />
                    <Image className={estilos.redes_img} src={Tt} />
                    <Image className={estilos.redes_img} rc={Ld} />
                    <Image className={estilos.redes_img} src={Db} />
                    <Image className={estilos.redes_img} src={Bh} />
                    <Image className={estilos.redes_img} src={Gp} />
                </div>

                <p>Copyright 2022 © <span>Elvis Lira</span></p>
            </div>
        </footer>
    );
}