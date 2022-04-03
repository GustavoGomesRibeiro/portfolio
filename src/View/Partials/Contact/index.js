import React from 'react';
import { Container, Section, Title, MyContact } from './styles';

export default function Contact() {
  return (
    <Container>
      <Section id="contact">
        <Title>
          <MyContact> Contact </MyContact>
        </Title>
      </Section>
    </Container>
  );
}
