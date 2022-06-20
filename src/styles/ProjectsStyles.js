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
  justify-content: center;
  grid-template-columns: 1fr  1fr 1fr;
  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    

    background-color: #244AE0;
    border-radius: 12px;

    height: 300px;
    width: 350px;

    margin-top: 64px;
    padding: 8px 4px 8px 4px;

    img {
      height: 200px;
      width: 320px;
      border-radius: 12px;
    }

    a{
      text-align: center;
      border-radius: 8px;
      border: 1px solid #1D2B61;
      color: #fff;
      width: 90%;

      text-decoration: none;
      cursor: pointer;
    }
  }
}
  
`