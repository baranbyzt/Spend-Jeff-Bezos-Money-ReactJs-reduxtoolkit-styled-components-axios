import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #739900;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  position: sticky;
  top: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const P = styled.p`
  font-size: 30px;
  align-items: center;
`;
