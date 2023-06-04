import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderSection = styled.header`
  padding: 4px 0;
  box-shadow: ${({ theme }) => theme.boxShadows.secondary};
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

export const NavigationLink = styled(NavLink)`
  padding: 12px 0;

  transition-property: color, text-shadow;
  transition-duration: 300ms;
  transition-timing-function: ${({ theme }) => theme.transition.main};

  &.active,
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    text-shadow: ${({ theme }) => theme.textShodows.main};
  }
`;
