import styled from 'styled-components';

export const UsersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 48px;
  }
`;
