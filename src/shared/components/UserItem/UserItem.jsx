import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { following } from 'redux/users/operations';

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

const UserItem = ({ user, tweets, followers, avatar, id, isFollowing }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(following({ id, isFollowing: !isFollowing, followers }));
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
        <p>{user}</p>
        <p>{tweets} TWITS</p>
        <p>{followers} FOLOWERS</p>
      </UserInfoWrapper>
      <Button
        text={isFollowing ? 'FOLLOWING' : 'FOLLOW'}
        handleClicker={handleClick}
        isFollowing={isFollowing}
      />
    </UserItemWrapper>
  );
};

UserItem.propTypes = {
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default UserItem;
