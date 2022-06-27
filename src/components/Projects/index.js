import React from "react";
import { ProjectsContainer } from "../../styles/ProjectsStyles";
import ImgPaginaDeLogin from '../../images/paginadelogin.png';
import ImgGithubProfile from '../../images/githubProfile2.png';
import ImgToDo from '../../images/TodoList2.png';
import ImgListAnime from '../../images/listAnime.png';
import ImgAgenda from '../../images/agenda.png';

export function Projects(){
  return (
    <ProjectsContainer id="projetos">
        <h1>Projetos</h1>
        <div>
          <section>
                <img src={ImgPaginaDeLogin} />
                <h3>Página de Login</h3>
                <a href="https://github.com/GustavoSoaresSousa/pageSignIn">Git Hub</a>
            </section>

            <section>
                <img src={ImgListAnime} />
                <h3>Lista de Anime</h3>
                <a href="https://github.com/GustavoSoaresSousa/list-animes">Git Hub</a>
            </section>

            <section>
                <img src={ImgAgenda} />
                <h3>Agenda com Python e Django</h3>
                <a href="https://github.com/GustavoSoaresSousa/projeto-agenda-django">Git Hub</a>
            </section>
          </div>
          
    </ProjectsContainer>
  )
}