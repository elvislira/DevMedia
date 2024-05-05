import estilos from './Pagina.module.css';
import { useState } from 'react';


export default function Pagina() {
    const [estiloAtual, setEstilo] = useState(true);

    const alterarCor = () => {
        setEstilo(!estiloAtual);
        console.log(estiloAtual);
    }

    return (
        <main className={estilos.pagina_container}>
            <h1>Alterando estilo do elemento</h1>

            <div className={estiloAtual ? estilos.bg_vermelho : estilos.bg_verde}></div>

            <p>Clique no botão para alterar o estilo do elemento acima</p>

            <button onClick={alterarCor}>Alternar cor</button>
        </main>
    );
}