import styled from "styled-components"

export const TecnologiesContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1D2B61;
  color: #fff;

  h1{
    margin-bottom: 32px
  }

  div{
    display: flex;
    justify-content: center;
    
    section{
    display: flex;
    flex-direction: column;
    justify-content: center;



    padding: 10px 10px 10px 10px;

    margin-right: 16px;
    border-radius: 12px;
    border: 2px solid #244AE0;

    height: 200px;
    width: 300px;

    transition: all 0.5s;
  }

    section:hover{
        width: 325px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }

  }

  @media (max-width: 320px){
    padding-top: 120px;
    max-height: 100%;
    div {
      flex-direction: column;

      section{
        margin-top: 32px;

        height: 175px;
        width: 250px;
      }
    }
  }

  @media (max-width: 375px){
    div{
      flex-direction: column;

      section {
        margin-top: 32px;
      }
    }
  }

  @media (max-width: 425px){
    div{
      flex-direction: column;

      section {
        margin-top: 32px;

        height: 210px;
        width: 290px;
      }
    }
  }
  @media (max-width: 768px){
    div{
      flex-direction: column;
      section {
        margin-top: 32px;

        height: 230px;
        width: 240px;
      }
    }
  }

  @media (max-width: 1024px){
    div{
      section{
        height: 230px;
        width: 240px;
      }
    }
  }
`