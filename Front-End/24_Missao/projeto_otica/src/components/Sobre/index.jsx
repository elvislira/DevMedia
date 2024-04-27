import estilos from './Sobre.module.css';
import Loja from '../../../public/loja.png';
import Atendimento from '../../../public/atendimento.png';
import Image from 'next/image';


export default function Sobre() {
    return (
        <div className={estilos.sobre} id='sobre'>
            <div className={estilos.container_sobre}>
                <div className={estilos.texto}>
                    <h3>Quem somos nós?</h3>

                    <p>
                    Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
                    </p>
                </div>

                <div className={estilos.informacoes}>
                    <div>
                        <Image src={Loja} alt='Nossas filiais' />
                    </div>

                    <div>
                        <h4>Nossas filiais</h4>

                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>

                    <div>
                        <h4>Atendimento flexível</h4>

                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>

                    <div>
                        <Image src={Atendimento} alt='Atendimento'/>
                    </div>
                </div>
            </div>
        </div>
    );
}