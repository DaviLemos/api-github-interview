import React from 'react';

import FlexBox from '../components/box/Box';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Box/Box',
  component: FlexBox,
};

const Template = (args) => <FlexBox {...args} />;

export const Box = Template.bind({});
Box.args = {
  background: '#FF7A00',
  color: 'white',
  padding: '10px 20px',
  width: '200px',
  margin: '10px',
  radius: '10px',
  onClick: undefined,
};
