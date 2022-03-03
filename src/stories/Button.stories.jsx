import React from 'react';

import Btn from '../components/button/Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Button/Button',
  component: Btn,
};

const Template = (args) => <Btn {...args} />;

export const Button = Template.bind({});
Button.args = {
  background: '#00eeff',
  color: '#000000',
  text: 'Click me',
  padding: '10px',
  width: '150px',
  size: '16px',
  margin: '0 0 0 10%',
  radius: '10px',
  onClick: undefined,
};
