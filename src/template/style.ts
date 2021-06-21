import styled from 'styled-components';

export const NewsBanner = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: #f5f5f5;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .logoTitle {
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 3rem;
    font-family: Shadows Into Light, cursive;
    transform: rotate(5deg);
  }

  .titleContainer {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .companyLogo {
    position: absolute;
    bottom: -50px;
    left: 10%;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media only screen and (max-width: 480px) {
    min-height: 170px;

    .logoTitle {
      font-size: 1.5rem;
    }

    .titleContainer {
      align-items: center;
    }

    .companyLogo {
      bottom: -30px;
      width: 60px;
      height: 60px;
    }
  }
`;

export const NewsPageContainer = styled.section`
  width: 100%;
  padding: 5% 10%;
  background-color: '#fafafa';
`;

export const NewTitle = styled.h1`
  font-size: 3.5rem;
  color: black;
  font-weight: bold;
  margin-bottom: 0;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const NewDate = styled.div`
  font-size: 1rem;
  color: #707070;
  margin: 10px 0;
  @media only screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const NewsButton = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  float: right;
  cursor: pointer;
  margin-top: 20px;
  transition: all linear 0.3s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const EventPageContainer = styled(NewsPageContainer)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const EventField = styled.div`
  min-width: 200px;
  margin-bottom: 20px;

  .title {
    font-size: 2rem;
    font-weight: 600;
    margin-right: 20px;
    margin-bottom: 10px;
  }

  .des {
    font-size: 1rem;
  }
`;

export const JoinButton = styled(NewsButton)`
  position: absolute;
  bottom: 35%;
  right: 5%;
`;