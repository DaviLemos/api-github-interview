// * React * //
import React from 'react';
// * Typography * //
import { Th1, Th2 } from './Typography.styled';

export const H1 = ({ children }) => {
  return <Th1>{children}</Th1>;
};

export const H2 = ({ children }) => {
  return <Th2>{children}</Th2>;
};
