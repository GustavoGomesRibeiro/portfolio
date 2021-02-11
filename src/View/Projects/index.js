import React from 'react';
import {
  Container,
  Section,
  Title,
  MyProjects,
  ContainersProjects,
  Projects,
  NameProject,
  Describe,
} from './styles';

export default function Project() {
  return (
    <Container>
      <Section>
        <Title>
          <MyProjects> Projects </MyProjects>
        </Title>
        <ContainersProjects>
          <Projects>
            <NameProject> GeoService </NameProject>
            <Describe>
              Projeto React Native desenvolvido com a utilização do expo.
            </Describe>
          </Projects>
          <Projects>
            <NameProject> Em Breve </NameProject>
          </Projects>
          <Projects>
            <NameProject> Em Breve </NameProject>
          </Projects>
          <Projects>
            <NameProject> Em Breve </NameProject>
          </Projects>
        </ContainersProjects>
      </Section>
    </Container>
  );
}
