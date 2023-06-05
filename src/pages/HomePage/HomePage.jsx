import { HomeTitle, HomeText, HomeButton } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <HomeTitle>Welcome to my test app!</HomeTitle>
      <HomeText>
        Select Users in the header to go to the page with a list of users, or
        click on the button below.
      </HomeText>
      <HomeButton to="/tweets">Go to Users</HomeButton>
    </>
  );
};

export default HomePage;
