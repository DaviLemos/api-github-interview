import React from 'react';
import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({
  onClick,
  type,
  text,
  size,
  padding,
  width,
  margin,
  color,
  background,
  radius,
}) => {
  return (
    <Btn
      color={color}
      background={background}
      onClick={onClick}
      type={type}
      size={size}
      padding={padding}
      width={width}
      margin={margin}
      radius={radius}
    >
      {text}
    </Btn>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  radius: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  size: '',
};

export default Button;
