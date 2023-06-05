import { useSelector } from 'react-redux';

import { selectUsers } from 'redux/users/selectors';

import UserItem from '../UserItem/UserItem';
import { UsersList } from './UserList.styled';

const UserList = () => {
  const users = useSelector(selectUsers);

  if (users.length < 1) return <p>This list is empty</p>;

  return (
    <UsersList>
      {users.map(({ user, tweets, followers, avatar, id, isFollowing }) => (
        <UserItem
          isFollowing={isFollowing}
          key={id}
          user={user}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
          id={id}
        />
      ))}
    </UsersList>
  );
};

export default UserList;
