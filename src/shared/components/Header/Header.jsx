import Container from '../Container';
import { HeaderSection, NavigationList, NavigationLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <nav>
          <NavigationList>
            <li>
              <NavigationLink to="/">Home</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/tweets">Tweets</NavigationLink>
            </li>
          </NavigationList>
        </nav>
      </Container>
    </HeaderSection>
  );
};

export default Header;
