// * React * //
import React from 'react';
// * Typography * //
import { Th1, Th2, Th3, TP } from './Typography.styled';

export const H1 = ({ children, color = 'black', margin }) => {
  return (
    <Th1 color={color} margin={margin}>
      {children}
    </Th1>
  );
};

export const H2 = ({ children, color = 'black', margin }) => {
  return (
    <Th2 color={color} margin={margin}>
      {children}
    </Th2>
  );
};

export const H3 = ({ children, color = 'black', margin }) => {
  return (
    <Th3 color={color} margin={margin}>
      {children}
    </Th3>
  );
};

export const P = ({ children, color = 'black', margin }) => {
  return (
    <TP color={color} margin={margin}>
      {children}
    </TP>
  );
};
