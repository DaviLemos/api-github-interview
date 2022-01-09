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
  switch (size) {
    case 'x-large':
      padding = '10px 25px';
      width = '200px';
      size = '20px';
      break;
    case 'large':
      padding = '10px 20px';
      width = '150px';
      size = '18px';
      break;
    case 'medium':
      padding = '10px 15px';
      width = '125px';
      size = '16px';
      break;
    case 'small':
      padding = '10px';
      width = '190px';
      size = '14px';
      break;
    default:
      padding = '0';
      width = '150px';
      size = '12px';
      break;
  }
  return (
    <Btn
      color={color}
      background={background}
      onClick={onClick}
      type={type}
      size={size}
      padding={padding}
      // width={width}
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
