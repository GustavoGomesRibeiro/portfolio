import React from 'react';
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
} from './styles';

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Logo> .Gomes() </Logo>
        <Details>
          <Button>
            <About>.about()</About>
          </Button>
          <Button>
            <Knowledge>.knowledge()</Knowledge>
          </Button>
          <Button>
            <Projects>.projects()</Projects>
          </Button>
          <Button>
            <Contact>.contact()</Contact>
          </Button>
        </Details>
      </HeaderContainer>
    </Container>
  );
}
