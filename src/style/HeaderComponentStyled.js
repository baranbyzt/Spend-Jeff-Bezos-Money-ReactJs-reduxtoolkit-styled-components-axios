import styled from "styled-components";

export const Wrapper = styled.div`
  height: 320px;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  background-color: #808000;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const İmg = styled.img`
  border-radius: 50%;
  width: 170px;
  height: 170px;
`;

export const P = styled.p`
  text-align: center;
  font-size: 24px;
`;
