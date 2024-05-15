import estilos from './ItemJogos.module.css';

import Image from "next/image";
import xboxLogo from '/public/assets/xbox.png';
import playstationLogo from '/public/assets/playstation.jpg';
import nintendoLogo from '/public/assets/nintendo.jpg';


export default function ItemJogos({nome, plataforma}) {
    return (
        <div className={estilos.card}>
            <div>
                <Image src={
                    plataforma === 'xbox' ? xboxLogo : plataforma === 'playstation' ? playstationLogo : nintendoLogo
                } alt='Logo' />
            </div>

            <div>
                <p>{ nome }</p>
            </div>
        </div>
    );
}
