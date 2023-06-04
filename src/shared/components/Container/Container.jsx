import PropTypes from 'prop-types';
import { ContainerWrapper } from './Container.styled';

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
