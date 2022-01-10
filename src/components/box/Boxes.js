// * React * //
import React from 'react';
// * Flex Box * //
import { FlxBox } from './FlexBox.styled';
// * Search Box * //
import { SrhBox } from './SearchBox.styled';
// * Button Box * //
import { RwBox } from './RowBox.styled';
// * Profile Box * //
import { PrfBox } from './ProfileBox.styled';

export const FlexBox = ({ children }) => {
  return <FlxBox>{children}</FlxBox>;
};

export const SearchBox = ({ children }) => {
  return <SrhBox>{children}</SrhBox>;
};

export const RowBox = ({ children }) => {
  return <RwBox>{children}</RwBox>;
};

export const ProfileBox = ({ children }) => {
  return <PrfBox>{children}</PrfBox>;
};
