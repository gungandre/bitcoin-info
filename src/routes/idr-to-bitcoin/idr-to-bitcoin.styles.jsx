import styled from "styled-components";

export const IdrToBitcoinContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  & h3 {
    text-align: center;
  }

  & p {
    text-align: center;
    padding-top: 15px;
  }
`;

export const InputContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 0 10px;

  & input {
    width: 100%;
    height: 45px;
    appearance: unset;
    padding: 0px 10px;
    margin-top: 20px;
    font-size: 14px;
    border: 1px solid black;
    outline: none;
    transition: outline 0.3s ease-in-out;
    &:focus {
      outline: 1.5px solid black;
    }
  }
`;
