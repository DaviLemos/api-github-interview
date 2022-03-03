// * React * //
import React from 'react';
// * Flex Box * //
import { FlxBox } from './Box.styled';
import PropTypes from 'prop-types';

const FlexBox = ({
  children,
  direction,
  align,
  justify,
  background,
  border,
  borderRadius,
  margin,
  padding,
  width,
  height,
  cursor,
  onClick,
  position,
  testid,
}) => {
  return (
    <FlxBox
      direction={direction}
      align={align}
      justify={justify}
      background={background}
      border={border}
      borderRadius={borderRadius}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      cursor={cursor}
      onClick={onClick}
      position={position}
      data-testid={testid}
    >
      {children}
    </FlxBox>
  );
};

FlexBox.propTypes = {
  direction: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  cursor: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

FlexBox.defaultProps = {
  direction: 'row',
  align: 'normal',
  justify: 'start',
  background: 'transparent',
};

export default FlexBox;
