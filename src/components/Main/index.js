import React from "react";
import myImage from '../../images/eu1.jpg';
import iconGitHub from '../../images/icon-github.png';
import iconLinkedin from '../../images/icon-linkedin.png';
import iconTikTok from '../../images/icon-tiktok.png';
import { MainContainer} from '../../styles/MainStyles';

export function Main(){
  return(
    <MainContainer id="home">
            <section>
              <div>
                  <h2>Olá, eu sou Gustavo Soares</h2>
                  <div className="resume">
                    Desenvolvedor de Software
                    </div>
                  <section className="icons">
                  <a href="https://github.com/GustavoSoaresSousa" target="_blank"><img src={iconGitHub} /></a>
                  <a href="https://www.linkedin.com/in/gustavosoaressousa/" target="_blank"><img src={iconLinkedin} /></a>
                  <a href="https://www.tiktok.com/@gugudev" target="_blank"><img src={iconTikTok} /></a>
              </section>
              </div>
        </section>
        <aside>
          <img src={myImage} />
        </aside>

    </MainContainer>
  )
}