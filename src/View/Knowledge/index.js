import React from 'react';
import {
  FaReact,
  FaHtml5,
  SiCss3,
  SiJavascript,
  FaAngular,
  FaJava,
  FaAws,
  FaDatabase,
} from 'react-icons/all';

import {
  Container,
  Section,
  Title,
  MyKnowledge,
  ContainersKnowledge,
  Techs,
  Stack,
  StackKnowledge,
} from './styles';

export default function Knowledge() {
  return (
    <Container>
      <Section>
        <Title>
          <MyKnowledge> Knowledge </MyKnowledge>
        </Title>
        <ContainersKnowledge>
          <Techs>
            <FaHtml5 size={60} color="#dd4b25" />
            <Stack> Html </Stack>
            <StackKnowledge>
              {' '}
              Desenvolvimento Web Html + Css + Js
            </StackKnowledge>
          </Techs>
          <Techs>
            <SiCss3 size={60} color="#254bdd" />
            <Stack> Css </Stack>
            <StackKnowledge>
              {' '}
              Desenvolvimento Web Html + Css + Js
            </StackKnowledge>
          </Techs>
          <Techs>
            <SiJavascript size={60} color="#efd81d" />
            <Stack> JavaScript </Stack>
            <StackKnowledge> Lógica de programação </StackKnowledge>
          </Techs>
          <Techs>
            <FaReact size={60} color="#5ed3f3" />
            <Stack> ReactJS </Stack>
            <StackKnowledge> Styled-Components </StackKnowledge>
            <StackKnowledge> Api Restful </StackKnowledge>
            <StackKnowledge>
              React Hooks (useContext, useEffect, useState)
            </StackKnowledge>
          </Techs>
          <Techs>
            <FaReact size={60} color="#5ed3f3" />
            <Stack> React Native </Stack>
            <StackKnowledge> Expo </StackKnowledge>
            <StackKnowledge> Styled-Components </StackKnowledge>
            <StackKnowledge> GeoLocalização </StackKnowledge>
            <StackKnowledge> Api Restful </StackKnowledge>
            <StackKnowledge>
              React Hooks (useContext, useEffect, useState)
            </StackKnowledge>
          </Techs>
          <Techs>
            <FaAngular size={60} color="#d6002f" />
            <Stack> AngularJs </Stack>
            <StackKnowledge> Conhecimento Básico </StackKnowledge>
          </Techs>
          <Techs>
            <FaJava size={60} color="#d6002f" />
            <Stack> Java </Stack>
            <StackKnowledge> SpringBoot </StackKnowledge>
            <StackKnowledge> Hibernate </StackKnowledge>
            <StackKnowledge> Maven </StackKnowledge>
          </Techs>
          <Techs>
            <FaAws size={60} color="#f6981d" />
            <Stack> AWS </Stack>
            <StackKnowledge> Ec2 </StackKnowledge>
            <StackKnowledge> Lambdas </StackKnowledge>
            <StackKnowledge> RDS Oracle </StackKnowledge>
            <StackKnowledge> Route53 </StackKnowledge>
          </Techs>
          <Techs>
            <FaDatabase size={60} color="#fff" />
            <Stack> Desenvolvimento Back-end </Stack>
            <StackKnowledge> Sql </StackKnowledge>
            <StackKnowledge> Oracle </StackKnowledge>
            <StackKnowledge> MongoDb </StackKnowledge>
            <StackKnowledge> NodeJs </StackKnowledge>
          </Techs>
        </ContainersKnowledge>
      </Section>
    </Container>
  );
}
