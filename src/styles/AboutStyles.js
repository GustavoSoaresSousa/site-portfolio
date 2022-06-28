import styled from "styled-components";

export const AboutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #1D2B61;
  color: #fff;
  h1{
    text-align: center;
  }
  
  section{
    margin-top: 64px;
    font-size: 1.3rem;

    p{
      margin-top: 12px 8px 12px 12px;
      padding: 12px;
    }

  }
  @media (min-width: 320px){
    max-height: 100%;
  }
  
`