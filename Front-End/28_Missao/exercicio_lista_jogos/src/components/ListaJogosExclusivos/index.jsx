import { useState } from 'react';
import { retornarJogos, buscarJogo, filtrarPorPlataforma } from '@/servico';
import ItemJogos from '../ItemJogos';

import estilos from './ListaJogosExclusivos.module.css';

import Image from 'next/image';
import Lupa from '/public/assets/lupa.png';


export default function ListaJogosExclusivos() {
    const [listaJogos, setListaJogos] = useState(retornarJogos());
    const [textoBusca, setTextoBusca] = useState('');

    function handleLimparFiltro() {
        setListaJogos(retornarJogos());
        setTextoBusca('');
    };

    function handleBuscarJogo(textoDigitado) {
        setTextoBusca(textoDigitado);
        setListaJogos(buscarJogo(textoDigitado));
    };

    function handleFiltarJogoPorPlataforma(plataforma) {
        setListaJogos(filtrarPorPlataforma(plataforma));
        setTextoBusca('');
    }

    return (
        <div className={estilos.container_principal}>
            <h2>Lista de Jogos Exclusivos</h2>

            <div className={estilos.container_botoes}>
                <button onClick={() => handleFiltarJogoPorPlataforma('xbox')}>XBOX</button>
                <button onClick={() => handleFiltarJogoPorPlataforma('playstation')}>PlayStation</button>
                <button onClick={() => handleFiltarJogoPorPlataforma('nintendo')}>Nintendo</button>
                <button onClick={() => handleLimparFiltro()}>Limpar Filtro</button>
            </div>

            <div className={estilos.container_input}>
                <Image src={Lupa} alt='Lupa' />

                <input 
                    type="text"
                    value={textoBusca}
                    onChange={(event => handleBuscarJogo(event.target.value))}
                    placeholder='Pesquise um jogo ou plataforma'
                />
            </div>

            <div className={estilos.container_jogos}>
                {
                    listaJogos.map(
                        jogo => (
                            <ItemJogos
                                key={jogo.id}
                                nome={jogo.nome}
                                plataforma={jogo.plataforma}
                            />
                        )
                    )
                }
            </div>
        </div>
    );
}
