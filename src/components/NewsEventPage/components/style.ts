import styled from "styled-components";

export const AdverSectionWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 250px;

  @media only screen and (max-width: 480px) {
    min-height: 550px;
    flex-direction: column;
  }
`;

export const AdverItem = styled.div`
  width: 30%;
  height: 150px;
  border-radius: 10px;
  background-color: #eff0f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const MoreNewsSectionWrapper = styled.section`
  width: 100%;
  padding: 2.5%;
  .headerTitle {
    font-size: 2rem;
    font-weight: 700;
    &:after {
      display: block;
      content: "";
      width: 100%;
      height: 2px;
      background-color: #c8c8c8;
      margin-top: 2rem;
    }
  }

  @media only screen and (max-width: 480px) {
    margin-top: 3rem;
  }
`;

export const MoreNewsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const NewsListItemWrapper = styled.div`
  width: 100%;
  min-height: 120px;
  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #c8c8c8;
  }
`;

export const NewsListItem = styled.div`
  width: 100%;
  min-height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
  row-gap: 20px;
  flex-wrap: wrap;
  padding: 15px;

  .blogWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 25px;
    flex-wrap: wrap;
  }

  .blogInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 10px;
  }

  .blogTitle {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    min-width: 330px;
    flex-shrink: 0;
  }

  .blogDes {
    max-width: 230px;
    font-size: 0.85rem;
    color: #8c8c8c;
    margin-right: 10px;
  }

  .readMoreButton {
    width: 7rem;
    height: 3.2rem;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: white;
    font-size: 0.85rem;
    cursor: pointer;
  }

  @media only screen and (max-width: 669px) and (min-width: 481px) {
    .blogDes {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 1rem;

    .blogWrapper {
      width: 100%;
      min-width: 320px;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;
    }

    .blogTitle {
      max-width: 95%;
      min-width: auto;
    }

    .blogDes {
      max-width: 90%;
      min-width: auto;
    }

    .blogInfo {
      max-width: 90%;
      min-width: auto;
    }

    .readMoreButton {
      width: 5rem;
      height: 2.2rem;
      font-size: 0.7rem;
    }
  }
`;

export const EventListItemWrapper = styled(NewsListItemWrapper)``;

export const EventListItem = styled(NewsListItem)`
  .dateWrapper {
    min-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .date {
    font-size: 3rem;
    font-weight: 700;
  }

  .month {
    font-size: 1rem;
    color: #8c8c8c;
  }
`;
