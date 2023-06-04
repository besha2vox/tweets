import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';

import { selectIsLoading } from 'redux/users/selectors';
import { getUsers } from 'redux/users/operations';

import Button from 'shared/components/Button/Button';
import UserList from 'shared/components/UserList/UserList';
import { PageWrapper, LoaderWrapper } from './TweetsPage.styled';

const TweetsPage = () => {
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);

  const increment = () => {
    setPage(prevState => (prevState += 1));
  };

  return (
    <PageWrapper>
      <UserList />
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
    </PageWrapper>
  );
};

export default TweetsPage;
