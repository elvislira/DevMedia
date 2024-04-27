import estilos from './Topo.module.css';
import Logo from '../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';


export default function Topo() {
    return (
        <header className={estilos.topo}>
            <div className={estilos.container_topo}>
                <Image className={estilos.logo_topo} src={Logo} alt='Logo'/>

                <nav className={estilos.menu_topo}>
                    <Link href={'#produtos'}>Produtos</Link>
                    <Link href={'#sobre'}>Sobre</Link>
                    <Link href={'#contato'}>Contato</Link>
                </nav>
            </div>
        </header>
    );
}