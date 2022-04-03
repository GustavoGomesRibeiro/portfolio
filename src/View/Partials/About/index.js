import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import {
  Container,
  Section,
  Header,
  Title,
  Inside,
  AboutMe,
  Text,
  LinkedIn,
  ButtonLinkedIn,
  TextLinkedIn,
} from './styles';
import code from '../../../assets/img/code.png';

export default function About() {
  return (
    <Container>
      <Section id="about">
        <Header>
          <Title>
            <img src={code} alt="code" style={{ width: '50%' }} />
            <Inside>
              <AboutMe> About me </AboutMe>
              <Text>
                Meu nome é Gustavo Ribeiro Gomes, tenho 22 anos, moro em Osasco
                - São Paulo, estou a procura de desafios profissionais na área
                de desenvolvimento. Sou formado em Sistemas de Informação na
                faculdade Uninove. Atualmente, atuo como Desenvolvedor Full
                Stack Junior, na Empresa NZN. Já atuei como Desenvolvedor
                Front-End Junior em uma startup chamada StarPay, onde atuei por
                1 ano e 4 meses. Para mais detalhes do perfil segue o meu
                LinkedIn.
              </Text>
              <LinkedIn>
                <ButtonLinkedIn
                  as="a"
                  href="https://www.linkedin.com/in/gustavoribeirogomes/"
                  style={{ textDecoration: 'none' }}
                >
                  <TextLinkedIn>
                    <FaLinkedin style={{ marginRight: 10 }} />
                    Meu LinkedIn
                  </TextLinkedIn>
                </ButtonLinkedIn>
              </LinkedIn>
            </Inside>
          </Title>
        </Header>
      </Section>
    </Container>
  );
}
