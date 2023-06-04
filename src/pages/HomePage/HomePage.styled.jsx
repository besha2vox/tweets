import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { button } from 'shared/styles/button';

export const HomeTitle = styled.h1`
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;

export const HomeText = styled.p`
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 20px;
  }
`;

export const HomeButton = styled(Link)`
  margin: 0 auto;
  ${button};
`;
