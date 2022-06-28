import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 45vh;
  max-height: 100%;
  background:  #1D2B61;

  color: #fff;

  padding-bottom: 32px;

  div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
        form{
          display:flex;
          flex-direction: column;

          width: 70%

        }
        input[type='submit']{
          margin: 25px;
          border-radius: 8px;
          padding: 6px 6px 6px 6px;
          cursor: pointer;
          color: #fff;
          background: grey;
          transition: all 0.5s
        }

        input[type='submit']:hover{
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          color: grey;
          background: #fff;
        }

        input:focus, button:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
      }
  }


`