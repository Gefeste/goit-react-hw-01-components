import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  background-color: gray;
  justify-content: space-around;
  padding: 0px;
  padding-top: 10px;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  width: 100%;
  text-align: center;
`;
