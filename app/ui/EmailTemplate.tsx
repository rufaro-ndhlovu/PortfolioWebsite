import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import { EmailProps } from "./ContactForm";

export const EmailTemplate = ({
  name,
  email,
  subject,
  message,
}: EmailProps) => {
  const containerStyle = {
    margin: "0 auto",
    padding: "0 1.25rem",
    marginTop: "1.25rem",
    marginBottom: "3rem",
  };

  const hrStyle = {
    marginTop: "0.625rem",
    marginBottom: "1.875rem",
    border: "1px solid #ccc",
  };

  const textStyle = {
    base: {
      fontSize: "1rem",
      marginTop: "0",
      marginBottom: "0.625rem",
    },
  };

  return (
    <Html>
      <Head />
      <Preview>Portfolio Message</Preview>
      <Body style={{ fontFamily: "sans-serif", background: "#fff" }}>
        <Container style={containerStyle}>
          <Hr style={hrStyle} />

          <Text style={textStyle.base}>
            From: <i>{email}</i>,
          </Text>

          <Text style={textStyle.base}>
            Name: <i>{name}</i>,
          </Text>

          <Text style={textStyle.base}>
            Subject: <i>{subject}</i>,
          </Text>

          <Text style={textStyle.base}>{message}</Text>

          <Text style={textStyle.base}>
            Sent via Contact Form @{" "}
            <a
              rel="noopener"
              href="https://rufarondhlovu.co.uk"
              target="_blank"
            >
              rufarondhlovu.co.uk
            </a>
            <br />
          </Text>
          <Hr style={hrStyle} />
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
