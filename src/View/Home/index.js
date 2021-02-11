import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Header from '../../Container/Header';
import About from '../About/index';
import Knowledge from '../Knowledge/index';
import Project from '../Projects/index';
import Contact from '../Contact/index';
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
} from './styles';

export default function Index() {
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
    </Container>
  );
}
