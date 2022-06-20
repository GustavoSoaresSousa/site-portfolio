import React from "react";
import {TecnologiesContainer} from '../../styles/TecnologiesStyles'

export function Tecnologies(){
  return(
    <TecnologiesContainer>
      <h1>Serviços</h1>
      <div>
        <section>
            <h4>Front-End</h4>
            <div>Construção e desenvolvimento de páginas web com HTML, CSS, Javascript, Typescript com ReactJs.</div>
        </section>
        <section>
            <h4>Back-End</h4>
            <div>Desenvolvimento de APIs e aplicações com Javascript, Typescript, Python com Nodejs e Django.</div>
        </section>
        <section>
            <h4>Banco de dados</h4>
            <div>Sql, Mysql, MariaDb, Mongo db, Firebase</div>
        </section>
      </div>
    </TecnologiesContainer>
  )
}