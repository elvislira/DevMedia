import estilos from './Rodape.module.css';
import Logo from '/public/logo.png';
import Image from 'next/image';


export default function Rodape() {
    return (
        <footer className={estilos.rodape}>
            <div className={estilos.rodape_container}>
                <Image className={estilos.rodape_img} src={Logo} alt='Logomarca' />
                
                <div>
                    <h3>Endereço</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h3>Contato</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div>
                    <h3>Horários</h3>
                    <p><span>Aberto todos os dias</span></p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>

            <p className={estilos.rodape_desenvolvedor}>Gelateria. Orgulhosamente desenvolvido por Elvis Lira</p>
        </footer>
    );
}