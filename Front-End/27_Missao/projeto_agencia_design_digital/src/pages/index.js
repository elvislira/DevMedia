import Head from "next/head";
import { useState } from "react";
import estilos from "@/styles/Home.module.css";

import Logo from '/public/assets/logo.png';
import Sol from '/public/assets/sun.png';
import Lua from '/public/assets/moon.png';

import Topo from "@/components/Topo";
import Banner from "@/components/Banner";
import ExperienciasTrabalho from "@/components/ExperienciasTrabalho";
import Rodape from "@/components/Rodape";


export default function Home() {
  //claro=true, escuro=false
  const [ isTema, setTema ] = useState(true);

  function mudarTema() {
    setTema(!isTema);
  }

  return (
    <>
      <Head>
        <title>Agência de Design Digital</title>
        <meta name="description" content="Agência de Branding de Design Digital" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={estilos.container_main}>
        <Topo 
          logo={Logo}
          imagem={isTema ? Lua : Sol}
          clique={mudarTema}
          tema={isTema ? estilos.tema_claro : estilos.tema_escuro}
        />

        <Banner 
          tema={isTema ? estilos.tema_claro : estilos.tema_escuro}
        />

        <ExperienciasTrabalho />

        <Rodape 
          logo={Logo}
          tema={isTema ? estilos.tema_claro : estilos.tema_escuro}
        />
      </main>
    </>
  );
}
