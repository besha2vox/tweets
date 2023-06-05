import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';

import {
  selectIsLoading,
  selectTotalHints,
  selectUsersLength,
} from 'redux/users/selectors';
import { getUsers } from 'redux/users/operations';

import Button from 'shared/components/Button/Button';
import UserList from 'shared/components/UserList/UserList';
import { PageWrapper, LoaderWrapper, ButtonList } from './TweetsPage.styled';

const TweetsPage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('All');
  const usersLength = useSelector(selectUsersLength);
  const totalHints = useSelector(selectTotalHints);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const buttonList = ['All', 'Following', 'Unfollowing'];

  useEffect(() => {
    if (query === 'All') {
      dispatch(getUsers({ page }));
    }

    if (query === 'Following') {
      dispatch(getUsers({ page, isFollowing: true }));
    }

    if (query === 'Unfollowing') {
      dispatch(getUsers({ page, isFollowing: false }));
    }
  }, [dispatch, page, query]);

  const handleClick = query => {
    setPage(1);
    setQuery(query);
  };

  const increment = () => {
    setPage(prevState => (prevState += 1));
  };

  return (
    <PageWrapper>
      <ButtonList>
        {buttonList.map(text => (
          <li key={text}>
            <Button
              query={query}
              text={text}
              handleClicker={() => handleClick(text)}
            />
          </li>
        ))}
      </ButtonList>
      <UserList />
      {totalHints > usersLength && (
        <Button text="NEXT" handleClicker={increment} isDisabled={isLoading}>
          {isLoading && (
            <LoaderWrapper>
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#373737', '#EBD8FF', '#5CD3A8', '#471CA9', '#AE7BE3']}
              />
            </LoaderWrapper>
          )}
        </Button>
      )}
    </PageWrapper>
  );
};

export default TweetsPage;
