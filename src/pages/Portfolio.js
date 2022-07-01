import React from "react";
import { Header } from '../components/Header';
import { Main } from "../components/Main";
import { About } from "../components/About";
import {Tecnologies } from "../components/Tecnologies";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";


export function Portfolio(){
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
  .then(() => console.log('Deu Certo'))
  .then(() => console.log('Deu Erro'))
  return (
    <>
      <Header />
      <Main />
      <About />
      < Tecnologies />
      <Projects />
      <Footer /> 
    </>
  )
}