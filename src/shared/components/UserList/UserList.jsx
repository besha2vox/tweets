import { useSelector } from 'react-redux';

import { selectUsers, selectIsLoading } from 'redux/users/selectors';

import UserItem from '../UserItem/UserItem';
import { UsersList } from './UserList.styled';

const UserList = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {!isLoading && !!users.length && (
        <UsersList>
          {users.map(({ user, tweets, followers, avatar, id }) => (
            <UserItem
              key={id}
              user={user}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              id={id}
            />
          ))}
        </UsersList>
      )}
    </>
  );
};

export default UserList;
