import styled from 'styled-components';

export const Btn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 14px 56px;
  margin: 0 auto;

  width: fit-content;
  max-width: 196px;

  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[0]};

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, isFollowing }) =>
    isFollowing ? theme.background.accent : theme.background.secondary};
  border-radius: 10.3108px;
  box-shadow: ${({ theme }) => theme.boxShadows.secondary};

  transition-property: box-shadow, background-color;
  transition-duration: 300ms;
  transition-timing-function: ${({ theme }) => theme.transition.main};
  overflow: hidden;

  &:hover,
  &.active {
    box-shadow: ${({ theme }) => theme.boxShadows.secondaryInsert};
  }

  &.active {
    background-color: ${({ theme }) => theme.background.accent};
  }
`;
