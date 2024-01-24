import styled from "styled-components";

export const InfoBitcoinContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  & div {
    width: 800px;
    height: auto;
  }

  & div h3 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  & th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
`;
