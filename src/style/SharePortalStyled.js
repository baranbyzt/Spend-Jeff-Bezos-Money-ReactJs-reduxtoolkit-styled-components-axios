import styled from "styled-components";

export const WrapperDiv = styled.div`
  background-color: #00ffff;
  width: 80%;
  height: 80%;
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 80px;
  border-radius: 20px;
  left: 10%;
  right: auto;
`;
export const Wrapperİnner = styled.div`
  position: relative;
`;
export const Content = styled.div`
  width: 900px;
  height: 600px;
  scrollbar-darkshadow-color: blue;
`;
export const ShareButton = styled.button`
  background-color: #3399ff;
  width: 120px;
  height: 50px;
  color: black;
  font-size: 24px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;

  :hover {
    background-color: #3349ff;
    color: white;
  }
`;
