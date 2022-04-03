import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;
export const Section = styled.section`
  height: 100vh;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 1% 10%;
  height: 150px;
  background: #0e1212;
`;
export const Logo = styled.text`
  font-family: monospace;
  font-weight: bold;
  font-size: 30px;
  color: #682ae9;
`;

export const Details = styled.div`
  margin-left: auto;
`;

export const Button = styled.button`
  border: none;
  background: none;
  margin-left: 10px;
`;

export const About = styled.text`
  margin-left: 10px;
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  color: #fff;
  &:hover {
    transition: 0.5s;
    color: #682ae9;
  }
`;
export const Projects = styled.text`
  margin-left: 10px;
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  color: #fff;
  &:hover {
    transition: 0.5s;
    color: #682ae9;
  }
`;
export const Services = styled.text`
  margin-left: 10px;
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  color: #fff;
  &:hover {
    transition: 0.5s;
    color: #682ae9;
  }
`;
export const Knowledge = styled.text`
  margin-left: 10px;
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  color: #fff;
  &:hover {
    transition: 0.5s;
    color: #682ae9;
  }
`;
export const Contact = styled.text`
  margin-left: 10px;
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  color: #fff;
  &:hover {
    transition: 0.5s;
    color: #682ae9;
  }
`;
export const Body = styled.div`
  margin-left: 10px;
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const ContainerName = styled.div``;
export const Title = styled.div``;
export const Gustavo = styled.text`
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-size: 64px;
  font-weight: bold;
`;
export const Gomes = styled.text`
  color: #682ae9;
  font-family: 'Roboto Mono', monospace;
  font-size: 64px;
  font-weight: bold;
`;
export const Name = styled.div``;
export const Presentation = styled.text`
  color: #682ae9;
  font-family: 'Roboto Mono', monospace;
  font-size: 26px;
`;
export const Professional = styled.div``;
export const DetailsProfessional = styled.text`
  color: #747474;
`;

export const GitHub = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
export const ButtonGit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background: #4070f4;
  width: 200px;
  padding: 15px;
  &:hover {
    transition: 0.5s;
    background: #2961fa;
  }
`;

export const TextGit = styled.text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  .scrollTop {
    width: 100%;
    height: 20px;
    bottom: 20px;
    z-index: 1000;
    position: fixed; 
    align-items: center;
    justify-content: center;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    opacity: 0.5;
  }

  .scrollTop:hover{
    opacity: 1;
  }
  
  @keyframes fadeIn {
    0 % {
      opacity: 0;
    }
    100 % {
      opacity: 0.5;
    }
  }
`;
