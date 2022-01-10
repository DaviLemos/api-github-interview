import React from 'react';
import { Ipt } from './Input.styled';
import PropTypes from 'prop-types';

const Input = ({
  text,
  size,
  padding,
  width,
  margin,
  radius,
  onChange,
  onBlur,
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
    <Ipt
      onChange={onChange}
      size={size}
      padding={padding}
      width={width}
      margin={margin}
      radius={radius}
      placeholder={text}
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  radius: PropTypes.string,
};

Input.defaultProps = {
  border: '1px solid black',
};

export default Input;
