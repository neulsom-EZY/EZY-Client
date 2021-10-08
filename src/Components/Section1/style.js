import styled from "styled-components";

export const MainSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleSection = styled.div`
  font-size: 65px;
  font-weight: bold;
  position: absolute;
  z-index: 1;
  margin-left: 15vh;
  @media screen and (max-width: 1000px) {
    margin-left: 9vh;
  }
  @media screen and (max-width: 800px) {
    font-size: 55px;
    margin-left: 8vh;
  }
  @media screen and (max-width: 500px) {
    font-size: 33px;
    line-height: 2.8rem;
    margin-left: 5vh;
  }
`;
export const SubSection = styled.div`
  width: 100%;
  height: 50vh;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  font-size: 35px;
  font-weight: 400;
  line-height: 8vh;
  @media screen and (max-width: 1000px) {
    font-size: 30px;
  }
  @media screen and (max-width: 800px) {
    font-size: 25px;
    line-height: 6.5vh;
    height: 43vh;
  }
  @media screen and (max-width: 500px) {
    font-size: 17px;
    font-weight: 500;
    height: 40vh;
  }
`;
export const LogoSection = styled.div`
  top: -31vh;
  position: absolute;
  z-index: 1;
  @media screen and (max-width: 500px) {
    top: -38vh;
    display: none;
  }
`;
export const LogoSection2 = styled.div`
  top: -35vh;
  position: absolute;
  z-index: 1;
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
export const VideoSection = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  display: flex;
  justify-content: left;
  align-items: center;

  video {
    width: 100%;
    opacity: 85%;
    z-index: -1;
  }

  .Video-1 {
    display: block
  }

  .Video-2 {
    display: none
  }

  @media screen and (max-width: 945px) {
    .Video-1 {
      display: none;
    }

    .Video-2 {
      display: block
    }
  }
`;