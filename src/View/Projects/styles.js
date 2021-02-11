import styled from 'styled-components';

export const Container = styled.div``;
export const Section = styled.section`
  background: #0e1212;
  width: auto;
  height: 100vh;
`;
export const Title = styled.text`
  display: flex;
  justify-content: center;
`;
export const MyProjects = styled.div`
  font-size: 30px;
  font-family: monospace;
  font-weight: bold;
  color: #682ae9;
  padding: 20px 0;
`;
export const ContainersProjects = styled.div`
  display: flex;
  height: auto;
  flex-wrap: wrap;
  margin-top: 25px;
`;
export const Projects = styled.div`
  text-align: center;
  height: auto;
  background-color: #1e1e1e;
  padding: 30px;
  border-radius: 15px;
  margin: 10px;
  flex-basis: 250px;
  flex-grow: 1;
  box-shadow: 0 0 20px #1e1e1e;
  transition: all 0.5s;
`;
export const NameProject = styled.h2`
  padding: 10px 0;
  font-size: 26px;
  color: #fff;
  font-family: monospace;
`;

export const Describe = styled.text`
  line-height: 30px;
  font-size: 18px;
  color: #fff;
  font-family: monospace;
`;
