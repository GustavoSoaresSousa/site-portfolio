import React from "react";
import { HeaderStyles } from '../../styles/HeaderStyles';
import { Link, animateScroll as scroll } from "react-scroll";


export function Header(){


  return(
    <HeaderStyles>
      <h3>{`</Gustavo>`}</h3>
        <ul>
          <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
          <li><Link to="sobre" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Sobre</Link></li>
          <li><Link to="tecnologias" activeClass="active" spy={true}smooth={true} offset={-70} duration={500}>Tecnologias</Link></li>
          <li><Link to="projetos" activeClass="active" spy={true}smooth={true} offset={-70} duration={500}>Projetos</Link></li>
          <li><Link to="contatos" activeClass="active" spy={true}smooth={true} offset={-70} duration={500}>Contatos</Link></li>
        </ul>
    </HeaderStyles>
  )
}