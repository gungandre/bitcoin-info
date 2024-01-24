import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: #000;
  padding: 0px 40px;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  & h1 {
    color: white;
  }
`;
