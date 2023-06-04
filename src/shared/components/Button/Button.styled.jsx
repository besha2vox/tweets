import styled from 'styled-components';

export const Btn = styled.button`
  position: relative;
  padding: 14px 56px;
  margin: 0 auto;

  width: fit-content;

  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[0]};

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, isFolowing }) =>
    isFolowing ? theme.background.accent : theme.background.secondary};
  border-radius: 10.3108px;
  box-shadow: ${({ theme }) => theme.boxShadows.secondary};
  transition: box-shadow 300ms ${({ theme }) => theme.transition.main};
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.secondaryInsert};
  }
`;
