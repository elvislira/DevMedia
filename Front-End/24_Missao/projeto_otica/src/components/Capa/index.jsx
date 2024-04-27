import estilos from './Capa.module.css';


export default function Capa() {
    return (
        <div className={estilos.container_capa}>
            <div className={estilos.container_texto}>
                <div className={estilos.box_texto}>
                    <p>Preços baixos em</p>

                    <h1>Óculos de grau e de sol</h1>

                    <p>Você só encontra aqui</p>
                </div>
            </div>
        </div>
    );
}