import estilos from "./page.module.css";
import Sabores from '/public/banner-sabores.jpg';
import Eventos from '/public/eventos-image.jpg';
import Sobre from '/public/sobre-image.jpg';
import Image from 'next/image';


export default function Home() {
  return (
    <main className={estilos.home}>
      <section className={estilos.home_secao_capa}>
        <h1>Sorvete Artesanal</h1>
      </section>

      <section className={estilos.home_secao_sabores}>
        <div>
          <Image className={estilos.home_secao_img} src={Sabores} alt="Sabores" />
        </div>
        <div className={estilos.home_secao_textos}>
          <h2>Nossos sabores</h2>
          <span>Novos e deliciosos</span>
          <p>
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
          </p>
        </div>
      </section>

      <section className={estilos.home_secao_eventos}>
        <div className={estilos.home_secao_textos}>
          <h2>Nossos eventos</h2>
          <span>Delicias com sorvete!</span>
          <p>
            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
          </p>
        </div>
        <div>
          <Image className={estilos.home_secao_img} src={Eventos} alt="Eventos" />
        </div>
      </section>

      <section className={estilos.home_secao_sobre}>
        <div>
          <Image className={estilos.home_secao_img} src={Sobre} alt="Sobre" />
        </div>
        <div className={estilos.home_secao_textos}>
          <h2>Nossos eventos</h2>
          <span>Alegria em cada casquinha!</span>
          <p>
            Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
          </p>
        </div>
      </section>
    </main>
  );
}
