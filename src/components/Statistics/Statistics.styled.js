import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0px;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  background-color: ${props => props.color};
`;

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
