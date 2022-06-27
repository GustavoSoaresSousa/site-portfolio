import React from "react";
import { AboutContainer } from '../../styles/AboutStyles';
import Cv from '../../images/CurriculoDoGustavoSoaresDeDesenvolvedor.pdf';

export function About(){

  // function downloadCv(e){
  //   let data = Cv;
  //   let blob = new Blob([data], { type: 'text/plain;charset=utf-8;' });
  //   const link= window.document.createElement('a');
  //   link.href = window.URL.createObjectURL(blob);
  //   link.download = 'CurriculoDoGustavoSoaresDeDesenvolvedor.pdf';
  //   link.click();
  //   window.URL.revokeObjectURL(link.href);

  // }


  return (
    <AboutContainer id="sobre">
      <h1>Sobre</h1>
      <section>

            <p>Cursando um Tecnólogo em Analise e Desenvolvimento de Sistemas na Uninter, sou fascinado pela tecnologia.
                  Estudo e aplico programação desde 2020, comecei pelo HTML, CSS, JS e desde então venho me aprofundando nas bibliotecas e frameworks. Desde então, conheci frameworks como ReactJs, NextJs, Boostrap, Style-components entre outros ferramentas que me ajudam desenvolvedor o Front-End.</p>

            <p>Mirando sempre em ser um desenvolvedor Full Stack, comecei aprender sobre o Back-End, sobre o conceito e como se desenvolve uma API, então aprendi e desenvolvi Projetos
                Node, Typescript e bancos de dados relacionais e não relacionais.
                Agora na faculdade a linguagem que introduziram para aprender lógica de programação foi Python, como sou uma pessoa bastante autodidata, fiz um curso por fora, e acabei aprendendo Django.</p>

            <p>Além de conhecimentos na tecnologia em si, sempre tento me desenvolver minhas outras habilidades que me ajudaram na minha carreira, habilidades como comunicação, design, prototipagem de sites etc. Desenvolvi alguns projetos nessas linguagens para aplicar esses conhecimentos obtidos que você pode ver com mais detalhes no meu <a href="https://github.com/GustavoSoaresSousa">Github</a></p> 
            {/* <button onClick={downloadCv}>Baixar CV</button> */}
      </section>
    </AboutContainer>
  )
}