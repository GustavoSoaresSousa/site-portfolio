import styled from "styled-components";

export const ProjectsContainer = styled.div`
  min-height: 100vh;
  max-height: 100%;
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

        margin-top: 64px;
        padding: 8px 4px 8px 4px;

        img {
          height: 250px;
          width: 95%;
          border-radius: 12px;
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
}
  
`