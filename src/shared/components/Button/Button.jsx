import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

const Button = ({
  text,
  handleClicker,
  isFolowing = false,
  children,
  isDisabled = false,
}) => {
  return (
    <Btn disabled={isDisabled} type="button" onClick={handleClicker}>
      {text}
      {children}
    </Btn>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClicker: PropTypes.func.isRequired,
  isFolowing: PropTypes.bool,
  isDisabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
