import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  margin-bottom: 5px;
  background-color: ${props => {
    if (props.isOnline) {
      return 'green';
    }
    return 'red';
  }};
`;

export const UserName = styled.p`
  margin-left: 15px;
`;
