import React from "react";
import { Header } from '../components/Header';
import { Main } from "../components/Main";
import { About } from "../components/About";
import {Tecnologies } from "../components/Tecnologies";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";


export function Portfolio(){
  return (
    <>
      <Header />
      <Main />
      <About />
     < Tecnologies />
      <Projects />
     {/*   <Footer /> */}
    </>
  )
}