import React from 'react';
import { Ipt } from './Input.styled';
import PropTypes from 'prop-types';

const Input = ({
  background,
  color,
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
      background={background}
      color={color}
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
  background: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  radius: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  border: PropTypes.string,
};

Input.defaultProps = {
  border: '1px solid black',
  background: 'white',
};

export default Input;
