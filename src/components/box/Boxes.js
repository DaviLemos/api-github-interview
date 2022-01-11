// * React * //
import React from 'react';
// * Flex Box * //
import { FlxBox } from './FlexBox.styled';

export const FlexBox = ({
  children,
  direction = 'row',
  align = 'normal',
  justify = 'start',
  background = 'transparent',
  border,
  borderRadius,
  margin,
  padding,
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
    >
      {children}
    </FlxBox>
  );
};
