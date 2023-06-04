import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { follow } from 'redux/users/operations';
import { selectFolowings } from 'redux/users/selectors';

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

const UserItem = ({ user, tweets, followers, avatar, id }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const folowings = useSelector(selectFolowings);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFollowing(folowings.includes(id));
  }, [folowings, id]);

  const handleClick = () => {
    dispatch(follow(id));
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
        <p>{isFollowing ? followers + 1 : followers} FOLOWERS</p>
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
