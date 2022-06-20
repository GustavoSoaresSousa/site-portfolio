import React from "react";
import { HeaderStyles } from '../../styles/HeaderStyles'


export function Header(){
  return(
    <HeaderStyles>
      <h3>{`</Gustavo>`}</h3>
        <ul>
          <li>About</li>
          <li>Tecnologies</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
    </HeaderStyles>
  )
}