import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
// eslint-disable-next-line import/no-unresolved
import SEO from "components/CommonComponents/SEO";
import {
  ContactUsPageContainer,
  ContactUsSection,
  ContactFormSection,
} from "./style";

const ContactUsPage: FC = () => (
  <ContactUsPageContainer>
    <SEO
      pathname="contactUsPage"
      keywords={[
        "OSE Contact Page",
        "OSE Contact Us",
        "OSE Contact Information",
      ]}
      description="ose (oversea sports and education) contact information"
    />
    <ContactUsSection>
      <StaticImage
        src="../../images/main.jpg"
        alt="us"
        width={600}
        height={380}
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

export default ContactUsPage;
