import React from "react";
import { ProjectsContainer } from "../../styles/ProjectsStyles";
import ImgPaginaDeLogin from '../../images/paginadelogin.png'

export function Projects(){
  return (
    <ProjectsContainer>
        <h1>Projetos</h1>
        <div>
          <section>
                <img src={ImgPaginaDeLogin} />
                <h3>Página de Login</h3>
                <a href="https://github.com/GustavoSoaresSousa/pageSignIn">Git Hub</a>
            </section>

            <section>
                <img src={ImgPaginaDeLogin} />
                <h3>Página de Login</h3>
                <a href="https://github.com/GustavoSoaresSousa/pageSignIn">Git Hub</a>
            </section>

            <section>
                <img src={ImgPaginaDeLogin} />
                <h3>Página de Login</h3>
                <a href="https://github.com/GustavoSoaresSousa/pageSignIn">Git Hub</a>
            </section>

            <section>
                <img src={ImgPaginaDeLogin} />
                <h3>Página de Login</h3>
                <a href="https://github.com/GustavoSoaresSousa/pageSignIn">Git Hub</a>
            </section>

            <section>
                <img src={ImgPaginaDeLogin} />
                <h3>Página de Login</h3>
                <a href="https://github.com/GustavoSoaresSousa/pageSignIn">Git Hub</a>
            </section>

            <section>
                <img src={ImgPaginaDeLogin} />
                <h3>Página de Login</h3>
                <a href="https://github.com/GustavoSoaresSousa/pageSignIn">Git Hub</a>
            </section>
          </div>
          
    </ProjectsContainer>
  )
}