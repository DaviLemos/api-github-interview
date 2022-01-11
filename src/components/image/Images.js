// * React * //
import React from 'react';
// * Avatar * //
import { Img } from './Avatar.styled';
// * Logo * //
import { LG } from './Logo.styled';

export const Avatar = ({ url, margin, width, height }) => {
  return <Img src={url} margin={margin} width={width} height={height} />;
};

export const Logo = ({ src, width, height, alt }) => {
  return <LG src={src} width={width} height={height} alt={alt} />;
};
