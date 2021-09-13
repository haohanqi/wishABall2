import styled from 'styled-components';

export const ContactUsPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    max-height: 900px;
  }
`;

export const ContactUsSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactFormSection = styled(ContactUsSection)`
  form {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .contactTitle {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 5%;
    }

    .formInput {
      width: 50%;
      height: 40px;
      border: 2px solid black;
      padding-left: 10px;
      margin-bottom: 5%;
    }

    .submit-button {
      width: 100px;
      height: 40px;
      background-color: black;
      color: white;
      border: none;
    }

    textarea {
      width: 50%;
      height: 300px;
      border: 2px solid black;
      padding-left: 10px;
      margin-bottom: 5%;
    }
  }

  @media only screen and (max-width: 480px) {
    form {
      .formInput {
        width: 90%;
      }
      textarea{
         width: 90%; 
      }
  }
`;
