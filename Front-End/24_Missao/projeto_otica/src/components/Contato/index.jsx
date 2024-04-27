import estilos from './Contato.module.css';
import Local from '../../../public/local.png';
import Telefone from '../../../public/telefone.png';
import Email from '../../../public/email.png';
import Fb from '../../../public/fb.png';
import Ig from '../../../public/ig.png';
import Tt from '../../../public/tt.png';
import Image from 'next/image';


export default function Contato() {
    return (
        <div className={estilos.contato} id='contato'>
            <div className={estilos.contato_container}>
                <div className={estilos.texto}>
                    <h3>Fale conosco</h3>

                    <p>
                        Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
                    </p>
                </div>

                <div className={estilos.redes_contato}>
                    <div className={estilos.old_contatos}>
                        <h3>Nossos Contatos</h3>
                        <div>
                            <Image src={Local} /><span>Nova Iguaçu, RJ</span>
                        </div>
                        <div>
                            <Image src={Telefone} /><span>(21) 9999-9999</span>
                        </div>
                        <div>
                            <Image src={Email} /><span>contato@oticavida.com</span>
                        </div>
                    </div>

                    <div className={estilos.redes_sociais}>
                        <h3>Nossas Redes Sociais</h3>
                        <div>
                            <Image src={Fb} /><span>/OticaVida</span>
                        </div>
                        <div>
                            <Image src={Ig} /><span>@oticavidarj</span>
                        </div>
                        <div>
                            <Image src={Tt} /><span>@oticavidarj</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}