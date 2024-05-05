import { useState } from 'react';
import estilos from './PaginaInicial.module.css';


export default function PaginaInicial() {
    const [ numeroAleatorio, setNumeroAleatorio ] = useState(0);

    function gerarNumero() {
        const novoNumero = Math.floor(Math.random() * (100-1) + 1);

        setNumeroAleatorio(novoNumero);
    }

    return (
        <section className={estilos.container_pinicial}>
            <div className={estilos.container_moldura}>
                <h3>Número aleatório:</h3>

                <h1>{numeroAleatorio}</h1>

                <p>Clique no botão abaixo para gerar um número aleatório:</p>

                <button onClick={gerarNumero}>Gerar número</button>
            </div>
        </section>
    );
}