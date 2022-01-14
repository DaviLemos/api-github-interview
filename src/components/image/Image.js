// * React * //
import React from 'react';
// * Image * //
import { Img } from './Image.styled';
import PropTypes from 'prop-types';

const Image = ({
  src,
  margin,
  width,
  height,
  alt,
  onClick,
  border,
  background,
  cursor,
  rotate,
  borderRadius,
  testid,
}) => {
  return (
    <Img
      src={src}
      margin={margin}
      width={width}
      height={height}
      alt={alt}
      border={border}
      borderRadius={borderRadius}
      background={background}
      cursor={cursor}
      onClick={onClick}
      rotate={rotate}
      data-testid={testid}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  border: PropTypes.string,
  background: PropTypes.string,
  cursor: PropTypes.string,
  borderRadius: PropTypes.string,
  rotate: PropTypes.bool,
};

Image.defaultProps = {
  width: '150px',
  height: '150px',
  margin: '0 0 0 10px',
  border: 'none',
  background: 'transparent',
  rotate: false,
};

export default Image;
