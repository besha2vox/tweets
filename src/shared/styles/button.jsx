import { css } from 'styled-components';

export const button = css`
  padding: 4px 12px;

  width: fit-content;

  font-size: ${({ theme }) => theme.fontSizes[0]};

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadows.secondary};
  transition: box-shadow 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &focus {
    box-shadow: ${({ theme }) => theme.boxShadows.secondaryInsert};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 20px;
  }
`;
