import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px;

  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.mobile};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: ${({ theme }) => theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: ${({ theme }) => theme.breakpoints.desktop};
  }
`;
