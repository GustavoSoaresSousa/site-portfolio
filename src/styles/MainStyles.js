import styled from "styled-components";

export const MainContainer = styled.main`
  height: 100vh;
  background-color: #1D2B61;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-evenly;



  h1{
    text-align: center;
  }

    section{
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icons{
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .resume{
        display: flex;
        flex-direction: row;

      }
      }
  }
  aside{


      img{
        height: 400px;
        width: 300px;
        border-radius: 3px;
        border: 3px solid;
        border-image: linear-gradient(0deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82) 1;
        animation: rotate linear infinite;
      }


      @keyframes rotate {
          to{
            border-image: linear-gradient(360deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
          }
        }

}


`
