import React, { useState } from 'react';
import { FaGithub, FaArrowCircleUp } from 'react-icons/fa';
import Header from '../../Container/Header';
import About from '../Partials/About/index';
import Knowledge from '../Partials/Knowledge/index';
import Project from '../Partials/Projects/index';
import Contact from '../Partials/Contact/index';
import Footer from '../../Container/Footer';
import {
  Container,
  Section,
  Body,
  ContainerName,
  Title,
  Gustavo,
  Gomes,
  Presentation,
  Name,
  Professional,
  DetailsProfessional,
  GitHub,
  ButtonGit,
  TextGit,
  Icon
} from './styles';

export default function Index() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScroll = () => {
    if (!showScroll && window.pageYOffset > 900) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 900) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScroll);

  return (
    <Container>
      <Section>
        <Header />
        <Body>
          <ContainerName>
            <Title>
              <Gustavo>
                Gustavo
                <Gomes>.Gomes()</Gomes>
              </Gustavo>
            </Title>
            <Name>
              <Presentation>Gustavo Gomes</Presentation>
            </Name>
            <Professional>
              <DetailsProfessional>Full Stack Developer</DetailsProfessional>
            </Professional>
          </ContainerName>
        </Body>
        <GitHub>
          <ButtonGit
            as="a"
            href="https://github.com/GustavoGomesRibeiro"
            style={{ textDecoration: 'none' }}
          >
            <TextGit>
              <FaGithub style={{ marginRight: 10 }} />
              Meu GitHub
            </TextGit>
          </ButtonGit>
        </GitHub>
      </Section>
      <About />
      <Knowledge />
      <Project />
      <Contact />
      <Footer />
      <Icon>
        <FaArrowCircleUp
          className="scrollTop"
          onClick={scrollTop}
          style={{ height: 40, color: '#fff', display: showScroll ? 'flex' : 'none' }}
        />
      </Icon>
    </Container>
  );
}
