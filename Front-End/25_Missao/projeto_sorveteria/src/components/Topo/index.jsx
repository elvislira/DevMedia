import estilos from './Topo.module.css';
import Logo from '/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';


export default function Topo() {
    return ( 
        <header className={estilos.topo}>
            <div className={estilos.topo_container}>
                <Link href={'/'}>
                    <Image className={estilos.topo_img} src={Logo} alt='Logomarca' />
                </Link>

                <nav className={estilos.topo_menu}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/sabores'}>Sabores</Link>
                    <Link href={'/sobre'}>Sobre</Link>
                </nav>
            </div>
        </header>
    );
}