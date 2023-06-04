import styled from 'styled-components';

export const UserItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding-bottom: 36px;

  width: 100%;

  background: ${({ theme }) => theme.background.gradient};
  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc((100% - 2 * 24px) / 3);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: calc((100% - 2 * 48px) / 3);
  }
`;

export const ImagesWrapper = styled.div`
  position: relative;
  padding: 28px 36px 26px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: ${({ theme }) => theme.background.secondary};
    box-shadow: ${({ theme }) => theme.boxShadows.tertiary};
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  & svg {
    fill: rgba(255, 255, 255, 0.3);
  }
`;

export const UserInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 15px 36px;
  row-gap: 16px;

  color: ${({ theme }) => theme.colors.secondary};
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 50%;
  padding: 8px;

  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;

  & img {
    position: relative;
    z-index: 1;
    border-radius: 50%;
  }

  &::before {
    content: '';
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background-color: ${({ theme }) => theme.background.secondary};
    box-shadow: ${({ theme }) => theme.boxShadows.tertiary};
  }
`;
