import styled from 'styled-components';

export const Container = styled.div``;
export const Section = styled.section`
  background: #0e1212;
  width: auto;
  height: 100vh;
`;
export const Header = styled.div``;
export const Title = styled.div`
  display: flex;
`;
export const Inside = styled.div`
  flex-direction: column;
  display: flex;
  margin: 0 50px;
`;
export const AboutMe = styled.text`
  font-size: 30px;
  font-family: monospace;
  font-weight: bold;
  color: #682ae9;
  padding: 20px 0;
`;
export const Text = styled.text`
  color: #fff;
  font-size: 20px;
  text-align: left;
  font-family: monospace;
`;

export const LinkedIn = styled.div`
  margin-top: 100px;
`;
export const ButtonLinkedIn = styled.button`
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
export const TextLinkedIn = styled.text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
