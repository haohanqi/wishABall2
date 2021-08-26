import React from 'react';
import {
  ContactUsPageContainer,
  ContactUsSection,
  ContactFormSection,
} from './style';
import { StaticImage } from 'gatsby-plugin-image';
//import wish2 from 'images/wish2.jpg';

const ContactUsPage = () => {
  return (
    <ContactUsPageContainer>
      <ContactUsSection>
        <StaticImage
          src="../../images/wish2.jpg"
          alt="us"
          width={600}
          loading="lazy"
          backgroundColor="transparent"
        />
      </ContactUsSection>
      <ContactFormSection>
        <form
          className="contact-form-container"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="contact"
        >
          <div className="contactTitle">Contact Us</div>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            className="formInput"
            placeholder="Your name"
            name="clients name"
            required
          />
          <input
            type="email"
            className="formInput"
            placeholder="Your Email"
            name="clients email"
            required
          />
          <input
            type="text"
            className="formInput"
            name="company name"
            placeholder="Company Name"
          />
          <textarea
            className="messageInput"
            name="message"
            placeholder="Message"
          />
          <input type="submit" className="submit-button" value="Send" />
        </form>
      </ContactFormSection>
    </ContactUsPageContainer>
  );
};

export default ContactUsPage;
