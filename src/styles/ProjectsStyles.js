import styled from "styled-components";

export const ProjectsContainer = styled.div`
  min-height: 100vh;
  max-height: 100%;
  width: 100%;
  background-color: #1D2B61;
  color: #fff;

  h1{
      text-align: center;
    }

  div{
    display: grid;
    grid-template-columns: 1fr  1fr 1fr;
    justify-items: center;
      section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        

        background-color: #244AE0;
        border-radius: 12px;

        height: 350px;
        width: 400px;

        margin-top: 60px;
        padding: 6px 2px 6px 2px;

        transition: all 0.5s;

        img {
          height: 250px;
          width: 95%;
          border-radius: 12px;
          transition: all 0.5s;
        }

        a{
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #1D2B61;
          color: #fff;
          width: 95%;
          height: 32px;

          text-decoration: none;
          cursor: pointer;
          transition: .2s
        }

        a:hover{
          background: #738EFA;
          color: #1D2B61;
        }
      }

      section:hover{
        width: 430px;
        height: 360px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
      }
}

@media (min-width: 320px){
  div{
    grid-template-columns: 1fr;

    section {
        height: 230px;
        width: 250px;

        img{
          height: 220px;
          width: 90%;
        }
    }
  }
}

@media (min-width: 375px){
  div{
    grid-template-columns: 1fr;

    section {
        height: 290px;
        width: 310px;

        img{
          height: 200px;
          width: 90%;
        }
    }
  }
}

@media (min-width: 425px){
  div{
    grid-template-columns: 1fr;

    section {
        height: 310px;
        width: 380px;

        img{
          height: 230px;
          width: 90%;
        }
    }
  }
}

@media (min-width: 768px){
  div{
    grid-template-columns: 1fr;

    section {
          height: 350px;
          width: 440px;

        img{
          height: 230px;
          width: 90%;
        }
    }
  }
}

@media (min-width: 1024px){
  div{
    grid-template-columns: 1fr 1fr 1fr;

    section {
          height: 330px;
          width: 420px;

        img{
          height: 230px;
          width: 90%;
        }
    }
  }
}
`