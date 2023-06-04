import PropTypes from 'prop-types';

import Button from '../Button/Button';
import image from 'images/picture.png';
import { ReactComponent as LogoIcon } from 'images/Vector.svg';
import {
  UserItemWrapper,
  ImagesWrapper,
  LogoWrapper,
  UserInfoWrapper,
  AvatarWrapper,
} from './UserItem.styled';

const UserItem = ({ user, tweets, folowers, avatar, id }) => {
  const handleClick = () => {
    console.log('KURWA');
  };

  return (
    <UserItemWrapper>
      <ImagesWrapper>
        <LogoWrapper>
          <LogoIcon />
        </LogoWrapper>
        <img src={image} alt="tweet" />
      </ImagesWrapper>
      <UserInfoWrapper>
        <AvatarWrapper>
          <img src={avatar} alt="user" />
        </AvatarWrapper>
        <p>{tweets} TWITS</p>
        <p>{folowers} FOLOWERS</p>
      </UserInfoWrapper>
      <Button text="FOLOWING" handleClicker={handleClick} isFolowing={false} />
    </UserItemWrapper>
  );
};

UserItem.propTypes = {
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  folowers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default UserItem;
