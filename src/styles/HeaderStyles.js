import styled from "styled-components";


export const HeaderStyles = styled.header`
  background-color: #1D2B61;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  padding: 20px 40px 20px 40px;

  font-size: 1.2em;


  border-bottom: 1px solid #738EFA;

  ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 35%;
      height: 100%;
    li {
      list-style-type: none;
      transition: 0.5s;
    }
    li:hover{
      cursor: pointer;
      color: #738EFA;
    }
  }
`