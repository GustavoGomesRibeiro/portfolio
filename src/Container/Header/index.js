import React from 'react';
// import Switch from 'react-switch';
import {
  Container,
  HeaderContainer,
  Logo,
  Details,
  Button,
  About,
  Projects,
  Knowledge,
  Contact,
  // DarkTheme
} from './styles';

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Logo> .Gomes() </Logo>
        <Details>
          <Button href="#about">
            <About>.about()</About>
          </Button>
          <Button href="#knowledge">
            <Knowledge>.knowledge()</Knowledge>
          </Button>
          <Button href="#project">
            <Projects>.projects()</Projects>
          </Button>
          <Button href="#contact">
            <Contact>.contact()</Contact>
          </Button>
          {/* <DarkTheme>
            <Switch />
          </DarkTheme> */}
        </Details>
      </HeaderContainer>
    </Container>
  );
}
