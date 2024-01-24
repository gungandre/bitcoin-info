import styled from "styled-components";

export const ButtonContainer = styled.button`
  border-left: ${(props) =>
    props.border
      ? "none"
      : props.path
      ? "1.5px solid #BC5D28"
      : "1.5px solid #888888"};
  border-top: ${(props) =>
    props.path ? "1.5px solid #BC5D28" : "1.5px solid #888888"};
  border-bottom: ${(props) =>
    props.path ? "1.5px solid #BC5D28" : "1.5px solid #888888"};
  border-right: ${(props) =>
    props.border
      ? "none"
      : props.path
      ? "1.5px solid #BC5D28"
      : "1.5px solid #888888"};

  width: 200px;
  height: 45px;
  background-color: ${(props) => (props.path ? "#FCEBBA" : "white")};
  color: ${(props) => (props.path ? "#BC5D28" : "#888888")};
  cursor: pointer;
  display: inline-block;

  @media screen and (max-width: 720px) {
    width: 150px;
    height: 45px;
    & h3 {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 100px;
    height: 45px;
    & h3 {
      font-size: 12px;
    }
  }
`;
