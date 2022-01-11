import React from 'react';
import { Ipt } from './Input.styled';
import PropTypes from 'prop-types';

const Input = ({
  text,
  size,
  padding,
  width,
  height,
  margin,
  radius,
  onChange,
  onBlur,
  border,
}) => {
  return (
    <Ipt
      onChange={onChange}
      size={size}
      padding={padding}
      width={width}
      height={height}
      margin={margin}
      radius={radius}
      placeholder={text}
      onBlur={onBlur}
      border={border}
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
