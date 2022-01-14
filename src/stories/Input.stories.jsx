import React from 'react';

import Ipt from '../components/input/Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Input/Input',
  component: Ipt,
};

const Template = (args) => <Ipt {...args} />;

export const Input = Template.bind({});
Input.args = {
  background: '#FFF',
  color: '#000',
  text: 'Texto',
  width: '100px',
  height: '20px',
  border: '2px solid purple',
  radius: '20px',
  size: '16px',
  padding: '10px',
  margin: '0 20%',
  onChange: undefined,
  onBlur: undefined,
};
