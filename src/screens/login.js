// * React * //
import React, { useEffect, useState } from 'react';
// * Components * //
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import { Avatar, Logo } from '../components/image/Images';
// * Typography * //
import { H1, H2, H3, P } from '../components/typography/Typography';
// * Boxes * //
import { FlexBox } from '../components/box/Boxes';

const Login = ({}) => {
  const github = () => {
    window.open('http://localhost:5000/auth/github', '_self');
  };

  return (
    <FlexBox
      justify="center"
      align="center"
      width="100%"
      height="100vh"
      background="#6d7b86"
    >
      <FlexBox
        background="linear-gradient(300deg,#28313b 0%,#485461 40%,#28313b 80%)"
        width="200px"
        justify="center"
        align="center"
        border="5px solid #5f0a87"
        borderRadius="20px"
        // background="grey"
        padding="20px"
        cursor="pointer"
        onClick={github}
      >
        <H1 color="white" margin="0 5px 0 0">
          Login
        </H1>
        <Logo width="80px" src="https://github.com/fluidicon.png" alt="" />
      </FlexBox>
    </FlexBox>
  );
};
export default Login;
