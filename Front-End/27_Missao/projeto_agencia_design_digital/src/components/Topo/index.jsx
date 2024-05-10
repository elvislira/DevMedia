import { useState } from 'react';
import Image from 'next/image';

import estilos from './Topo.module.css';


export default function Topo(props) {
    return (
        <header className={props.tema}>
            <div className={estilos.container_topo}>
                <Image className={estilos.logo_img} src={props.logo} />

                <Image 
                    onClick={props.clique}
                    className={props.tema} 
                    src={props.imagem} 
                />
            </div>
        </header>
    );
}