import React from 'react';
import { Img } from './Avatar.styled';
import PropTypes from 'prop-types';

export const Avatar = ({ url }) => {
  return <Img src={url} />;
};
