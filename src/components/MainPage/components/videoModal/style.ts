import styled from "styled-components";

export const VideoModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 200;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 40%;
    z-index: 100;
  }

  iframe {
    max-width: 900px;
    min-width: 400px;
    max-height: 800px;
    min-width: 300px;
    width: 80%;
    height: 600px;
    border: none;
    z-index: 300;
  }

  .closeIcon {
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 300;
    cursor: pointer;
    font-size: 30px;
  }
`;
