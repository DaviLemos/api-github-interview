// * React * //
import React from 'react';
// * Components * //
import Image from '../components/image/Image';
// * Typography * //
import { H1 } from '../components/typography/Typography';
// * Boxes * //
import FlexBox from '../components/box/Box';

const Login = () => {
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
      testid="login-screen"
    >
      <FlexBox
        background="linear-gradient(300deg,#28313b 0%,#485461 40%,#28313b 80%)"
        width="200px"
        justify="center"
        align="center"
        border="5px solid #5f0a87"
        borderRadius="20px"
        padding="20px"
        cursor="pointer"
        onClick={github}
        testid="login-button"
      >
        <H1 color="white" margin="0 5px 0 0">
          Login
        </H1>
        <Image
          width="60px"
          height="60px"
          src="https://github.com/fluidicon.png"
          alt=""
          testid="login-image"
          rotate={false ? true : false}
        />
      </FlexBox>
    </FlexBox>
  );
};
export default Login;
