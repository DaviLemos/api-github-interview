import React from 'react';

import Img from '../components/image/Image';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Image/Image',
  component: Img,
};

const Template = (args) => <Img {...args} />;

export const Image = Template.bind({});
Image.args = {
  src: 'https://picsum.photos/200/300',
  alt: 'Image',
  width: '150px',
  height: '150px',
  margin: '0 0 0 10%',
  borderRadius: '50%',
  cursor: 'pointer',
};
