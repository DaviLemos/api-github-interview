// * React * //
import React from 'react';
// * List* //
import { Lst, Itm } from './List.styled';

export const List = ({ children }) => {
  return <Lst>{children}</Lst>;
};

export const Item = ({ children }) => {
  return <Itm>{children}</Itm>;
};
