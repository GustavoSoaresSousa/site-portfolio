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
                  <h2>Hello, I'm Gustavo Soares</h2>
                  <div className="resume">Desenvolvedor de Software</div>
                  <section className="icons">
                  <img src={iconGitHub} />
                  <img src={iconLinkedin} />
                  <img src={iconTikTok} />
              </section>
              </div>
        </section>
        <aside>
          <img src={myImage} />
        </aside>

    </MainContainer>
  )
}